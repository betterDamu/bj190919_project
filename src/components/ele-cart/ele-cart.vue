<template>
    <div class="cart">
        <div class="left" style="color: white">
            <div class="icon">
                <div class="logo">
                    <i class="icon-shopping_cart"></i>
                </div>
            </div>
            <div class="totalPrice">
                <span>{{totalPrice}}</span>
            </div>
            <div class="deliveryPrice">
                <span>另需配送费¥{{seller.deliveryPrice}}元</span>
            </div>
        </div>
        <div class="right" :class="{active:totalPrice>seller.minPrice}">
            <span v-if="rightText">{{rightText}}</span>
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
        computed:{
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
                background pink
                margin-left 12px
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
                    background rgba(0,0,0,.2)
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
</style>