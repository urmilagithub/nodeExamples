var fs = require("fs");
function UserDataModel(){};

UserDataModel.prototype.listAll = function()
{
	return new Promise(function(resolve, reject){
		console.log("Going to Open file");
		fs.readFile("../node-ex4/models/users.json", function(err, data){
			if(err){
				return console.log(err);
			}
			var UserArray = JSON.parse(data.toString());
			UserArray.forEach(function(object){
				console.log("Roll No : " + object.RollNo + " | First Name : " + object.FirstName + "| Last Name : " + object.LastName + "\n");
			});		
			resolve(UserArray);
		});
	});	
}

UserDataModel.prototype.addUser = function(userObject, headers)
{
	return new Promise(function(resolve, reject){
		console.log("Going to add");		
		fs.readFile("../node-ex4/models/users.json", function(err, data){
			if(err){
				return console.log(err);
			}
			var UserArray = JSON.parse(data.toString());
				var newUser = { 
					"RollNo": userObject.rno,
					"FirstName": userObject.fname,
					"LastName": userObject.lname
				};
				UserArray.push(newUser);
				var newJS = JSON.stringify(UserArray); 
				fs.writeFile("../node-ex4/models/users.json", newJS, function(err, data){
					if(err){
						return console.log(err);
					}
				}); 
			UserArray.forEach(function(object){
				console.log("Roll No : " + object.RollNo + " | First Name : " + object.FirstName + "| Last Name : " + object.LastName + "\n");
			});
			resolve(UserArray);	
		});
	});	
}

UserDataModel.prototype.updateUser = function(userObject, headers)
{
	return new Promise(function(resolve, reject){
		console.log("Going to Update");
		
		fs.readFile("../node-ex4/models/users.json", function(err, data){
			if(err){
				return console.log(err);
			}
			var UserArray = JSON.parse(data.toString());
			
			UserArray.forEach(function(object){
				if(object.RollNo == userObject.rno)
				{
					object.FirstName = userObject.fname;
					object.LastName = userObject.lname;
				}
				console.log("Roll No : " + object.RollNo + " | First Name : " + object.FirstName + "| Last Name : " + object.LastName + "\n");
			});	

			var newJS = JSON.stringify(UserArray); 
			fs.writeFile("../node-ex4/models/users.json", newJS, function(err, data){
				if(err){
					return console.log(err);
				}
			}); 
			resolve(UserArray);	
		});
	});	
}

UserDataModel.prototype.deleteLastUser = function(userObject, headers)
{
	return new Promise(function(resolve, reject){
		console.log("Going to delete");
		
		fs.readFile("../node-ex4/models/users.json", function(err, data){
			if(err){
				return console.log(err);
			}
			var UserArray = JSON.parse(data.toString());
				//var position = UserArray.indexOf(userObject.fname);
				//UserArray.splice(1,1);
				UserArray.pop();
				var newJS = JSON.stringify(UserArray); 
				fs.writeFile("../node-ex4/models/users.json", newJS, function(err, data){
					if(err){
						return console.log(err);
					}
				}); 
			UserArray.forEach(function(object){
				console.log("Roll No : " + object.RollNo + " | First Name : " + object.FirstName + "| Last Name : " + object.LastName + "\n");
			});	
			resolve(UserArray);
		});
	});	
}

module.exports.UserDataModel = new UserDataModel();
