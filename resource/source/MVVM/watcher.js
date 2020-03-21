function Watcher(vm, exp, cb) {
    // this: watcher的实例对象
    this.cb = cb;
    this.vm = vm;
    this.exp = exp;
    //每一个watcher都有一个叫做depIds的对象
    this.depIds = {};

    this.value = this.get();
}

Watcher.prototype = {
    update: function() {
        this.run();
    },
    run: function() {
        var value = this.get();
        var oldVal = this.value;
        if (value !== oldVal) {
            this.value = value;
            this.cb.call(this.vm, value, oldVal);
        }
    },
    addDep: function(dep) {
        if (!this.depIds.hasOwnProperty(dep.id)) {
            dep.addSub(this);
            // objdep.subs ["v-text的watcher","v-html的watcher","插值的watcher"]
            // wifedep.subs ["v-text的watcher","v-html的watcher","插值的watcher"]
            // namedep.subs ["v-text的watcher","v-html的watcher","插值的watcher"]
            this.depIds[dep.id] = dep;
            // span.v-text的watcher.depIds[obj-dep.id] = objdep
            // span.v-text的watcher.depIds[wife-dep.id] = wifedep
            // span.v-text的watcher.depIds[name-dep.id] = namedep

            // span.v-html的watcher.depIds[obj-dep.id] = objdep
            // span.v-html的watcher.depIds[wife-dep.id] = wifedep
            // span.v-html的watcher.depIds[name-dep.id] = namedep

            // 插值的watcher.depIds[obj-dep.id] = objdep
            // 插值的watcher.depIds[wife-dep.id] = wifedep
            // 插值的watcher.depIds[name-dep.id] = namedep
        }
    },
    get: function() {
        Dep.target = this;//this watcher实例!!!!
        var value = this.getVMVal();
        Dep.target = null;
        return value;
    },

    getVMVal: function() {
        //obj.wife.name
        var exp = this.exp.split('.'); //[obj,wife,name]
        var val = this.vm._data;
        exp.forEach(function(k) {
            //data["obj"]
            //data["obj"]["wife"]
            //data["obj"]["wife"]["name"]
            val = val[k];
        });
        return val;
    }
};