'use strict'
/**
 * @authors Chen Cjv (cjvaely@foxmail.com)
 * @date    2018-10-12 18:11:26
 * @version $ES6$
 */
// 高阶函数：函数可以接收另一个函数作为参数
function add(x, y, f) {
	return f(x) + f(y);
}
var x = add(-5, 6, Math.abs);
console.log(x);		// 11