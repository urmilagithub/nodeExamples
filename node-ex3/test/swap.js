function swap(num1, num2)
{
	var num1 = num1 + num2;
	var num2 = num1 - num2;
	var num1 = num1 - num2;
	var result = "a = " + num1 + " b = " + num2;
	console.log(result);
}
var result = swap(a = 4,b = 5);
