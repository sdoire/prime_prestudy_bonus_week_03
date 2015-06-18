function first(num) {
	var x = num * 2;
	return x;
}
function second(num) {
	var x = num + 4;
	return x;
}
function third(num) {
	var x = num - 1;
	return x;
}
console.log(first(second(third(2))));
