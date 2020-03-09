<template>
    <div class="contorl">
        <transition name="contorlRemove">
            <i v-show="food.count>0" @click="removeCount"
               class="icon-remove_circle_outline remove"></i>
        </transition>
        <transition name="contorlRemove">
            <span v-show="food.count>0">{{food.count}}</span>
        </transition>
        <i class="icon-add_circle" @click="addCount"  ></i>
    </div>
</template>

<script>
    export default {
        name: "ele-contorl",
        props:{
            food:Object
        },
        methods:{
            addCount(){
                this.bus.$emit("addCount",this.food)
            },
            removeCount(){
                this.bus.$emit("removeCount",this.food)
            }
        }
    }
</script>

<style scoped lang="stylus">
    .contorl
        position absolute
        bottom 3px
        right 0
        i
            display inline-block
            font-size 24px
            vertical-align middle
            color rgba(0,160,220,1)
            &.remove
                opacity 1
                transform translate3d(0,0,0) rotate(-720deg)
        span
            display inline-block
            width 24px
            text-align center
            font-size 10px
            vertical-align middle
            color rgba(147,153,159,1)
</style>