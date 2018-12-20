'use strict'
/**
 * @authors Chen Cjv (cjvaely@foxmail.com)
 * @date    2018-10-09 19:38:08
 * @version $Id$
 */

/* 函数:
	JavaScript的函数不但是“头等公民”，
	而且可以像变量一样使用，具有非常强大的抽象能力
*/

// 抽象：以符号记录某个运算

// 函数的定义
function abs(x) {
	if (x >= 0) {
		return x;
	} else {
		return -x;
	}
}
/* function 关键字；abs函数名称；(x)函数参数
 JS函数也可以看作一个对象，上述函数名abs可以视作指向该函数的变量
*/

// 第二种定义：
var abs = function(x) {
	if (x >= 0) {
		return x;
	} else {
		return -x;
	}
};
/* 此时function (x) { ... }是一个匿名函数，它没有函数名。
 	但是，这个匿名函数赋值给了变量abs，所以，通过变量abs就可以调用该函数
 	上述两种定义完全等价，注意第二种方式按照完整语法需要在函数体末尾加一个;，表示赋值语句结束。
*/

// 函数调用：按顺序传入参数即可，允许传入任意个参数而不影响调用
console.log(abs(-10)); // 10
console.log(abs(-10, 'ad')); // 10

// 传入的参数比定义的少也没有问题：
console.log(abs()); // NaN

// 避免收到undefined，可以对参数进行检查
function abs(x) {
	if (typeof x !== 'number') {
		throw 'Not a number';
	}
	if (x >= 0) {
		return x;
	} else {
		return -x;
	}
}

/*
arguments 关键字：它只在函数内部起作用，
并且永远指向当前函数的调用者传入的所有参数。
arguments类似Array但它不是一个Array
 */
function foo(x) {
	console.log('x = ' + x); // 10
	for (var i = 0; i < arguments.length; i++) {
		console.log('arg ' + i + ' = ' + arguments[i]); // 10, 20, 30
	}
}
foo(10, 20, 30);
/*
利用arguments，你可以获得调用者传入的所有参数。
也就是说，即使函数不定义任何参数，还是可以拿到参数的值：
 */
function a() {
    if (arguments.length === 0) {
        return 0;
    }
    var x = arguments[0];
    return x >= 0 ? x : -x;
}
console.log(a()); // 0
console.log(a(10)); // 10
console.log(a(-9)); // 9
// arguments最常用于判断传入参数的个数

// rest参数
// 当我们想要单独获取多余的参数时，需要如下定义函数：
function foo(a, b) {
    var i, rest = [];
    if (arguments.length > 2) {
        for (i = 2; i<arguments.length; i++) {
            rest.push(arguments[i]);
        }
    }
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}
foo(34, 46, 56);
// ES6标准引入了rest参数，上面的函数可以改写为：
function foo(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}
foo(1, 2, 3, 4, 5);
/*
 结果：
a = 1
b = 2
[ 3, 4, 5 ]
 */
foo(1);
/*
结果：
a = 1
b = undefined
[]
 */

 /*
 从上面可以看出，传入的参数先匹配形式参数，多余再放到rest中
 即便参数数量不足 也不要紧，rest参数会接收一个空数组（不是undefined）
  */





















































