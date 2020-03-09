<template>
    <div class="contorl">
        <i class="icon-remove_circle_outline" v-show="false"></i>
        <span v-show="false">10</span>
        <i class="icon-add_circle"  ></i>
    </div>
</template>

<script>
    export default {
        name: "ele-contorl"
    }
</script>

<style scoped lang="stylus">
    .contorl
        position absolute
        bottom 3px
        right 0
        i
            font-size 24px
            vertical-align middle
            color rgba(0,160,220,1)
        span
            display inline-block
            width 24px
            text-align center
            font-size 10px
            vertical-align middle
            color rgba(147,153,159,1)
</style>