/**
 * 对象
 * @authors Chen Cjv (cjvaely@foxmail.com)
 * @date    2018-08-12 17:48:09
 * @version $Id$
 */

/*
	JavaScript的对象是一种无序的集合数据类型，它由若干键值对组成
	对象用于描述现实世界中的某个对象。例如，为了描述“小明”这个淘气的小朋友，
	我们可以用若干键值对来描述他：
*/
var xiaoming = {
	name: '小明',
	birth: 1990,
	'middle-school': 'No.1 Middle School',
	height: 1.70,
	weight: 65,
	score: null
};
console.log(xiaoming.name);
// 对象中特殊的属性名（不合法的变量名）可以用''括起来
// 例如 middle-school，但是不能用.来访问属性值了，需要用 对象[‘属性名’]
console.log(xiaoming['middle-school']);
console.log(xiaoming['name']);
// 所以，尽量用规范的变量名做属性值，别给自己找不自在

// 实际上JavaScript对象的所有属性都是字符串，不过属性对应的值可以是任意数据类型。
// JavaScript规定，访问不存在的属性不报错，而是返回undefined：

// JavaScript的对象是动态类型，你可以自由地给一个对象添加或删除属性
xiaoming = {
	name: '小明'
};
console.log(xiaoming.age); // undefined
xiaoming.age = 18;
console.log(xiaoming.age); // 18
delete xiaoming.age; // 删除age属性
console.log(xiaoming.age); // undefined
delete xiaoming.school; // 删除一个不存在的school属性也不会报错

// 要检测xiaoming是否拥有某一属性，可以用in操作符：
xiaoming = {
    name: '小明',
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null
};
console.log('name' in xiaoming);	// true
console.log('grade' in xiaoming);	// false
// 如果in判断一个属性存在，这个属性不一定是xiaoming的，它可能是xiaoming继承得到的：
console.log('toString' in xiaoming)		// true
// 要判断一个属性是否是xiaoming自身拥有的，而不是继承得到的，可以用hasOwnProperty()方法
xiaoming = {
    name: '小明'
};
console.log(xiaoming.hasOwnProperty('name')); 	// true
console.log(xiaoming.hasOwnProperty('toString')); 	// false

























