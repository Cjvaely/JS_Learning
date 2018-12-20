'use strict'
/**
 * @authors Chen Cjv (cjvaely@foxmail.com)
 * @date    2018-10-13 18:03:45
 * @version $ES6$
 */
// 箭头函数，它的定义用的就是一个箭头：
var a = x => x * x;
// 上面的箭头函数相当于：
var b = function (x) {
    return x * x;
}
console.log(a(2));
console.log(b(2));
/*
箭头函数相当于匿名函数，并且简化了函数定义。箭头函数有两种格式
一种像上面的，只包含一个表达式，连{ ... }和return都省略掉了。
还有一种可以包含多条语句，这时候就不能省略{ ... }和return：
 */
x => {
    if (x > 0) {
        return x * x;
    }
    else {
        return - x * x;
    }
}
// 如果参数不是一个，就需要用括号()括起来：
// 两个参数:
// (x, y) => x * x + y * y

// 无参数:
// () => 3.14

// 可变参数:
(x, y, ...rest) => {
    var i, sum = x + y;
    for (i=0; i < rest.length; i++) {
        sum += rest[i];
        console.log('length = ' + rest.length);
    }
    return sum;
}

// 如果要返回一个对象，就要注意，如果是单表达式，这么写的话会报错：
// SyntaxError:
x => { foo: x }
// 因为和函数体的{ ... }有语法冲突，所以要改为：
// ok:
x => ({ foo: x })

/* this:
箭头函数看上去是匿名函数的一种简写，但实际上，
箭头函数和匿名函数有个明显的区别：箭头函数内部的this是词法作用域，
由上下文确定。
*/
// 回顾前面的例子，由于JavaScript函数对this绑定的错误处理，下面的例子无法得到预期结果
var obj = {
    birth: 1990,
    getAge: function () {
        var b = this.birth; // 1990
        var fn = function () {
            return new Date().getFullYear() - this.birth; // this指向window或undefined
        };
        return fn();
    }
};
// 现在，箭头函数完全修复了this的指向，this总是指向词法作用域，也就是外层调用者obj
var obj = {
    birth: 1990,
    getAge: function () {
        var b = this.birth; // 1990
        var fn = () => new Date().getFullYear() - this.birth; // this指向obj对象
        return fn();
    }
};
obj.getAge(); // 28




































