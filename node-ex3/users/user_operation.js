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

function addUser()
{
	console.log("Going to add");
	
	fs.readFile("./users/users.json", function(err, data){
		if(err){
			return console.log(err);
		}
		var UserArray = JSON.parse(data.toString());
			var newUser = { 
				"RollNo": 5,
				"FirstName": "Leyno",
				"LastName": "Joe"
			};
			UserArray.push(newUser);
			var newJS = JSON.stringify(UserArray); 
			fs.writeFile("./users/users.json", newJS, function(err, data){
				if(err){
					return console.log(err);
				}
			}); 
		UserArray.forEach(function(object){
			console.log("Roll No : " + object.RollNo + " | First Name : " + object.FirstName + "| Last Name : " + object.LastName + "\n");
		});		
	});
}

function updateUser()
{
	console.log("Going to Update");
	
	fs.readFile("./users/users.json", function(err, data){
		if(err){
			return console.log(err);
		}
		var UserArray = JSON.parse(data.toString());
		
		UserArray.forEach(function(object){
			if(object.RollNo == 3)
			{
				object.FirstName = "Isha";
				object.LastName = "sen";
			}
			console.log("Roll No : " + object.RollNo + " | First Name : " + object.FirstName + "| Last Name : " + object.LastName + "\n");
		});	

		var newJS = JSON.stringify(UserArray); 
		fs.writeFile("./users/users.json", newJS, function(err, data){
			if(err){
				return console.log(err);
			}
		}); 	
	});
}

function deleteLastUser()
{
	console.log("Going to add");
	
	fs.readFile("./users/users.json", function(err, data){
		if(err){
			return console.log(err);
		}
		var UserArray = JSON.parse(data.toString());
			UserArray.pop();
			var newJS = JSON.stringify(UserArray); 
			fs.writeFile("./users/users.json", newJS, function(err, data){
				if(err){
					return console.log(err);
				}
			}); 
		UserArray.forEach(function(object){
			console.log("Roll No : " + object.RollNo + " | First Name : " + object.FirstName + "| Last Name : " + object.LastName + "\n");
		});		
	});
}
//listAll();
//addUser();
//updateUser();
deleteLastUser();