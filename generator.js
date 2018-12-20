'use strict'
/**
 * @authors Chen Cjv (cjvaely@foxmail.com)
 * @date    2018-10-14 16:49:57
 * @version $ES6$
 */
// generator（生成器）：看上去像一个函数，但可以返回多次。

// 复习函数：
// 一个函数是一段完整的代码，调用一个函数就是传入参数，然后返回结果：
function foo(x) {
    return x + x;
}

var r = foo(1); // 调用foo函数
// 函数在执行过程中，如果没有遇到return语句（函数末尾如果没有return，
// 就是隐含的return undefined;），控制权无法交回被调用的代码。

// generator跟函数很像，定义如下：
function* foo(x) {
    yield x + 1;
    yield x + 2;
    return x + 3;
}
/*
generator由function*定义
除了return语句，还可以用yield返回多次。
 */
// 编写一个产生斐波那契数列的函数，可以这么写：
function fib(max) {
    var
        t,
        a = 0,
        b = 1,
        arr = [0, 1];
    while (arr.length < max) {
        [a, b] = [b, a + b];
        arr.push(b);
    }
    return arr;
}

// 测试:
console.log(fib(5)); // [0, 1, 1, 2, 3]
console.log(fib(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// 函数只能返回一次，所以必须返回一个Array。但是，如果换成generator，就可以一次返回一个数，不断返回多次。用generator改写如下：
function* fib1(max) {
    var
        t,
        a = 0,
        b = 1,
        n = 0;
    while (n < max) {
        yield a;
        [a, b] = [b, a + b];
        n ++;
    }
    return;
}
console.log(fib1(5));	// fib {[[GeneratorStatus]]: "suspended", [[GeneratorReceiver]]: Window}
// 调用generator对象有两个方法，一是不断地调用generator对象的next()方法：
/*
var f = fib(5);
f.next(); // {value: 0, done: false}
f.next(); // {value: 1, done: false}
f.next(); // {value: 1, done: false}
f.next(); // {value: 2, done: false}
f.next(); // {value: 3, done: false}
f.next(); // {value: undefined, done: true}
 */
// next()方法会执行generator的代码，然后，每次遇到yield x;
// 就返回一个对象{value: x, done: true/false}，然后“暂停”。
// 返回的value就是yield的返回值，done表示这个generator是否已经执行结束了。
// 如果done为true，则value就是return的返回值
// 当执行到done为true时，这个generator对象就已经全部执行完毕，不要再继续调用next()了

// 第二个方法是直接用for ... of循环迭代generator对象，这种方式不需要我们自己判断done
function* fib2(max) {
    var
        a = 0,
        b = 1,
        n = 0;
    while (n < max) {
        yield a;
        [a, b] = [b, a + b];
        n ++;
    }
    return;
}
for (var x of fib(10)) {
    console.log(x); // 依次输出0, 1, 1, 2, 3, ...
}

// 相比普通函数的优势：可以在执行过程中多次返回；
// 利用这个特点，用一个对象来保存状态，写一个generator就可以实现需要用面向对象才能实现的功能；
// 用一个对象来保存状态，得这么写：
var fib = {
    a: 0,
    b: 1,
    n: 0,
    max: 5,
    next: function () {
        var
            r = this.a,
            t = this.a + this.b;
        this.a = this.b;
        this.b = t;
        if (this.n < this.max) {
            this.n ++;
            return r;
        } else {
            return undefined;
        }
    }
};

// 练习：要生成一个自增的ID，可以编写一个next_id()函数：
var current_id = 0;

function next_id() {
    current_id ++;
    return current_id;
}
/*
由于函数无法保存状态，故需要一个全局变量current_id来保存数字。
不用闭包，试用generator改写：
 */
function* next_id() {
	let current_id = 0;
	while (true) {
		yield ++current_id;
	}
}
// 测试:
var
    x,
    pass = true,
    g = next_id();
for (x = 1; x < 100; x ++) {
    if (g.next().value !== x) {
        pass = false;
        console.log('测试失败!');
        break;
    }
}
if (pass) {
    console.log('测试通过!');
}










































