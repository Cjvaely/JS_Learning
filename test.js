/**
 * @authors Chen Cjv (cjvaely@foxmail.com)
 * @date    2018-08-10 02:09:04
 * @version $Id$
 */
 
// var temp = {name:'lili',age:28};
// for (var i = 2; i >= 0; i--) {
// 	debug("Sublime Test3:"+i);
// }
// debug(temp);

// This package will install:
	// •	Node.js v8.11.3 to /usr/local/bin/node
	// •	npm v5.6.0 to /usr/local/bin/npm
	// This package has installed:
	// •	Node.js v8.11.3 to /usr/local/bin/node
	// •	npm v5.6.0 to /usr/local/bin/npm
// Make sure that /usr/local/bin is in your $PATH.

// 函数sum 接收任意个参数并返回它们的和
'use strict'
function sum(...rest) {
	var s = 0;
	for (var x of rest) {
		s = s + x;
	}
	return s;
}


// 测试:
var i, args = [];
for (i=1; i<=100; i++) {
    args.push(i);
}
if (sum() !== 0) {
    console.log('测试失败: sum() = ' + sum());
} else if (sum(1) !== 1) {
    console.log('测试失败: sum(1) = ' + sum(1));
} else if (sum(2, 3) !== 5) {
    console.log('测试失败: sum(2, 3) = ' + sum(2, 3));
} else if (sum.apply(null, args) !== 5050) {
    console.log('测试失败: sum(1, 2, 3, ..., 100) = ' + sum.apply(null, args));
} else {
    console.log('测试通过!');
}

/*
	定义一个计算圆面积的函数area_of_circle()，它有两个参数
	r: 表示圆的半径;
	pi: 表示π的值，如果不传，则默认3.14
 */
function area_of_circle(r, pi) {
	if (arguments.length < 2) {
		return 3.14 * r * r;
	} else {
		return pi * r * r;
	}
}
// 测试:
if (area_of_circle(2) === 12.56 && area_of_circle(2, 3.1416) === 12.5664) {
    console.log('测试通过');
} else {
    console.log('测试失败');
}
























