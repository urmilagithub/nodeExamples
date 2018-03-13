var fs = require("fs");
console.log("We are going to write into file !");
fs.appendFile('input.txt', 'Simple easy learning!', function(err){
	if(err){
		return console.log(err)
	}
	console.log("Data written successfully !");
	console.log("Lets read newly written data");
	fs.readFile('input.txt', function(err, data){
		if(err)
		{
			console.log(err);
		}
		console.log(data.toString());
	});
});
