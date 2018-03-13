var fs = require("fs");

function listAll()
{
	console.log("Going to Open file");
	fs.readFile("./users/users.json", function(err, data){
		if(err){
			return console.log(err);
		}
		var UserArray = JSON.parse(data.toString());
		UserArray.forEach(function(object){
			console.log("Roll No : " + object.RollNo + " | First Name : " + object.FirstName + "| Last Name : " + object.LastName + "\n");
		});		
	});
}
listAll();