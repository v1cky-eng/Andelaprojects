// Get process.stdin as the standard input object.
var standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');

// Prompt user to input data in console.
console.log("Please Input Your Year Of Birth.");
 //When user input data and click enter key.
standard_input.on('data', function (data) {
	if(data >= 2001){
  // Print user input in console.
        console.log('You are a minor');}
	else if(data <= 2002 && data >= 1983){
	console.log('You are a youth');

}
	else if(data <= 1984){
	console.log('You are an elder');

}


    });

       // console.log("end");
  





	
