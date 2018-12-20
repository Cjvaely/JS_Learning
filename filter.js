'use strict'
/**
 * @authors Chen Cjv (cjvaely@foxmail.com)
 * @date    2018-10-13 13:43:08
 * @version $ES6$
 */
/*
filter也是一个常用的操作，它用于把Array的某些元素过滤掉，
然后返回剩下的元素。
Array的filter()也接收一个函数。和map()不同的是，
filter()把传入的函数依次作用于每个元素，
然后根据返回值是true还是false决定保留还是丢弃该元素。
 */
var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function (x) {
    return x % 2 !== 0;
});
console.log(r); // [1, 5, 9, 15]
// 把一个Array中的空字符串删掉，可以这么写：( string.trim()用于去除字符串两边的空格 )
var arr1 = ['A', '', 'B', null, undefined, 'C', ' '];
var r1 = arr1.filter(function (s) {
	return s && s.trim();	// 注意：IE9以下的版本没有trim()方法
});

// 可见用filter()这个高阶函数，关键在于正确实现一个“筛选”函数。

/* 回调函数：
filter()接收的回调函数，其实可以有多个参数。通常我们仅使用第一个参数，
表示Array的某个元素。回调函数还可以接收另外两个参数，表示元素的索引和数组本身
*/
var arr2 = ['A', 'B', 'C'];
var r2 = arr2.filter(function (element, index, self) {
    console.log(element); // 依次打印'A', 'B', 'C'
    console.log(index); // 依次打印0, 1, 2
    console.log(self); // self就是变量arr
    return true;
});

// 利用filter，可以巧妙地去除Array的重复元素：
var r3;
var arr3 = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
r3 = arr3.filter(function (element, index, self) {
    return self.indexOf(element) === index;
});
console.log(r3.toString());
/*
去除重复元素依靠的是indexOf总是返回第一个元素的位置，
后续的重复元素位置与indexOf返回的位置不相等，因此被filter滤掉了。
 */

/*
练习:请尝试用filter()筛选出素数：
*/
function get_primes(arr) {
	var primes = arr.filter( function Fun_primes(x) {
		var flag;
		if (x <= 1) {
			flag = false;
		} else {
			if (x === 2) {
				flag = true;
			} else {
				flag = true;
				for (let i = 2; i < x; i++) {
					if (x % i === 0) {
						flag = false;
						break;
					}
				}
			}
		}
		return flag;
	});
	return primes;
}
























