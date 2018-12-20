'use strict'
/**
 * @authors Chen Cjv (cjvaely@foxmail.com)
 * @date    2018-10-13 16:19:51
 * @version $ES6$
 */
// 函数作为返回值

// 我们来实现一个对Array的求和。通常情况下，求和的函数是这样定义的
function sum(arr) {
	return arr.reduce(function (x, y) {
		return x + y;
	});
}
console.log(sum([1, 2, 3, 4, 5]));	// 15
// 如果不需要立刻求和，而是在后面的代码中，根据需要再计算,
// 那么可以不返回求和的结果，而是返回求和的函数
function lazy_sum(arr) {
    var sum = function () {
        return arr.reduce(function (x, y) {
            return x + y;
        });
    }
    return sum;
}
// 我们调用lazy_sum()时，返回的并不是求和结果，而是求和函数：
var f = lazy_sum([1, 2, 3, 4, 5]); // function sum()
// 调用函数f时，才真正计算求和的结果：
f();	// 15
/*
在这个例子中，我们在函数lazy_sum中又定义了函数sum，
并且，内部函数sum可以引用外部函数lazy_sum的参数和局部变量，
当lazy_sum返回函数sum时，相关参数和变量都保存在返回的函数中，
这种称为“闭包（Closure）”的程序结构拥有极大的威力
 */
// 当我们调用lazy_sum()时，每次调用都会返回一个新的函数，即使传入相同的参数：
var f1 = lazy_sum([1, 2, 3, 4, 5]);
var f2 = lazy_sum([1, 2, 3, 4, 5]);
console.log(f1 === f2); // false
// f1()和f2()的调用结果互不影响。

/* 闭包： 
注意到返回的函数在其定义内部引用了局部变量arr，所以，当一个函数返回了一个函数后，
其内部的局部变量还被新函数引用，所以，闭包用起来简单，实现起来可不容易。
另一个需要注意的问题是，返回的函数并没有立刻执行，而是直到调用了f()才执行。我们来看一个例子：
*/
function count() {
    var arr = [];
    for (var i = 1; i <= 3; i++) {
        arr.push(function () {
            return i * i;
        });
    }
    return arr;
}
var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];

// 在上面的例子中，每次循环，都创建了一个新的函数，然后，把创建的3个函数都添加到一个Array中返回了。

// 你可能认为调用f1()，f2()和f3()结果应该是1，4，9，但实际结果是：
f1(); // 16
f2(); // 16
f3(); // 16
/*
全部都是16！原因就在于返回的函数引用了变量i，但它并非立刻执行。
等到3个函数都返回时，它们所引用的变量i已经变成了4，因此最终结果为16。
 */
// 返回闭包时牢记的一点就是：返回函数不要引用任何循环变量，或者后续会发生变化的变量。

/*
如果一定要引用循环变量怎么办？方法是再创建一个函数，用该函数的参数绑定循环变量当前的值，
无论该循环变量后续如何更改，已绑定到函数参数的值不变：
 */
function count() {
    var arr = [];
    for (var i=1; i<=3; i++) {
        arr.push((function (n) {
            return function () {
                return n * n;
            }
        })(i));
    }
    return arr;
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];

f1(); // 1
f2(); // 4
f3(); // 9
// 注意这里用了一个“创建一个匿名函数并立刻执行”的语法：
(function (x) {
    return x * x;
})(3); 	// 9
// 理论上讲，创建一个匿名函数并立刻执行可以这么写：
// function (x) { return x * x } (3);
// 但是由于JavaScript语法解析的问题，会报SyntaxError错误，
// 因此需要用括号把整个函数定义括起来：
// 通常，一个立即执行的匿名函数可以把函数体拆开，一般这么写：
(function (x) {
    return x * x;
})(3);

// 闭包有非常强大的功能。举个栗子：
// 没有class机制，只有函数的语言里，借助闭包，同样可以封装一个私有变量。
// 我们用JavaScript创建一个计数器：
function create_counter(initial) {
    var x = initial || 0;
    return {
        inc: function () {
            x += 1;
            return x;
        }
    }
}
var c1 = create_counter();
console.log(c1.inc()); // 1
console.log(c1.inc()); // 2
console.log(c1.inc()); // 3

var c2 = create_counter(10);
c2.inc(); // 11
c2.inc(); // 12
c2.inc(); // 13








































