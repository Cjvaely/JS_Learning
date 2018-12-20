'use strict'
/**
 * @authors Chen Cjv (cjvaely@foxmail.com)
 * @date    2018-10-13 16:10:23
 * @version $ES6$
 */
// 排序算法
// JavaScript的Array的sort()方法就是用于排序的，
// 但是排序结果可能让你大吃一惊：
// 看上去正常的结果:
var a = ['Google', 'Apple', 'Microsoft'].sort(); // ['Apple', 'Google', 'Microsoft'];

// apple排在了最后:
var b = ['Google', 'apple', 'Microsoft'].sort(); // ['Google', 'Microsoft", 'apple']

// 无法理解的结果:
var c = [10, 20, 1, 2].sort(); // [1, 10, 2, 20]

/*
第二个排序把apple排在了最后，是因为字符串根据ASCII码进行排序，
而小写字母a的ASCII码在大写字母之后。
第三个排序结果: 因为Array的sort()方法默认把所有元素先转换为String再排序，
结果'10'排在了'2'的前面，因为字符'1'比字符'2'的ASCII码小
 */

// sort()方法也是一个高阶函数，它还可以接收一个比较函数来实现自定义的排序
// 要按数字大小排序，我们可以这么写：
var arr = [10, 20, 1, 2];
arr.sort(function (x, y) {
	if (x < y) {
		return -1;
	}
	if (x > y) {
		return 1;
	}
	return 0;
});
console.log(arr);	// [ 1, 2, 10, 20 ]
// 如果要倒序排序，我们可以把大的数放前面：
var arr1 = [10, 20, 1, 2];
arr1.sort(function (x, y) {
    if (x < y) {
        return 1;
    }
    if (x > y) {
        return -1;
    }
    return 0;
}); // [20, 10, 2, 1]
console.log(arr1);

/*
默认情况下，对字符串排序，是按照ASCII的大小比较的，
现在，我们提出排序应该忽略大小写，按照字母序排序。要实现这个算法，
不必对现有代码大加改动，只要我们能定义出忽略大小写的比较算法就可以：
 */
var arr2 = ['Google', 'apple', 'Microsoft'];
arr2.sort(function (s1, s2) {
    let x1 = s1.toUpperCase();
    let x2 = s2.toUpperCase();
    if (x1 < x2) {
        return -1;
    }
    if (x1 > x2) {
        return 1;
    }
    return 0;
}); // ['apple', 'Google', 'Microsoft']
console.log(arr2);

// sort()方法会直接对Array进行修改，它返回的结果仍是当前Array：
var a1 = ['B', 'A', 'C'];
var a2 = a1.sort();
a1; // ['A', 'B', 'C']
a2; // ['A', 'B', 'C']
a1 === a2; // true, a1和a2是同一对象

arr.sort((x,y)=>x-y)
arr.sort(function(x,y){return x-y});
console.log(arr); // [1, 2, 10, 20]



























