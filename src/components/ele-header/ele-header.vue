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
                    <ele-icon :size="1" :type="1"></ele-icon>
                    <span class="text">在线支付满100送店;满200送老板</span>
                </div>
            </div>
            <div class="btn">
                <span class="num">5个</span>
                <i class="icon-keyboard_arrow_right"></i>
            </div>
        </div>
        <div class="bulletin">
            <div class="left">
                <i class="icon"></i>
                <span class="text">
                    是以粥为特色的中式营养快餐，自2004年10月18日创立“嘉和一品”品牌至今，不断优化管理，积极创新，立足于“贴近百姓生活，服务千家万户”
                </span>
            </div>
            <i class="icon-keyboard_arrow_right right"></i>
        </div>
        <div class="bg">
            <img  src="https://fuss10.elemecdn.com/8/40/02872ce8aefe75c16d3190e75ad61jpeg.jpeg" alt="">
        </div>
        <div class="mask">
            <div class="mask_wrap">
                <div class="mask_main">
                    <!--遮罩层的真正内容-->
                    <!--设计组件 不光是为了复用;
                    更多的时候 是为了编码的简洁-->
                    <div class="title">嘉禾一品（温都水城）</div>
                    <div class="stars"></div>
                    <ele-line class="line">
                        <span>优惠信息</span>
                    </ele-line>
                    <ele-list class="list"></ele-list>
                    <ele-line class="line">
                        <span>商家公告</span>
                    </ele-line>
                    <p class="bulletin">
                        是以粥为特色的中式营养快餐，自2004年10月18日创立“嘉和一品”品牌至今，不断优化管理，积极创新，立足于“贴近百姓生活，服务千家万户
                    </p>
                </div>
            </div>
            <div class="mask_footer">
                <i class="icon-close close"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import icon from "components/ele-icon/ele-icon.vue"
    import line from "components/ele-line/ele-line.vue"
    import list from "components/ele-list/ele-list.vue"
    export default {
        name: "ele-header",
        components:{
            "ele-icon":icon,
            "ele-line":line,
            "ele-list":list
        }
    }
</script>

<style scoped lang="stylus">
    @import "../../common/stylus/mixin.styl"
    .header
        position relative
        font-size 0
        background rgba(7,17,27,.5)
        & > .top
            padding 24px 0 18px 24px
            position relative
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



            .btn
                font-size 10px
                width 48px
                height 24px
                line-height 24px
                background rgba(0,0,0,.2)
                border-radius 14px
                text-align center
                position absolute
                right 12px
                bottom 36px
                color rgba(255,255,255,1)
        & > .bulletin
            width 100%
            height 28px
            line-height 28px
            color rgba(255,255,255,1)
            font-size 10px
            font-weight 200
            background rgba(7,17,17,.2)
            position relative
            .left
                overflow hidden
                text-overflow ellipsis
                white-space nowrap
                height 100%
                margin-right 26px
                .icon
                    bg-image(bulletin)
                    background-size 100%
                    background-repeat no-repeat
                    display inline-block
                    width 22px
                    height 12px
                    margin-left 12px
                    margin-right 4px
                    position relative
                    top 1px
            .right
                position absolute
                right 10px
                bottom 8px

        & > .bg
            position absolute
            left 0
            right  0
            top 0
            bottom  0
            z-index -1
            filter blur(5px)
            img
                width 100%
                height 100%

        & > .mask
            position fixed
            z-index 9
            left 0
            right  0
            top 0
            bottom  0
            background rgba(7,17,27,.8)
            backdrop-filter: blur(5px);
            overflow-y  auto
            padding-top 64px
            .mask_wrap
                min-height 100%
                .mask_main
                    padding-bottom 96px
                    .title
                        font-size 16px
                        font-weight 700px
                        line-height 16px
                        color rgba(255,255,255,1)
                        text-align center
                    .stars
                        width 100%
                        height 24px
                        background pink
                        margin-top 16px
                        margin-bottom 28px
                    .line
                        width 80%
                        margin 0 auto
                    .list
                        width 80%
                        margin 0 auto
                        margin-top 24px
                        margin-bottom 28px

                    .bulletin
                        width 80%
                        margin 0 auto
                        font-size 12px
                        line-height 24px
                        color white
                        font-weight 200
                        padding 0 12px
            .mask_footer
                margin-top -96px
                padding 32px 0
                text-align center
                .close
                    font-size 32px
                    color rgba(255,255,255,1)

</style>