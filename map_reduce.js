'use strict'
/**
 * @authors Chen Cjv (cjvaely@foxmail.com)
 * @date    2018-10-12 18:15:06
 * @version $ES6$
 */
/* 
map()方法定义在JavaScript的Array中，
我们调用Array的map()方法，传入我们自己的函数，
就得到了一个新的Array作为结果
*/
function pow(x) {
	return x * x;
}
var arr = [1,2,3,4,5,6,7,8,9];
var results = arr.map(pow);
console.log(results);	// [ 1, 4, 9, 16, 25, 36, 49, 64, 81 ]
// 注意：map()传入的参数是pow，即函数对象本身
// map()作为高阶函数，事实上它把运算规则抽象了,下面是一个更加复杂的例子
arr.map(String);

/*
reduce:把一个函数作用在这个Array的[x1, x2, x3...]上，
这个函数必须接收两个参数，reduce()把结果继续和序列的下一个元素做累积计算，
其效果就是：
 */
// [x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)

// 比方说对一个Array求和，就可以用reduce实现：
var arr1 = [1, 3, 5, 7, 9];
arr1.reduce(function (x, y) {
    return x + y;
}); 	// 25

// 练习：利用reduce()求积：
function product(arr) {
	return arr.reduce(function (x, y) {
		return x * y;
	});
}
// 测试:
if (product([1, 2, 3, 4]) === 24 && product([0, 1, 2]) === 0 && product([99, 88, 77, 66]) === 44274384) {
    console.log('测试通过!');
}
else {
    console.log('测试失败!');
}

// 把[1, 3, 5, 7, 9]变成整数13579
arr1.reduce(function (x, y) {
	return x * 10 + y;
});

/*
 把一个字符串13579先变成Array——[1, 3, 5, 7, 9]，
 再利用reduce()就可以写出一个把字符串转换为Number的函数。
 */
var str = '13579';
// function string2int(s) {
// 	let array = [];
// 	for (let i of s) {
// 		i -= 0;
// 		array.push(i);
// 	}
// 	return array;
// }

function string2int(s) {
	function str2int(x) {
		return x -= 0;
    }
    let s1 = s.split('');
    let n = s1.map(str2int);
    return n.reduce(function (x, y) { return x * 10 + y; });
}

// 测试:
if (string2int('0') === 0 && string2int('12345') === 12345 && string2int('12300') === 12300) {
    if (string2int.toString().indexOf('parseInt') !== -1) {
        console.log('请勿使用parseInt()!');
    } else if (string2int.toString().indexOf('Number') !== -1) {
        console.log('请勿使用Number()!');
    } else {
        console.log('测试通过!');
    }
}
else {
    console.log('测试失败!');
}

// 练习：请把用户输入的不规范的英文名字，变为首字母大写，
// 其他小写的规范名字。
// 输入：['adam', 'LISA', 'barT']，输出：['Adam', 'Lisa', 'Bart']。
function normalize(arr) {
	function ChangeName(name) {
		let name1 = name.split('');
		for (let i in name1) {
			if (i == 0) {
				name1[i] = name1[i].toUpperCase();
			} else {
				name1[i] = name1[i].toLowerCase();
			}
		}
		return name1.join('');
	}
	return arr.map(ChangeName);
}

// 测试:
if (normalize(['adam', 'LISA', 'barT']).toString() === ['Adam', 'Lisa', 'Bart'].toString()) {
    console.log('测试通过!');
}
else {
    console.log('测试失败!');
}













































