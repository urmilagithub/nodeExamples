var http = require("http");
var path = require("path");
//var pal = require("./test/palindrom");
var users = require("./users/user_operation");


http.createServer(function(request, response){
	//send HTTP header
	response.writeHead(200,{'content-type':'text/plain'});
	
	//send response body as "Hello world"
	response.end("Hello world\n");	
		
}).listen(8081, function(){
	console.log("Server is running on port 8081");
});

