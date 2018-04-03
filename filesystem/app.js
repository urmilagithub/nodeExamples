var http = require("http");
var main = require("main");
http.createServer(function(resquest, response){
	//send HTTP header
	response.writeHead(200,{'content-type':'text/plain'});
	
	//send response body as "Hello world"
	response.end("Hello world\n");
}).listen(8081, function(){
	console.log("Server is running on port 8081");
});