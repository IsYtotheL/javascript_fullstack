
        // 中括号 字符集合.匹配方括号中的任意字符. 
        // var reg = /^[abc]$/;
        // a 也可以 b 也可以 c 可以  a ||b || c
        // 大括号  量词符. 里面表示重复次数
        var reg2 = /^abc{3}$/; // 它只是让c重复三次   abccc
        console.log(reg2.test('abc'));
        console.log(reg2.test('abcabcabc'));
        console.log(reg2.test('abccc'));
        // false
        // false
        // true
        // 小括号 表示优先级
        var reg = /^(abc){3}$/; // 它是让abc重复三次
        console.log(reg.test('abc'));
        console.log(reg.test('abcabcabc'));
        console.log(reg.test('abccc'));
        // false
        // true
        // false
