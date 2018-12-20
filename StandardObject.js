'use strict'
/**
 * @authors Chen Cjv (cjvaely@foxmail.com)
 * @date    2018-10-14 18:59:05
 * @version $ES6$
 */
// 标准对象
// 用typeof操作符获取对象的类型，它总是返回一个字符串：
console.log(typeof 123); // 'number‘
console.log(typeof NaN);	// 'number'
typeof 'str'; // 'string'
typeof true; // 'boolean'
typeof undefined; // 'undefined'
typeof Math.abs; // 'function'
typeof null; // 'object'
typeof []; // 'object'
typeof {}; // 'object'
/*
可见，number、string、boolean、function和undefined有别于其他类型
注意null的类型是object，Array的类型也是object，
如果我们用typeof将无法区分出null、Array和通常意义上的object——{}
 */

// 包装对象
// 包装对象用new创建：
var n = new Number(123);	// 123,生成了新的包装类型
var b = new Boolean(true); // true,生成了新的包装类型
var s = new String('str'); // 'str',生成了新的包装类型
/*
虽然包装对象看上去和原来的值一模一样，显示出来也是一模一样，
但他们的类型已经变为object了！所以，包装对象和原始值用===比较会返回false：
 */
console.log(typeof n);	// object	
console.log(typeof b);	// object
console.log(typeof s);	// object		
// 尽量不要用包装对象，尤其是string类型
// 如果我们在使用Number、Boolean和String时，没有写new
// 此时，Number()、Boolean和String()被当做普通函数，
// 把任何类型的数据转换为number、boolean和string类型（注意不是其包装类型）
var n1 = Number('123');	// 123  相当于parseInt()或parseFloat()
console.log(typeof n1);		// number

var b = Boolean('true'); // true
typeof b; // 'boolean'



































