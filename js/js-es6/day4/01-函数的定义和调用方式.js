 //  函数的定义方式

        // 1. 自定义函数(命名函数) 

        function fn() {};

        // 2. 函数表达式 (匿名函数)

        var fun = function() {};


        // 3. 利用 new Function('参数1','参数2', '函数体');
        // 这种方式执行效率低，也不方便书写，因此较少使用
        var f = new Function('a', 'b', 'console.log(a + b)');
        f(1, 2); //3
        // 4. 所有函数都是 Function 的实例(对象)
        console.dir(f); //[Function: anonymous]
        console.log(fn) //[Function: fn]
        console.log(fun) //[Function: fun]
        // 5. 函数也属于对象
        console.log(f instanceof Object);//true
