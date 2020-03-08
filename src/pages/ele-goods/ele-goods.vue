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
            <ul class="foodsList">
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
    const OK = 0;
    import icon from "components/ele-icon/ele-icon";
    import food from "components/ele-food/ele-food"
    import BScroll from "better-scroll";
    export default {
        name: "ele-goods",
        data(){
          return {
              goods:[],
              currentIndex:0
          }
        },
        async mounted(){
            const {errno,data:goods} = await this.axios.get("/api/goods");
            if(errno === OK){
                this.goods = goods
            }

            //让左侧列表产生滑屏
            new BScroll(this.$refs.typeWrap)
            //让右侧列表产生滑屏
            new BScroll(this.$refs.foodsWrap)
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