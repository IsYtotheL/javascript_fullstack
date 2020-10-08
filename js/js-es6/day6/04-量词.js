 // 量词符: 用来设定某个模式出现的次数
        // 简单理解: 就是让下面的a这个字符重复多少次
        // var reg = /^a$/;

        //	匹配前一个表达式 0 次或多次。等价于 {0,}。
        //  * 相当于 >= 0 可以出现0次或者很多次 
        var reg = /^a*$/;
        console.log(reg.test(''));
        console.log(reg.test('a'));
        console.log(reg.test('aaaa'));

        // true
        // true
        // true
        //匹配前面一个表达式 1 次或者多次。等价于 {1,}。
        //  + 相当于 >= 1 可以出现1次或者很多次
        // var reg = /^a+$/;
        // console.log(reg.test('')); // false
        // console.log(reg.test('a')); // true
        // console.log(reg.test('aaaa')); // true

        //	匹配前面一个表达式 0 次或者 1 次。等价于 {0,1}。
        //  ?  相当于 1 || 0
        // var reg = /^a?$/;
        // console.log(reg.test('')); // true
        // console.log(reg.test('a')); // true
        // console.log(reg.test('aaaa')); // false


        //{n} n 是一个正整数，匹配了前面一个字符刚好出现了 n 次。
        //  {3 } 就是重复3次
        // var reg = /^a{3}$/;
        // console.log(reg.test('')); // false
        // console.log(reg.test('a')); // false
        // console.log(reg.test('aaaa')); // false
        // console.log(reg.test('aaa')); // true
        // {n,} 	n是一个正整数，匹配前一个字符至少出现了n次。
        //  {3, }  大于等于3
        var reg = /^a{3,}$/;
        console.log(reg.test('')); // false
        console.log(reg.test('a')); // false
        console.log(reg.test('aaaa')); // true
        console.log(reg.test('aaa')); // true
        

        //{n,m} n 和 m 都是整数。匹配前面的字符至少n次，最多m次。如果 n 或者 m 的值是0， 这个值被忽略。
        //  {3,16}  大于等于3 并且 小于等于16
        var reg = /^a{3,6}$/;
        console.log(reg.test('')); // false
        console.log(reg.test('a')); // false
        console.log(reg.test('aaaa')); // true
        console.log(reg.test('aaa')); // true
        console.log(reg.test('aaaaaaa')); // false