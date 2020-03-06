<template>
    <div class="header">
        <div class="top">
            <div class="avatar">
                <img  src="https://fuss10.elemecdn.com/8/40/02872ce8aefe75c16d3190e75ad61jpeg.jpeg" alt="">
            </div>
            <div class="info">
                <div class="title">
                    <i class="brand"></i>
                    <span class="name">嘉禾一品（温都水城）</span>
                </div>
                <div class="des">
                    <span class="desIfo">蜂鸟专送/36分钟送达</span>
                </div>
                <div class="support">
                    <!--size:可选值 1 2 3 4  代表不一样尺寸的图标-->
                    <!--type: "decrease","discount","guarantee",
                            "invoice","special"
                            可选值 : 1 2 3 4 5
                    -->
                    <ele-icon :size="1" :type="1"></ele-icon>
                    <span class="text">在线支付满100送店;满200送老板</span>
                </div>
            </div>
        </div>
        <div class="bulletin"></div>
    </div>
</template>

<script>
    import icon from "components/ele-icon/ele-icon.vue"
    export default {
        name: "ele-header",
        components:{
            "ele-icon":icon
        }
    }
</script>

<style scoped lang="stylus">
    @import "../../common/stylus/mixin.styl"
    .header
        font-size 0
        background gray
        .top
            padding 24px 0 18px 24px
            .avatar
                display inline-block
                vertical-align top
                width 64px
                height 64px
                border-radius 2px
                overflow hidden
                margin-right 16px
                img
                    width 100%
                    height 100%
            .info
                vertical-align top
                display inline-block
                color rgba(255,255,255,1)
                .title
                    font-size 16px
                    margin-top 2px
                    margin-bottom 8px
                    .brand
                        bg-image(brand)
                        vertical-align top
                        display inline-block
                        width 30px
                        height 18px
                        background pink
                        margin-right 3px
                        background-size 100%
                    .name
                        vertical-align top
                        font-weight 800
                .des
                    font-size 12px
                .support
                    font-size 10px
                    margin-top 10px
                    margin-bottom 2px
                    .text
                        vertical-align top



</style>