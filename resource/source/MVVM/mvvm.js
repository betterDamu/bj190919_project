//在外部对MVVM进行了构造调用!!!!  MVVM中的this应该指向其构造出来的实例对象 vm
function MVVM(options) {
    //vm.$options = options
    this.$options = options;
    //var data = vm._data = vm.$options.data
    var data = this._data = this.$options.data;
    //var me = vm  对this进行转绑
    var me = this;

    //数据代理!!!  //鸡肋闭包
    Object.keys(data).forEach(function(key) {
        //key : data中的一个个可枚举的属性名
        //vm.__proxy(key)
        me._proxy(key);
    });

    //数据劫持  data:放数据的配置对象  this:vm
    observe(data, this);

    //指令解析
    this.$compile = new Compile(options.el || document.body, this)
}

MVVM.prototype = {
    $watch: function(key, cb, options) {
        new Watcher(this, key, cb);
    },

    _proxy: function(key) {
        //key:data中的一个个可枚举的属性名
        //var me = vm
        var me = this;
        Object.defineProperty(me, key, {
            configurable: false,
            enumerable: true,
            get: function proxyGetter() {
                return me._data[key];
            },
            set: function proxySetter(newVal) {
                me._data[key] = newVal;
            }
        });
    }
};