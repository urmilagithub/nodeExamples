var fs = require("fs");
fs.open('tmp/beta/demo1/index.txt', 'r+', function(err, fd){
	if(err){
		return console.log(err);
	}
	fs.writeFile("tmp/beta/demo1/index.txt", "Demo for mkdir and write file.", function(err){
		if(err){
			return console.log(err);
		}
		console.log("File writing Done !!!");
		fs.readFile('tmp/beta/demo1/input.txt', function(err, data){
			if(err)
			{
				console.log(err);
			}
			console.log(data.toString());
		});
		fs.close(fd, function(err){
			if(err)
			{
				console.log(err);
			}
			console.log("File closed successfully !!!");
		});
	});
});	
