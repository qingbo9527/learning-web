/* 输出菱形 */

var str = "";
// 外层控制行数，上半部分
for (var row = 1; row <= 5; row++){
	// 空格用@代替，因为第一行有4个空格，1个星星。
	for (var j = 1; j <= 5 - row; j++){
		str = str + "@";
	}
	for (var i = 1; i <= 2 * row - 1; i++){
		str = str + "*";
	}
	str = str + "\n";
}
// 下半部分
for (var row = 1; row <= 4; row++){
	for (var j = 1; j <= row; j++){
		str = str + "@";
	}
	for (var i = 1; i <= 9 - 2 * row; i++){
		str = str + "*";
	}
	str = str + "\n";
}
console.log(str);
