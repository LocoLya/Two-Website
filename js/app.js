/*
var num_1 = 5;
var num_2 = String(15);
console.log(num_2)

var result = num_1 - num_2;

var num_3 = 5;

num_3 += 7;
num_3++;


console.log(num_3)

*/

console.log()

/*
var number = 17;


if (12 % 2 == 0 && 21 == 2) {
	console.log("even")
}  if (number == 17) {
	console.log("17")
} 
else {
	console.log("odd")
}

switch (number) {
	case 17:
		console.log("17")
		break;
}

var str1 = "Word";

switch (str1) {
	case "4":
		console.log("ddddd");
		break;
	case "Wrd":
		console.log(str1);
		break;
	default:
		console.log("default")

}






var arr = [3, 4, 5, true, "strifgn"];

arr[3 + 1] = "Double";

console.log(arr[4])
console.log(arr.length)

var arr = [[2, 4, 5], [true, "False"]]

var spis = arr[1]

console.log(arr)

*/

var username = document.getElementById("username");
var email = document.getElementById("email");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  username.value = ""; // очищает значение в input для имени
  email.value = ""; // очищает значение в input для email
}); 