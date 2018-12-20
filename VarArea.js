'use strict'
/**
 * @authors Chen Cjv (cjvaely@foxmail.com)
 * @date    2018-10-10 10:50:15
 * @version $ES6$
 */
// 变量作用域与解构赋值
/*
(1)用var申明的变量实际上是有作用域的；
(2)如果一个变量在函数体内部申明，则该变量的作用域为整个函数体，
在函数体外不可引用该变量；
(3)不同函数内部的同名变量互相独立，互不影响;
(4)JS函数可以嵌套，内部函数可以访问外部函数定义的变量，反过来不行;
 */
// function foo() {
//     var x = 1;
//     function bar() {
//         var y = x + 1; // bar可以访问foo的变量x!
//         console.log(y);
//     }
//     bar();
//     // var z = y + 1; // ReferenceError! foo不可以访问bar的变量y!
// }
// foo();

// 如果内部函数和外部函数的变量名重名怎么办？
function foo() {
    var x = 1;
    function bar() {
        var x = 'A';
        console.log('x in bar() = ' + x); // 'A'
    }
    console.log('x in foo() = ' + x); // 1
    bar();
}
foo();
/* 结果：
x in foo() = 1
x in bar() = A
这说明JS的函数在查找变量时从自身函数定义开始，
从“内”向“外”查找。如果内部函数定义了与外部函数重名的变量，
则内部函数的变量将“屏蔽”外部函数的变量。
*/

/*
变量提升:
先扫描整个函数体的语句，把所有申明的变量“提升”到函数顶部
 */
function fo() {
    var x = 'Hello, ' + y;
    console.log(x);
    var y = 'Bob';
}
fo();
/*
语句var x = 'Hello, ' + y;并不报错
但是console.log显示Hello, undefined
这是因为JS引擎提升了变量y的声明，但不会提升变量y的赋值
 */
// 其实，引擎看到的代码相当于：
function fo1() {
	var y;
	var x = 'Hello, ' + y;
	console.log(x);
	y = 'Bob';
}

/* 全局作用域：
不在任何函数内定义的变量就具有全局作用域
JavaScript默认有一个全局对象window
全局作用域的变量实际上被绑定到window的一个属性
*/
var course = 'Learn JavaScript';
alert(course);
alert(window.course);
/*
由于函数定义有两种方式，以变量方式
var foo = function () {}定义的函数实际上也是一个全局变量
 */
function fo2() {
	alert('fo2');
}
fo2();
window.fo2();

// 进一步大胆地猜测，我们每次直接调用的alert()函数其实也是window的一个变量
window.alert('调用window.alert()');
// 把alert保存到另一个变量:
var old_alert = window.alert;
// 给alert赋一个新函数:
window.alert = function () {}
alert('无法用alert()显示了!');
// 恢复alert:
window.alert = old_alert;
alert('又可以用alert()了!');

/*
这说明JavaScript实际上只有一个全局作用域。
任何变量（函数也视为变量），如果没有在当前函数作用域中找到，
就会继续往上查找，最后如果在全局作用域中也没有找到，
则报ReferenceError错误。
 */

/* 名字空间:
不同的JavaScript文件如果使用了相同的全局变量，
或者定义了相同名字的顶层函数，都会造成命名冲突，并且很难被发现
 */
// 减少冲突的一个方法是把自己的所有变量和函数全部绑定到一个全局变量中。

// 唯一的全局变量MYAPP：
var MYAPP = {};

// 其它变量
MYAPP.name = 'myapp';
MYAPP.version = 1.0;

// 其它函数：
MYAPP.foo = function () {
	return 'foo';
};

/*
把自己的代码全部放入唯一的名字空间MYAPP中，会大大减少全局变量冲突的可能。
许多著名的JavaScript库都是这么干的：jQuery，YUI，underscore等等
 */

/*局部作用域:
JS的变量作用域实际上是函数内部，
我们在for循环等语句块中是无法定义具有局部作用域的变量的：
 */
function fx() {
    for (var i = 0; i < 100; i++) {
        //
    }
    i += 100; // 仍然可以引用变量i
    console.log('fx = ' + i);
}
fx();	// fx = 200

/*
为了解决块级作用域，ES6引入了新的关键字let，
用let替代var可以申明一个块级作用域的变量：
 */
function fy() {
	var sum = 0;
	for (let i = 0; i < 100; i++) {
		sum += i;
	}
	// ReferenceError: i is not defined
	i += 1;
	console.log('fy = ' + i);
}

/*
常量：
我们通常用全部大写的变量来表示“这是一个常量，不要修改它的值”：
ES6标准引入了新的关键字const来定义常量，const与let都具有块级作用域：
 */
const PI = 3.14;
PI = 3;	// 某些浏览器不报错，但是无效果！
PI;	// 3.14

