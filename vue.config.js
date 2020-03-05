const data = require("./data.json")
module.exports={
    //代码修改之后 vue脚手架才会重新开始编译
    // false: 跳过eslint的检查
    // true: 不会影响编译;不会影响代码的执行;可是会在命令行中报警告
    // "error": 会中断编译 代码是无法运行的;在命令行中还有警告
    lintOnSave:false,
    devServer:{
        port:3001,
        open:true,
        // mock接口 没有访问真正的服务器 就是一个假接口
        //before就是一个配置 就是用来做mock的
        //before就是一个函数 在我们执行npm run serve的时候 这个函数会被自动调用
        //然后函数中的代码就会被执行 一旦执行了代码 代码中的三个后台路由就会被注册
        /*before(app){
            //app 相当于我们express的app对象
            app.get("/api/sellers",(req,res)=>{
                res.json({
                    errorno:0,
                    data:data.sellers
                })
            });
            app.get("/api/goods",(req,res)=>{
                res.json({
                    errorno:0,
                    data:data.goods
                })
            });
            app.get("/api/ratings",(req,res)=>{
                res.json({
                    errorno:0,
                    data:data.ratings
                })
            });
        }*/
    }
}