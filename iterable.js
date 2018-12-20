/**
 * @authors Chen Cjv (cjvaely@foxmail.com)
 * @date    2018-10-09 09:22:58
 * @version $Id$
 */

/* iterable是一种新的数据类型 Array、Map和Set都属于iterable类型
	具有iterable类型的集合可以通过新的for ... of循环来遍历。
*/
var a = ['A', 'B', 'C'];
var s = new Set(['A', 'B', 'C']);
var m = new Map([
	[1, 'x'],
	[2, 'y'],
	[3, 'z']
]);
for (var x of a) {
	console.log('array = ' + x);
}
for (var x of s) {
	console.log(x);
}
for (var x of m) {
	console.log(x[0] + '=' + x[1]);
}
// for ... in循环由于历史遗留问题，它遍历的实际上是对象的属性名称
// 数组Array的属性就是元素索引
// 手动给Array对象添加了额外的属性后，for ... in循环会把属性打印出来
var a = ['A', 'B', 'C'];
a.name = 'Hello';
for (var x in a) {
	console.log(x);
}
// 0 1 2 name
// for ... in循环将把name包括在内，但Array的length属性却不包括在内
// for ... of循环则完全修复了这些问题，它只循环集合本身的元素
for (var x of a) {
	console.log('For_Of Array:' + x);
}
// A B C

// 更好的方式是直接使用iterable内置的forEach方法，
// 它接收一个函数，每次迭代就自动回调该函数
a.forEach(function(element, index, array) {
	// element:指向当前元素的值
	// index:指向当前索引
	// array:指向Array对象本身
	console.log(element + ', index = ' + index);
});

// 对于Set 没有索引，因此回调函数的前两个参数都是元素本身
s.forEach(function(element, sameElement, set) {
	console.log(element);
});

// 对于Map，回调函数参数依次为value、key和map本身
m.forEach(function(value, key, map) {
	console.log(key + '=' + value);
});