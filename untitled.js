'use strict'
/**
 * @authors Chen Cjv (cjvaely@foxmail.com)
 * @date    2018-10-11 21:59:40
 * @version $ES6$
 */


// function string2int(s) {
// 	function str2int(x) {
// 		return x -= 0;
//     }
//     let s1 = s.split('');
//     let n = s1.map(str2int);
//     return n.reduce(function (x, y) { return x * 10 + y; });
// }

// // 测试:
// if (string2int('0') === 0 && string2int('12345') === 12345 && string2int('12300') === 12300) {
//     if (string2int.toString().indexOf('parseInt') !== -1) {
//         console.log('请勿使用parseInt()!');
//     } else if (string2int.toString().indexOf('Number') !== -1) {
//         console.log('请勿使用Number()!');
//     } else {
//         console.log('测试通过!');
//     }
// }
// else {
//     console.log('测试失败!');
// }

// // 练习
// function normalize(arr) {
// 	function ChangeName(name) {
// 		let name1 = name.split('');
// 		for (let i in name1) {
// 			if (i == 0) {
// 				name1[i] = name1[i].toUpperCase();
// 			} else {
// 				name1[i] = name1[i].toLowerCase();
// 			}
// 		}
// 		return name1.join('');
// 	}
// 	return arr.map(ChangeName);
// }
// // 测试:
// if (normalize(['adam', 'LISA', 'barT']).toString() === ['Adam', 'Lisa', 'Bart'].toString()) {
//     console.log('测试通过!');
// }
// else {
//     console.log('测试失败!');
// }

// var arr = ['1', '2', '3'];
// function a(x) {
// 	return parseInt(x);
// }
// var r = arr.map(a);

// console.log(r);

// // 
// var arr1 = ['1', '2', '3'];
// var r1;
// r1 = arr1.map(Number);
// console.log(r1);

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
// 测试:
var x, r, arr = [];
for (x = 1; x < 100; x++) {
    arr.push(x);
}
r = get_primes(arr);
if (r.toString() === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97].toString()) {
    console.log('测试通过!');
} else {
    console.log('测试失败: ' + r.toString());
}

































