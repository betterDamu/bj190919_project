function Observer(data) {
    //this:Observer的实例对象  匿名对象
    this.data = data;
    this.walk(data);
}

Observer.prototype = {
    walk: function(data) {
        //this:Observer的实例对象  匿名对象
        var me = this;
        Object.keys(data).forEach(function(key) {
            //key data中的一个个属性名
            me.convert(key, data[key]);
        });
    },
    convert: function(key, val) {
        //this:Observer的实例对象  匿名对象
        //key : data中的一个个属性名
        //val : data中的一个个属性所对应的值
        this.defineReactive(this.data, key, val);
    },
    defineReactive: function(data, key, val) {

        var dep = new Dep();//构建dep

        var childObj = observe(val);//深度遍历  只要是对象就拦下来

        //真正数据劫持的逻辑!!!!
        Object.defineProperty(data, key, {
            enumerable: true, // 可枚举
            configurable: false, // 不能再define
            get: function() {
                if (Dep.target) {
                    dep.depend();
                }
                return val;
            },
            set: function(newVal) {
                if (newVal === val) {
                    return;
                }
                val = newVal;
                childObj = observe(newVal);
                dep.notify();
            }
        });
    }
};

//value: data
function observe(value, vm) {
    if (!value || typeof value !== 'object') {
        return;
    }

    return new Observer(value);
};


var uid = 0;

function Dep() {
    this.id = uid++;
    this.subs = [];
}

Dep.prototype = {
    addSub: function(sub) {
        this.subs.push(sub);
    },

    depend: function() {
        Dep.target.addDep(this);
        //watcher.addDep(this)
    },

    removeSub: function(sub) {
        var index = this.subs.indexOf(sub);
        if (index != -1) {
            this.subs.splice(index, 1);
        }
    },

    notify: function() {
        this.subs.forEach(function(sub) {
            sub.update();
        });
    }
};

Dep.target = null;