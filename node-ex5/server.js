function start(req, res, next) 
{  res.writeHead(200, {'Content-Type': 'text/html'}); 
   res.end("I'm a Web Server. " +
   "<br><a href='ws_client.htm' >Example 1</a>" +
   "<br><a href='ws_example1.htm' >Example 2</a>" +
   "<br><a href='ws_mediaExample.htm' >Media Example</a>") ;
} 
  
var connect = require("connect");
var WebSocketServer = require("ws").Server;
var http = require("http");
 
var app = connect();
var server = http.createServer(app);
var wsServer = new WebSocketServer({ server: server });

var serveStatic = require('serve-static');
// Place all public files inside "/public" subfolder
app.use(serveStatic("./public"));
app.use("/", start ); 
wsServer.on("connection", function(ws)
 {  ws.on("message", function(message, flags)
    { ws.send(message, flags); });
  });
server.listen(80);