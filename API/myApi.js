var request = require('request')

console.log("1. aftenposten");
console.log("2. abc news au");
console.log("3. ABC News");
console.log("4. ansa");

var standard_input = process.stdin;

standard_input.setEncoding('utf-8');


 
standard_input.on('data', function (data) {
	if(data === '1'){
          console.log('aftenposten');
	request.get("https://newsapi.org/v2/top-headlines?sources=aftenposten&apiKey=c25149fe90544389a3991a48f49630d6", (error, response, body) => {
 
          if (error) {
                return console.log(error);
            }
           console.log(JSON.parse(body));

});
    
}
	if(data === '2'){
	console.log('abc news au');
	request.get("https://newsapi.org/v2/top-headlines?sources=abc-news-au&apiKey=c25149fe90544389a3991a48f49630d6", (error, response, body) => {

            if (error) {
                return console.log(error);
            }
            console.log(JSON.parse(body));

});
process.exit()
}
	 if(data === '3'){
	console.log('ABC news');
	request.get("https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=c25149fe90544389a3991a48f49630d6", (error, response, body) => {

            if (error) {
                return console.log(error);
            }
            console.log(JSON.parse(body));
});
process.exit()
}
 if(data === '4'){
	console.log('ansa');
	request.get("https://newsapi.org/v2/top-headlines?sources=ansa&apiKey=c25149fe90544389a3991a48f49630d6", (error, response, body) => {

            if (error) {
                return console.log(error);
            }
            console.log(JSON.parse(body));
	
});
process.exit()
}
if(data === 'exit'){
process.exit()
}
   process.exit()
});

       // console.log("end");
  
