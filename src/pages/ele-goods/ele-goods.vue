<template>
    <div class="goods">
        <!--食物类型的滑屏区域-->
        <div class="typeWrap" ref="typeWrap">
            <!--滑屏元素-->
            <ul class="typeList">
                <li class="typeItem" :class="{active:currentIndex===index}"
                        v-for="(item,index) in goods" :key="index" >
                    <ele-icon class="icon"  v-if="item.type >=0"
                              :size="3" :type="item.type"></ele-icon>
                    <span class="text">{{item.name}}</span>
                </li>
            </ul>
        </div>
        <!--食物列表的滑屏区域-->
        <div class="foodsWrap" ref="foodsWrap">
            <ul class="foodsList" ref="foodsList">
                <li class="foodsItem" v-for="(good,index) in goods" :key="index">
                    <h2 class="title">{{good.name}}</h2>
                    <ul class="foodList">
                        <li class="foodItem" v-for="(food,index) in good.foods">
                            <ele-food class="food" :food="food"></ele-food>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
   /* 实现左右侧列表联动的功能:
        1. 定义一个数组存放右侧列表每一项的位置
            注意渲染问题; 需要使用$nextTick这个api
        2. 拿到右侧滑动时的实时位置
            注意better-scroll 默认是不派发scroll钩子的
            配置:probeType:3
        3. 判断一下实时位置 坐落于第一步拿到的数组哪个区间
            这个区间所对应的下标 就是我们滑到了哪一项上!!
   */
    const OK = 0;
    import icon from "components/ele-icon/ele-icon";
    import food from "components/ele-food/ele-food"
    import BScroll from "better-scroll";
    export default {
        name: "ele-goods",
        data(){
          return {
              goods:[],
              tops:[], // 代表存放右侧列表每一项位置的数组
              scrollY:0 // 代表存放右侧列表滑动时的实时位置
          }
        },
        computed:{
            currentIndex(){
                //根据scrollY 和 tops 来确定currentIndex
                let {tops,scrollY} = this;
                let index = tops.findIndex((top,index)=>{
                    return scrollY >= top && scrollY<tops[index+1]
                })

                return index;
            }
        },
        methods:{
          //初始化滑屏
          _initScroll(){
              //让左侧列表产生滑屏
              new BScroll(this.$refs.typeWrap)
              //让右侧列表产生滑屏
              this.foodsScroll = new BScroll(this.$refs.foodsWrap,{
                  probeType:3
              });
              //这个scroll钩子 默认情况下 是不会被执行的
              this.foodsScroll.on("scroll",({x, y})=>{
                  this.scrollY = Math.abs(y);
              })
          } ,
          //初始化右侧列表位置信息的方法
          _initTops(){
              let foodsItems = this.$refs.foodsList.children;
              let top = 0;
              let tops = [top];
              // 将foodsItem集合 转成 一个数组
              Array.from(foodsItems).forEach((foodsItem)=>{
                  top += foodsItem.offsetHeight;
                  tops.push(top)
              })

              this.tops = tops;
          }
        },
        async mounted(){
            // 代表vue渲染的节点 刚刚 被挂载到dom树上!!
            // 很有可能界面的渲染还没有成功
            const {errno,data:goods} = await this.axios.get("/api/goods");
            if(errno === OK){
                this.goods = goods
            }

            //获取右侧列表每一项的位置去组装一个数组
            //将回调延迟到下次 DOM 更新循环之后执行
            this.$nextTick(()=>{
                this._initScroll()
                this._initTops();
            })
        },
        components:{
            "ele-icon":icon,
            "ele-food":food
        }
    }
</script>

<style scoped lang="stylus">
    @import "../../common/stylus/mixin.styl"
    @import "../../common/stylus/extend.styl"
    .goods
        display flex
        position absolute
        top 174px
        left 0
        right 0
        bottom 46px
        overflow hidden
        .typeWrap
            flex 0 0 80px
            .typeList
                @extend .clearfix
                .typeItem
                    one-px(rgba(7,17,27,0.1))
                    display flex
                    align-items center
                    justify-content center
                    height 54px
                    background #f3f5f7
                    &:after
                        left 0
                        right 0
                        margin auto
                        width 56px
                    &.active
                        background pink
                    .icon
                        vertical-align top
                    .text
                        vertical-align top
                        font-weight 200
                        font-size 12px
                        line-height 14px
        .foodsWrap
            flex 1
            .foodsList
                @extend .clearfix
                .foodsItem
                    .title
                        height 26px
                        background #f3f5f7
                        border-left 3px solid #d9dde1
                        font-size 12px
                        line-height 26px
                        color rgba(143,153,159,1)
                    .foodList
                        .foodItem
                            padding 18px
                            .food
                                one-px(rgba(7,17,27,0.1))
                            &:last-child
                                .food
                                    border-none()

</style>