/*
解构赋值:ES6同时对一组变量进行赋值。
先看看传统的做法，如何把一个数组的元素分别赋值给几个变量：
 */
var array = ['hello', 'JavaScript', 'ES6'];
var x = array[0];
var y = array[1];
var z = array[2];

// 现在，在ES6中，可以使用解构赋值，直接对多个变量同时赋值：
// 如果浏览器支持解构赋值就不会报错:
// 对数组元素进行解构赋值时，多个变量要用[...]括起来 
var [x, y, z] = ['hello', 'JavaScript', 'ES6'];
// x, y, z分别被赋值为数组对应元素:
console.log('x = ' + x + ', y = ' + y + ', z = ' + z);
// x = hello, y = JavaScript, z = ES6
// 如果数组本身还有嵌套，
// 也可以通过下面的形式进行解构赋值，注意嵌套层次和位置要保持一致：
let [x, [y, z]] = ['hello', ['JavaScript', 'ES6']];
x; // 'hello'
y; // 'JavaScript'
z; // 'ES6'
// 解构赋值还可以忽略某些元素：
let [, , z] = ['hello', 'JavaScript', 'ES6']; // 忽略前两个元素，只对z赋值第三个元素
z; 	// 'ES6'
// 如果需要从一个对象中取出若干属性，也可以使用解构赋值，
// 便于快速获取对象的指定属性：
var person = {
    name: '小明',
    age: 20,
    gender: 'male',
    passport: 'G-12345678',
    school: 'No.4 middle school'
};
var {name, age, passport} = person;
// name, age, passport分别被赋值为对应属性:
console.log('name = ' + name + ', age = ' + age + ', passport = ' + passport);
// 对一个对象进行解构赋值时，同样可以直接对嵌套的对象属性进行赋值，只要保证对应的层次是一致的：
var person = {
    name: '小明',
    age: 20,
    gender: 'male',
    passport: 'G-12345678',
    school: 'No.4 middle school',
    address: {
        city: 'Beijing',
        street: 'No.1 Road',
        zipcode: '100001'
    }
};

var {name, address: {city, zip}} = person;
name; // '小明'
city; // 'Beijing'
zip; // undefined, 因为属性名是zipcode而不是zip
// 注意: address不是变量，而是为了让city和zip获得嵌套的address对象的属性:
address; // Uncaught ReferenceError: address is not defined

/*
使用解构赋值对对象属性进行赋值时，如果对应的属性不存在，
变量将被赋值为undefined，这和引用一个不存在的属性获得undefined是一致的。
如果要使用的变量名和属性名不一致，可以用下面的语法获取：
 */
var person = {
    name: '小明',
    age: 20,
    gender: 'male',
    passport: 'G-12345678',
    school: 'No.4 middle school'
};

// 把passport属性赋值给变量id:
let {name, passport:id} = person;
name; // '小明'
id; // 'G-12345678'
// 注意: passport不是变量，而是为了让变量id获得passport属性:
passport; // Uncaught ReferenceError: passport is not defined

// 解构赋值还可以使用默认值，这样就避免了不存在的属性返回undefined的问题：
var person = {
    name: '小明',
    age: 20,
    gender: 'male',
    passport: 'G-12345678'
};

// 如果person对象没有single属性，默认赋值为true:
var {name, single=true} = person;
name; // '小明'
single; // true

// 有些时候，如果变量已经被声明了，再次赋值的时候，正确的写法也会报语法错误：
// 声明变量:
var x, y;
// 解构赋值:
{x, y} = { name: '小明', x: 100, y: 200};
// 语法错误: Uncaught SyntaxError: Unexpected token =
// 是因为JavaScript引擎把{开头的语句当作了块处理，于是=不再合法。
// 解决方法是用小括号括起来：
({x, y} = { name: '小明', x: 100, y: 200});

// 使用场景：
/*
解构赋值在很多时候可以大大简化代码。
例如，交换两个变量x和y的值，可以这么写，不再需要临时变量：
 */
var x=1, y=2;
[x, y] = [y, x];
// x = 2 y = 1
// 快速获取当前页面的域名和路径：
var {hostname:domain, pathname:path} = location;

/*
如果一个函数接收一个对象作为参数，那么，可以使用解构直接把对象的属性绑定到变量中。
例如，下面的函数可以快速创建一个Date对象
 */
function buildDate({year, month, day, hour=0, minute=0, second=0}) {
    return new Date(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second);
}
// 它的方便之处在于传入的对象只需要year、month和day这三个属性：
buildDate({ year: 2017, month: 1, day: 1 });
// Sun Jan 01 2017 00:00:00 GMT+0800 (CST)

// 也可以传入hour、minute和second属性：
buildDate({ year: 2017, month: 1, day: 1, hour: 20, minute: 15 });
// Sun Jan 01 2017 20:15:00 GMT+0800 (CST)


































