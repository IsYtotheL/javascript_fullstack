  // 正则表达式在js中的使用

        // 1. 利用 RegExp对象来创建 正则表达式
        var regexp = new RegExp(/123/);
        console.log(regexp); ///123/

        // 2. 利用字面量创建 正则表达式
        var rg = /123/;
        // 3.test 方法用来检测字符串是否符合正则表达式要求的规范

        // 仅能匹配 123 按照顺序同时出现的情况
        console.log(rg.test(123));//true
        console.log(rg.test('abc'));//false
        console.log(rg.test('123'))//true
        console.log(rg.test(23)) //false
        console.log(rg.test(1234)) //true
        console.log(rg.test(132))//false