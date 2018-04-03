var fs = require("fs");
var path = require("path");
var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pass",
    database: "demo1"
});

function UserDataModel(){};

UserDataModel.prototype.add_user = function(userObject, headers)
{
	return new Promise(function(resolve, reject){
		console.log(userObject.rno);
		var rno = userObject.rno;
		var fname = userObject.fname;
		var lname = userObject.lname;
		
		con.connect(function(err) {
		if(err){
			//return console.log(err);
			reject(err);
		}
		var sql = "INSERT INTO student (rno, fname,lname) VALUES ('"+rno+"', '"+fname+"','"+lname+"')";
			con.query(sql, function (err, result) {
				if(err){
					//return console.log(err);
					reject(err);
				}
				console.log("1 record inserted");
				resolve('Success');
			});
		});
	});	
}
UserDataModel.prototype.listAll = function()
{
	return new Promise(function(resolve, reject){
		console.log("Going to Open file");
		con.connect(function(err) {
			if(err) reject(err);
			con.query("SELECT * FROM student", function (err, result, fields) {
			  if (err) reject(err);
			  console.log(result);
			  resolve('Success');
			});
		});
	});	
}
module.exports.UserDataModel = new UserDataModel();
