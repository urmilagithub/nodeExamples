//Blocking Program example
/* var fs = require("fs");  
var data = fs.readFileSync('input.txt');  
console.log(data.toString()); 
console.log("Program Ended"); */

//Non-Blocking Program example

/* var fs = require("fs");  
fs.readFile('input.txt', function (err, data) { 
    if (err) return console.error(err); 
    console.log("\n" + data.toString()); 
});  
console.log("---------------\n Program Ended"); */

//Synchronous and asynchronous File reading

var fs = require("fs");

//Asynchronous Read
fs.readFile('input.txt', function(err, data){
	if(err){
		return console.err(err);
	}
	console.log("Asynchronous read:" + data.toString());
});

//synchronous read
var data = fs.readFileSync('input.txt');
console.log("synchronous read: " + data.toString());
console.log("Program ended");