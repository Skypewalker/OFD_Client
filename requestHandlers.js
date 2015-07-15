var mysql = require("mysql");
var config = require("./config");

var connection = mysql.createConnection(config.getConfig().db);

connection.connect();

function root(response, postData){
	// console.log("Request handler 'root' was called.");
	try {
		var data = JSON.parse(postData);
		if (data.event_id === undefined){
			// console.log(postData);
			response.writeHead(500, {"Content-Type":"text/plain"});
			response.write("500 Invalid JSON received");
			response.end();
			return;			
		}
	} catch(er){
		console.log('not json');
		response.writeHead(500, {"Content-Type":"text/plain"});
		response.write("500 Invalid JSON received");
		response.end();
		return;
	}
	var sql = "INSERT INTO message (message, event_id) VALUES (?, ?)";
	connection.query(sql, [postData, data.event_id], function(error, results, fields){
		
	});
	
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write('OK');
	response.end();	
}

function defaultHandler(response, postData){
	console.log("Request handler 'defaultHandler' was called.");
	response.writeHead(404, {"Content-Type": "text/plain"});
	response.write("404 Not found");
	response.end();	
}

exports.root = root;
exports.defaultHandler = defaultHandler;