<template>
    <!--class : "stars stars-24"-->
    <!--class : "stars stars-36"-->
    <!--class : "stars stars-48"-->

    <div class="stars" :class="`stars-${size}`">
        <div class="star" v-for="item in classNames" :class="item"></div>

        <!--<div data-v-4d4ca296="" class="star on"></div>-->
        <!--<div data-v-4d4ca296="" class="star half"></div>-->
        <!--<div data-v-4d4ca296="" class="star off"></div>-->
        <!--<div data-v-4d4ca296="" class="star off"></div>-->
        <!--<div data-v-4d4ca296="" class="star off"></div>-->
    </div>
</template>

<script>
    export default {
        name: "ele-stars",
        props:{
            size:Number
        },
        data(){
            return {
                classNames:["on","half","off","off","off"]
            }
        }
    }
</script>

<style scoped lang="stylus">
    /*.stars .star*/
    /*.stars.stars-24 .star*/
    /*按照分数去设计一个数组:["on","half","off","off","off"]*/
    @import "../../common/stylus/mixin.styl"
    .stars
        display inline-flex
        .star   //相当于任意尺寸星星的公共样式
            background-size 100% 100%
            background-repeat no-repeat
        &.stars-24
            .star //尺寸为24星星的公共样式
                width 10px
                height 10px
                margin-right 10px
                &:last-child
                    margin-right 0
                &.on
                    bg-image(star24_on)
                &.half
                    bg-image(star24_half)
                &.off
                    bg-image(star24_off)
        &.stars-36
            .star //尺寸为36星星的公共样式
                width 15px
                height 15px
                margin-right 15px
                &:last-child
                    margin-right 0
                &.on
                    bg-image(star36_on)
                &.half
                    bg-image(star36_half)
                &.off
                    bg-image(star36_off)
        &.stars-48
            .star //尺寸为48星星的公共样式
                width 20px
                height 20px
                margin-right 20px
                &:last-child
                    margin-right 0
                &.on
                    bg-image(star48_on)
                &.half
                    bg-image(star48_half)
                &.off
                    bg-image(star48_off)


</style>