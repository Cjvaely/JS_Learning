'use strict'
/**
 * @authors Chen Cjv (cjvaely@foxmail.com)
 * @date    2018-10-14 19:20:27
 * @version $ES6$
 */
// Date对象表示时间和日期
// 要获取系统当前时间，用：
var now = new Date();
console.log(now);	// Sun Oct 14 2018 19:22:04 GMT+0800 (中国标准时间)
console.log(now.getFullYear()); // 2018, 年份
console.log(now.getMonth());	// 9 月份，注意月份范围是0~11，5表示六月
console.log(now.getDate());	//14 表示14号
console.log(now.getDay());	// 0 表示星期天
console.log(now.getHours());	// 19 表示24小时制
console.log(now.getMinutes());	// 22 表示分钟	
console.log(now.getSeconds());	// now.getSeconds()	4秒
console.log(now.getMilliseconds());	// 毫秒数
console.log(now.getTime());	// 1539516124180 以number形式表示的时间戳

// 创建一个指定日期和时间的Date对象，可以用：
var d = new Date(2018, 11, 4, 0, 0, 0, 123);
console.log(d);
// 第二种创建一个指定日期和时间的方法是解析一个符合ISO 8601格式的字符串：
var d1 = Date.parse('2018-11-14T19:22:04.875+08:00');
d1; // 1542194524875
// 有时间戳就可以很容易地把它转换为一个Date：
var d2 = new Date(1542194524875);
d2; // Wed Nov 14 2018 19:22:04 GMT+0800 (中国标准时间)
d2.getMonth(); // 10






























