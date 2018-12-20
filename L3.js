/**
 * 数组
 * @authors Chen Cjv (cjvaely@foxmail.com)
 * @date    2018-08-11 16:12:14
 * @version $Id$
 */
var arr = [1, 2, 3.14, 'Hello', null, true];
// 取得数组长度
console.log(arr.length);	// 6
// 直接给Array的length赋一个新的值会导致Array大小的变化
var a = [1, 2, 3];
a.length = 6;
console.log(a);		// [ 1, 2, 3, <3 empty items> ]
a.length = 2;
console.log(a);		// [1, 2]

// Array可以通过索引把对应的元素修改为新的值，因此，对Array的索引进行赋值会直接修改这个Array
var ar = ['A', 'B', 'C'];
ar[1] = 99;
console.log(ar);	// [ 'A', 99, 'C' ]

// 如果通过索引赋值时，索引超过了范围，同样会引起Array大小的变化：
a[5] = 'x';
console.log(a);		// [ 1, 2, <3 empty items>, 'x' ]
// 在编写代码时，不建议直接修改Array的大小，访问索引时要确保索引不会越界。

// indexOf  与String类似，Array也可以通过indexOf()来搜索一个指定的元素的位置：
var arra = [10, 20, '30', 'xyz'];
console.log(arra.indexOf(10));	// 元素10的索引为0
console.log(arra.indexOf(30));	// -1 没找到30
console.log(arra.indexOf('30'));	// 索引为2

// slice切片 截取数组部分元素，返回一个新的Array，与String中的substring()类似
// slice()的起止参数包括开始索引，不包括结束索引
var array = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
console.log(array.slice(0, 3));		// 从0开始不包括3 [ 'A', 'B', 'C' ]
console.log(array.slice(3));	// 从索引3开始到结束：[ 'D', 'E', 'F', 'G' ]
// 如果不给slice()传递任何参数，它就会从头到尾截取所有元素。
// 利用这一点，我们可以很容易地复制一个Array
var aCopy = array.slice();
console.log(aCopy);
console.log(aCopy == array);	// false

// push：向Array的末尾添加若干元素
// pop：把Array的最后一个元素删除掉：
var a1 = [1, 2];
console.log(a1.push('A', 'B'));		// 4 返回新长度
console.log(a1);
console.log(a1.pop());		// 返回B
console.log(a1);		// [ 1, 2, 'A' ]
a1.pop(); a1.pop(); a1.pop(); // 连续pop 3次
console.log(a1);		// 空了
a1.pop();	// 空数组继续pop不会报错，而是返回undefined

// unshift: 往Array的头部添加若干元素
// shift:把Array的第一个元素删掉
a1 = [1, 2];
a1.unshift('A', 'B');
console.log(a1);	// [ 'A', 'B', 1, 2 ]
a1.shift();
console.log(a1);	// [ 'B', 1, 2 ]
a1.shift(); a1.shift(); a1.shift();
console.log(a1);	// []
console.log(a1.shift());	// undefined

// sort 排序
// 会直接修改当前Array的元素位置，直接调用时，按照默认顺序排序

arr = ['B', 'C', 'A'];
console.log(arr);
arr.sort();
console.log(arr);	// [ 'A', 'B', 'C' ]

// reverse 把整个Array的元素给掉个个，也就是反转
arr = ['one', 'two', 'three'];
arr.reverse();
console.log(arr);	// [ 'three', 'two', 'one' ]

// splice  修改Array的“万能方法”
// 它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素
arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
// 从索引2开始删除3个元素,然后再添加两个元素
console.log(arr.splice(2, 3, 'Google', 'Facebook'));	// 返回删除的元素[ 'Yahoo', 'AOL', 'Excite' ]
console.log(arr);	// [ 'Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle' ]
// 只删除不添加 从索引2开始，删除2个元素
console.log(arr.splice(2, 2));		// [ 'Google', 'Facebook' ]
console.log(arr);		// [ 'Microsoft', 'Apple', 'Oracle' ]
// 只添加,不删除
console.log(arr.splice(2, 0, 'Google', 'Facebook'));	// 返回[],因为没有删除任何元素
console.log(arr);

// concat:把当前的Array和另一个Array连接起来，并返回一个新的Array
arr = ['A', 'B', 'C'];
var added = arr.concat([1, 2, 3]);
console.log(added);		// [ 'A', 'B', 'C', 1, 2, 3 ]

// join 实用的方法，它把当前Array的每个元素都用指定的字符串连接起来，然后返回连接后的字符串
arr = ['A', 'B', 'C', 1, 2, 3];
console.log(arr.join('-')); 		// 'A-B-C-1-2-3'

// 多维数组：数组的某个元素又是一个Array，则可以形成多维数组，例如：
arr = [[1, 2, 3], [400, 500, 600], '-'];

// 练习 通过索引取500
'use strict';
var x = arr[1][1];
console.log(x);

// 练习：在新生欢迎会上，你已经拿到了新同学的名单，请排序后显示：欢迎XXX，XXX，XXX和XXX同学！：
arr = ['小明', '小红', '大军', '阿黄'];
arr.sort();
console.log('欢迎'+arr[0]+', '+arr[1]+', '+arr[2]+'和'+arr[3]+'同学！');



























