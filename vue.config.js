module.exports={
    //代码修改之后 vue脚手架才会重新开始编译
    // false: 跳过eslint的检查
    // true: 不会影响编译;不会影响代码的执行;可是会在命令行中报警告
    // "error": 会中断编译 代码是无法运行的;在命令行中还有警告
    lintOnSave:false,
    //vue脚手架的devServer配置
    devServer:{
        port:3001
    },
    configureWebpack:{
        devServer:{
            open:true
        }
    }
}