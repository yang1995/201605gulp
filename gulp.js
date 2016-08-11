var gulp = {
    tasks:[],//存放所有任务的一个数组
    task:function(fn){//定义一个任务
        gulp.tasks.push(fn);
    },
    start:function(){//开始执行所有的任务
       /* gulp.tasks.forEach(function(task){
            task();
        });*/
        var index = 0;
        //每调用一次callback就相当于取出当前函数并执行
        function callback(){
            var task = gulp.tasks[index++];//取出当前任务

        }
        callback();
    }
}
gulp.task(function(callback){
    setTimeout(function(){
        console.log(1);
        callback();
    },1000)
});
gulp.task(function(){
    console.log(2);
});
gulp.start();