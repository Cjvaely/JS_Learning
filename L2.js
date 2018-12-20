/**
 * @authors Chen Cjv (cjvaely@foxmail.com)
 * @date    2018-08-11 14:41:56
 * @version $Id$
 */

/*JavaScript字符串分两种
'' 和 ""
'本身也是一个字符，可以用“”表示‘字符"I'm OK"
如果既包含'又包含",可以用转义字符
'I\'m \"OK\"!';
*/		
// 多行字符串
console.log(`多行
字符串
测试`);

// 一般字符串
var name = '章三';
var age = 20;
var mess = 'Hello, ' + name + ', 你今年' + age + '岁了！';
console.log(mess);
// 模板字符串
var name1 = '里斯';
var asge1 = 21;
var messa = `Hello, ${name1}, 你今年${asge1}岁了！`;
console.log(messa);

// 操作字符串
var s = 'Hello, world!'
console.log(s.length);
// 注意的是，字符串是不可变的，如果对字符串的某个索引赋值，不会有任何错误，但是，也没有任何效果
console.log(s[2]);
// 下面这些方法只是返回新字符串，而不是改变字符串
var st = 'Hello';
// 转换大小写
console.log(st.toUpperCase());	// HELLO
console.log(st.toLowerCase());	//hello
// 找到字符串索引
console.log(s.indexOf('world'));	// 7
console.log(s.indexOf('World'));	// -1
// substring()返回指定索引区间的子串
console.log(s.substring(0, 5));		// 从索引0开始到5（不包括5）,Hello
console.log(s.substring(7)); 		// 从索引7开始到结束，返回'world'




























