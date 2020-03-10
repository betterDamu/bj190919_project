<template>
    <div class="cart">
        <div class="left" style="color: white">
            <div class="icon">
                <div class="logo" :class="{active:totalCount >0}">
                    <i class="icon-shopping_cart"></i>
                </div>
                <span class="qipao" v-show="totalCount >0">{{totalCount}}</span>
            </div>
            <div class="totalPrice" :class="{active:totalPrice >0}">
                <span>¥{{totalPrice}}</span>
            </div>
            <div class="deliveryPrice">
                <span>另需配送费¥{{seller.deliveryPrice}}元</span>
            </div>
        </div>
        <div class="right" :class="{active:totalPrice>=seller.minPrice}">
            <span v-if="rightText">{{rightText}}</span>
        </div>
        <div class="balls">
            <transition v-for="ball in balls"
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter">
                <i class="ball" v-show="ball.show"></i>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ele-cart",
        props:{
            selectedFoods:Array,
            seller:Object
        },
        data(){
          return {
              balls:[
                  {show:false},
                  {show:false},
                  {show:false},
                  {show:false},
                  {show:false}
              ]
          }
        },
        computed:{
            totalCount(){
                let totalCount =0 ;
                this.selectedFoods.forEach((selectedFood)=>{
                    totalCount +=  selectedFood.count
                })
                return totalCount;
            },
            totalPrice(){
                let totalPrice =0 ;
                this.selectedFoods.forEach((selectedFood)=>{
                    totalPrice += selectedFood.price * selectedFood.count
                })
                return totalPrice;
            },
            rightText(){
                if(this.totalPrice === 0){
                    return `¥${this.seller.minPrice}起送`
                }else if(this.totalPrice < this.seller.minPrice){
                    return `还差¥${this.seller.minPrice - this.totalPrice}起送`
                }else {
                    return "去结算"
                }
            }
        },
        methods:{
            dropBall(target){
                /*
                * 实现小球动画
                *   1. 每一次点击 从小球数组中挑出一个不在运动的小球
                *          运动中的小球 : show:true
                *          不在运动中的小球: show:false
                *   2. 确定小球的起始位置
                *   3. 进行动画
                *   4. 动画收尾
                * */
                for(let i=0;i<this.balls.length;i++){
                    let ball = this.balls[i];
                    if(!ball.show){
                        //此处 我们改变了show的值 会触发vue的动画逻辑
                        ball.show = true;
                        // 为了待会beforeEnter中可以读到target信息
                        // 函数与函数之间进行数据的传递 大概率下会使用到对象的属性
                        ball.target = target;
                        return;
                    }
                };
            },
            // 钩子 hooks   Enter  隐藏--> 显示的会调用下面三个钩子
            //  beforeEnter:动画第一帧
            //  enter:开始动画
            //  afterEnter:动画结束
            beforeEnter(){
                //动画第一帧 :  确定最新要运动的小球起始位置
                let count = this.balls.length;
                while (count--){
                    let ball = this.balls[count];
                    if(ball.show){
                        //当前这个小球 结束即将要产生运动的小球
                        //确定这个小球的初始位置

                    }
                }
            },
            enter(){console.log("enter")},
            afterEnter(){console.log("afterEnter")}
        },
        mounted(){
            //唤醒一个小球
            this.bus.$on("ballsAmination",(target)=>{
                //实现整个小球动画
                this.dropBall(target)
            })

        }
    }
</script>

<style scoped lang="stylus">
    .cart
        display flex
        .left
            flex 1
            height 100%
            display flex
            .icon
                position relative
                bottom 15px
                width 56px
                height 56px
                border-radius 50%
                background #141d27
                margin-left 12px
                margin-right 12px
                display flex
                justify-content center
                align-items center
                .logo
                    display flex
                    justify-content center
                    align-items center
                    width 44px
                    height 44px
                    border-radius 50%
                    background rgba(255,255,255,0.4)
                    &.active
                        background rgba(0,160,220,1)
                        i
                            color white
                    i
                        color rgba(255,255,255,0.4)
                .qipao
                    position absolute
                    right 0
                    top 5px
                    width 24px
                    height 16px
                    line-height 16px
                    border-radius 6px
                    background red
                    font-size 9px
                    font-weight 700
                    text-align center
            .totalPrice
                display flex
                justify-content center
                align-items center
                margin-right 12px
                font-size 16px
                line-height 24px
                font-weight 700
                color rgba(255,255,255,.4)
                &.active
                    color white
            .deliveryPrice
                display flex
                justify-content center
                align-items center
                font-size 14px
                line-height 24px
                font-weight 700
                color rgba(255,255,255,.4)
                padding-left 12px
                border-left 2px solid rgba(255,255,255,0.1)
        .right
            flex 0 0 105px
            height 100%
            background rgba(255,255,255,0.4)
            display flex
            justify-content center
            align-items center
            &.active
                background green
                span
                    color white
            span
                color rgba(255,255,255,0.6)
        .balls
            .ball
                position absolute
                left 31px
                top 5px
                width 16px
                height 16px
                border-radius 50%
                background deeppink
                transition 1s transform linear


</style>