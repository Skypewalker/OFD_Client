var http = require("http");
var url = require("url");
var config = require("./config");

function start(route, handle){
	function onRequest(request, response){
		var postData = "";
		var pathname = url.parse(request.url).pathname;
		// console.log("Request for " + pathname + " received.");
		request.setEncoding("utf8");
		
		request.addListener("data", function(postDataChunk){
			postData += postDataChunk;
		});
		
		request.addListener("end", function(){
			route(handle, pathname, response, postData);
		});
	}
	
	http.createServer(onRequest).listen(config.getConfig().port);
	console.log("Server is listening on port " + config.getConfig().port + ".");
}

exports.start = start;