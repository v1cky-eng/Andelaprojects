var fizz = "fizz";
var buzz = "buzz";
var mySum;
 
function myFunction(array1, array2){
	mySum = array1.length + array2.length;
	
if(mySum%3 == 0){
 return fizz;
}

else if(mySum%5 == 0){
 return buzz;
}

else if(mySum%3 == 0 && mySum%5 == 0){
 return 4;
}
}
var a = [2, 3];

var b = [2, 5, 7];
console.log (myFunction(a,b));


