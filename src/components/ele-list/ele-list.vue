<template>
    <div class="list">
        <ul>
            <li>
                <ele-icon :size="2" :type="1" class="icon"></ele-icon>
                <span class="text">新用户下单立减17元(不与其它活动同享)</span>
            </li>
            <li>
                <ele-icon :size="2" :type="2" class="icon"></ele-icon>
                <span class="text">满35减19，满65减3</span>
            </li>
            <li>
                <ele-icon :size="2" :type="3" class="icon"></ele-icon>
                <span class="text">欢乐小食餐【立减19.5元】</span>
            </li>
            <li>
                <ele-icon :size="2" :type="4" class="icon"></ele-icon>
                <span class="text">火烤菠萝皇堡双人餐【立减29元】</span>
            </li>
            <li>
                <ele-icon :size="2" :type="5" class="icon"></ele-icon>
                <span class="text">半价单人餐【立减19.8】</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import icon from "components/ele-icon/ele-icon.vue"
    export default {
        name: "ele-list",
        components:{
            "ele-icon":icon
        }
    }
</script>

<style scoped lang="stylus">
    .list
        font-size 12px
        font-weight 200px
        line-height 12px
        color white
        li
            margin-bottom 12px
            &:last-child
                margin-bottom 0
            .icon
                vertical-align top
                margin-top -2px
                margin-left 12px
                margin-right 6px
            .text
                vertical-align top


</style>