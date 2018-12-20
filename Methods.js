'use strict'
/**
 * @authors Chen Cjv (cjvaely@foxmail.com)
 * @date    2018-10-12 09:27:05
 * @version $ES6$
 */
// 方法：在一个对象中绑定函数，称为这个对象的方法。
// JS 定义一个对象
/*var xiaoming = {
	name: '小明',
	birth: 1990
};
*/
// 给xiaoming绑定一个函数，就可以做更多的事情。比如，写个age()方法：
var xiaoming = {
	name: '小明',
	birth: 1990,
	age: function () {
		var y = new Date().getFullYear();
		return y - this.birth;
	}
};
xiaoming.age;
xiaoming.age();	// 28
/*
在一个方法内部，this是一个特殊变量，它始终指向当前对象，
也就是xiaoming这个变量。所以，this.birth可以拿到xiaoming的birth属性
 */
function getAge() {
	var y = new Date().getFullYear();
	return y - this.birth;
}
var xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
};
xiaoming.age(); // 28, 正常结果
getAge(); // NaN
/*
如果单独调用函数，比如getAge()，
此时，该函数的this指向全局对象，也就是window。
 */

// 下面也是不行的！要保证this指向正确，必须用obj.xxx()的形式调用！
var fn = xiaoming.age; // 先拿到xiaoming的age函数
fn(); // NaN

// 在strict模式下让函数的this指向undefined
var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
};

var fn = xiaoming.age;
fn(); // Uncaught TypeError: Cannot read property 'birth' of undefined
// 这个决定只是让错误及时暴露出来，并没有解决this应该指向的正确位置。

// 下面是修复的办法：
var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var that = this; // 在方法内部一开始就捕获this
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - that.birth; // 用that而不是this
        }
        return getAgeFromBirth();
    }
};

xiaoming.age(); // 25
// 用var that = this;，你就可以放心地在方法内部定义其他函数，
// 而不是把所有语句都堆到一个方法中。

/* 
apply:
要指定函数的this指向哪个对象，可以用函数本身的apply方法，
它接收两个参数，第一个参数就是需要绑定的this变量，
第二个参数是Array，表示函数本身的参数
*/
// 用apply修复getAge()调用：
function getAge() {
	var y = new Date().getFullYear;
	return y - this.birth;
}

var xiaoming = {
	name: '小明',
	birth: 1990,
	age: getAge
};

xiaoming.age();		// 28
getAge.apply(xiaoming, []);	// 28 this指向xiaoming, 参数为空

// 另一个与apply()类似的方法是call()，唯一区别是：
/*
apply()把参数打包成Array再传入；
call()把参数按顺序传入。
比如调用Math.max(3, 5, 4)，分别用apply()和call()实现如下：
*/
Math.max.apply(null, [3, 5, 4]); // 5
Math.max.call(null, 3, 5, 4); // 5
// 对普通函数调用，我们通常把this绑定为null。

/* 装饰器:
利用apply()，我们还可以动态改变函数的行为
JS的所有对象都是动态的，即使内置的函数，我们也可以重新指向新的函数。

假定我们想统计一下代码一共调用了多少次parseInt()，
可以把所有的调用都找出来，然后手动加上count += 1，不过这样做太傻了。
最佳方案是用我们自己的函数替换掉默认的parseInt()：
*/
var count = 0;
var oldParseInt = parseInt; // 保存原函数

window.parseInt = function () {
    count += 1;
    return oldParseInt.apply(null, arguments); // 调用原函数
};
// 测试:
parseInt('10');
parseInt('20');
parseInt('30');
console.log('count = ' + count); // 3















































