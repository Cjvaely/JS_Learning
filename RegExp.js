'use strict'
/**
 * @authors Chen Cjv (cjvaely@foxmail.com)
 * @date    2018-10-14 20:37:08
 * @version $ES6$
 */
/*
对字符串进行操作的需求:
比如判断一个字符串是否是合法的Email地址正则表达式是一种用来匹配字符串的强有力的武器

用\d可以匹配一个数字，\w可以匹配一个字母或数字
*表示任意个字符（包括0个），用+表示至少一个字符，
用?表示0个或1个字符，用{n}表示n个字符，用{n,m}表示n-m个字符
\s可以匹配一个空格（也包括Tab等空白符）
'-'是特殊字符，在正则表达式中，要用'\'转义

'00\d'可以匹配'007'，但无法匹配'00A'；
'\d\d\d'可以匹配'010'；
'\w\w'可以匹配'js'；

要做更精确地匹配，可以用[]表示范围
[0-9a-zA-Z\_]可以匹配一个数字、字母或者下划线
[0-9a-zA-Z\_]+可以匹配至少由一个数字、字母或者下划线组成的字符串，比如'a100'，'0_Z'，'js2015'等等
[a-zA-Z\_\$][0-9a-zA-Z\_\$]*可以匹配由字母或下划线、$开头，后接任意个由一个数字、字母或者下划线、$组成的字符串，也就是JavaScript允许的变量名；
 ^表示行的开头，^\d表示必须以数字开头。
 $表示行的结束，\d$表示必须以数字结束。
 */
// JS中有两种方法创建正则表达式：
// 第一种方式是直接通过/正则表达式/写出来，
// 第二种方式是通过new RegExp('正则表达式')创建一个RegExp对象。
var re1 = /ABC\-001/;
var re2 = new RegExp('ABC\\-001');
// 使用第二种写法，因为字符串的转义问题，字符串的两个\\实际上是一个\。
// 先看看如何判断正则表达式是否匹配：
var re = /^\d{3}\-\d{3,8}$/;
re.test('010-12345'); // true
re.test('010-1234x'); // false
re.test('010 12345'); // false
// test()方法用于测试给定的字符串是否符合条件。

// 切分字符串:用正则表达式切分字符串比用固定的字符更灵活，请看正常的切分代码：
'a b   c'.split(' '); // ['a', 'b', '', '', 'c']
// 无法识别连续的空格，用正则表达式试试：
'a b   c'.split(/\s+/); // ['a', 'b', 'c']
// 无论多少个空格都可以正常分割，加入,试试。
'a,b, c  d'.split(/[\s\,]+/); // ['a', 'b', 'c', 'd']
// 再加入;试试：
'a,b;; c  d'.split(/[\s\,\;]+/);	// ["a", "b", "c", "d"]

// 分组：正则表达式还有提取子串的强大功能。用()表示的就是要提取的分组（Group）
// 分别定义两个组，可以直接从匹配的字符串中提取出区号和本地号码：
var re = /^(\d{3})-(\d{3,8})$/;
re.exec('010-12345');	// ['010-12345', '010', '12345']
re.exec('010 12345'); // null
// exec()方法在匹配成功后，会返回一个Array，
// 第一个元素是正则表达式匹配到的整个字符串，后面的字符串表示匹配成功的子串。
// exec()方法在匹配失败时返回null。
// 看一个更凶残的例子：
var re = /^(0[0-9]|1[0-9]|2[0-3]|[0-9])\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])$/;
re.exec('19:05:30'); // ['19:05:30', '19', '05', '30']

// 贪婪匹配:正则匹配默认是贪婪匹配，也就是匹配尽可能多的字符。举例如下，匹配出数字后面的0：
var re1 = /^(\d+)(0*)$/;
re1.exec('102300');		// ['102300', '102300', '']
// 由于\d+采用贪婪匹配，直接把后面的0全部匹配了，结果0*只能匹配空字符串了。
// 让\d+采用非贪婪匹配（也就是尽可能少匹配），才能把后面的0匹配出来，加个?就可以让\d+采用非贪婪匹配：
var re = /^(\d+?)(0*)$/;
re.exec('102300'); // ['102300', '1023', '00']

// 全局搜索
// JavaScript的正则表达式还有几个特殊的标志，最常用的是g，表示全局匹配
var r1 = /test/g;
// 等价于:
var r2 = new RegExp('test', 'g');
var s = 'JavaScript, VBScript, JScript and ECMAScript';
var re2 = /[a-zA-Z]+Script/g;

// 使用全局匹配:
re.exec(s); // ['JavaScript']
re.lastIndex; // 10

re.exec(s); // ['VBScript']
re.lastIndex; // 20

re.exec(s); // ['JScript']
re.lastIndex; // 29

re.exec(s); // ['ECMAScript']
re.lastIndex; // 44

re.exec(s); // null，直到结束仍没有匹配到

// 全局匹配类似搜索，因此不能使用/^...$/，那样只会最多匹配一次。
// 正则表达式还可以指定i标志，表示忽略大小写，m标志，表示执行多行匹配。
/*
练习:
请尝试写一个验证Email地址的正则表达式。版本一应该可以验证出类似的Email：
 */

var re = /^[\w]+([-_.][\w]+)*\@([\w]+[.])+[a-zA-Z]+$/;

// 测试:
var
    i,
    success = true,
    should_pass = ['someone@gmail.com', 'bill.gates@microsoft.com', 'tom@voyager.org', 'bob2015@163.com'],
    should_fail = ['test#gmail.com', 'bill@microsoft', 'bill%gates@ms.com', '@voyager.org'];
for (i = 0; i < should_pass.length; i++) {
    if (!re.test(should_pass[i])) {
        console.log('测试失败: ' + should_pass[i]);
        success = false;
        break;
    }
}
for (i = 0; i < should_fail.length; i++) {
    if (re.test(should_fail[i])) {
        console.log('测试失败: ' + should_fail[i]);
        success = false;
        break;
    }
}
if (success) {
    console.log('测试通过!');
}

// 版本二可以验证并提取出带名字的Email地址：
var re = /^<([a-zA-Z\s]+)>\s+([\w]+([-_.][\w]+)*\@([\w]+[.])+[a-zA-Z]+)$/;


// 测试:
var r = re.exec('<Tom Paris> tom@voyager.org');
if (r === null || r.toString() !== ['<Tom Paris> tom@voyager.org', 'Tom Paris', 'tom@voyager.org'].toString()) {
    console.log('测试失败!');
}
else {
    console.log('测试成功!');
}







































