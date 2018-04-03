
var path = require("path");
var UserDataModel = require('../datamodel/UserDataModel').UserDataModel;
var bodyParser = require('body-parser');
var mysql = require("mysql");

module.exports = function(app) {

	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());

	// app.get('/',function(req,res){
	// res.sendFile(path.join(__dirname+'/index.html'));
	// });

	app.post('/api/add',function(req,res){

		UserDataModel.add_user(req.body, req.headers).then(function(response){
			res.send(response);
		}, function(err){
			res.status(500);
			res.send(err);
		});	
	});

	app.get('/api/getAll', function(req, res){
		UserDataModel.listAll().then(function(response){
			res.send(response);
			//alert(response);
		}, function(err){
			//res.status(500);
			res.send(err);
		});
        //res.send("3);
	});    
}