
//Async - Opening file
/* 
var fs = require("fs");
console.log("Going To open a file !");
fs.open('input.txt', 'r+', function(err, fd){
	if(err){
		return console.log(err);
	}
	console.log("File opened successfully !");
}); */

//Get File info (Stat of file)
var fs = require("fs");
console.log("Going to get file Info .. !");
fs.stat('input.txt', function(err, stats){
	if(err){
		return console.log(err);
	}
	console.log(stats);
	console.log("Got File info successfully !");
	
	//Check File type
	console.log("Is File?" + stats.isFile());
	console.log("Is Directory ? " + stats.isDirectory());
});