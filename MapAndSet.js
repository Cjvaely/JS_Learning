/**
 * @authors Chen Cjv (cjvaely@foxmail.com)
 * @date    2018-10-08 22:41:09
 * @version $Id$
 */

// JS默认的对象表示方式就是{},即是一组键值对
// 其中的键必须是字符串
// Number或者其他数据类型作为键也是非常合理的，因此ES6引入Map

// 假设根据同学的名字查找对应的成绩，需要两个Array
var name = ['Mac', 'Bob', 'Try'];
var scores = [95, 75, 85];
/* 若给定名字查找对应成绩，需要现在name中找到对应名字，
	再到scores中取出对应的成绩，显然耗费时间太长。
	如果使用Map直接根据“名字-成绩”对照表查找
*/
var m = new Map([
	['Mac', 95],
	['Bob', 75],
	['Try', 85]
]);
console.log(m.get('Mac'));	// 95
console.log(m);

var mm = new Map();
mm.set('Adm', 67);	// 添加新的键值
mm.set('Bob', 69)
console.log(mm.has('Adm'));	// 判断是否存在key 'Adm' true
console.log(mm);

console.log(mm.get('Adm'));	// 67
mm.delete('Adm');	// 删除key 'Adm'
console.log(mm);
console.log(mm.get('Adm'));	// undefined

mm.set('Adm', 67);
console.log(mm);		// Map { 'Bob' => 69, 'Adm' => 67 }
mm.set('Adm', 88);
console.log(mm);		// Map { 'Bob' => 69, 'Adm' => 88 }


/* Set和Map类似，一组key的集合，但不存储value。在Set中，没有重复的key
	要创建一个Set，需要提供一个Array作为输入，或者直接创建一个空Set
*/
var s1 = new Set();	// 建立一个空的Set
var s2 = new Set([1, 2,  3]);
console.log(s2);	// Set { 1, 2, 3 }

var s = new Set([1, 2, 3, 3, '3']);
console.log(s);	// 自动过滤重复元素

s.add(4);
console.log(s);	// Set { 1, 2, 3, '3', 4 }
s.delete(3);	// 删除元素 3
console.log(s);







