### day01
        vue-cli4.0
        mock数据
        字体图标
        搭建了基本的项目代码

### day02
        界面的布局(UI)

### day03
        flex


### 字体图标
    优点:不会失帧;可以让我们的网站少发很多http请求
    缺点:制作成本比较高;色调一般比较单一
    真正开发时字体图标的使用方式:
        1. 设计人员设计好矢量图给你 你要学会如何使用
            通过icomoon来使用
        2. 直接去iconfont网站找生成好的字体图标
            unicode
            fontclass
            symbol

### flex总结
    flex-flow: 控制项目的主侧轴 以及主侧轴的方向

    富余空间管理
        justify-content: 控制主轴的富余空间
        align-items
        align-content
        align-slef   :控制侧轴的富余空间

    弹性空间管理
        flex-shrink
        flex-grow
        flex-basis
        flex:1 = flex-basis:0%  flex-shrink:1  flex-grow:1
        最佳实践:
            在开发项目时;切记不要让项目超过容器;尽可能的避免使用flex-shrink


