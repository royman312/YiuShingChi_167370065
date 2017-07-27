var http = require("http");
var fs = require("fs");
var qs = require("querystring");
var mongodb = require("mongodb");
var MongoClient = require("mongodb").MongoClient;
require("events").EventEmitter.prototype._maxListeners = 100;
var mongodbServer = new mongodb.Server("localhost", 27017, {
	auto_reconnect: true,
	poolSize: 10
});
var db = new mongodb.Db("dataB", mongodbServer);
var usersssssss = "";
var isTriedLogin = false,
	isLoginSuccessful = false;
var canRegis = true;
var server = http.createServer(function(request, response) {
	if (request.method == "POST") {
		console.log("post call");
		// Switch msg into a JSON object
		var formData = "",
			msg = "",
			obj = "";
		return request.on("data", function(data) {
			formData += data;
		}).on('end', function(chunk) {
			var user;
			user = qs.parse(formData);
			msg = JSON.stringify(user);
			console.log("305cde=" + msg);
			obj = JSON.parse(msg);
			console.log("aa=" + obj['act']);
			
			if (request.url == "/todo.html") {	
		
				if (obj['act'] == "signup") {
					//if (obj.signup != null) {
					console.log("SIGNUP");
					// Send obj data to dataB
					db.open(function() {
						db.collection("user", function(err, collection) {
							collection.insert({
								username: obj.ac,
								password: obj.pw,
								favorite: "00000"
							}, function(err, data) {
								if (data) {
									console.log("Successfully Insert");
									//response.end(200, {'success': "apple"});
									response.end('Registration Success');
								} else {
									console.log("Failed to Insert");
								}
							});
						});
					});
				} else if (obj['act'] == "login") {
					//if (obj.signup != null) {
					//	response.end('{"success" : "Updated Successfully", "status" : 200}');
					console.log("LOGIN");
					// Send obj data to dataB
					//	db.open(function() {
					//		db.collection("user", function(err, collection) {
					//collection.find({
					//		username: obj.ac,
					//			password: obj.pw
					//		}, function(err, data) {
					//	if (data) {
					console.log("Successfullyfound");
					var username = obj.ac;
					var password = obj.pw;
					console.log("input login=" + obj.ac);
					console.log("input pass=" + obj.pw);
					MongoClient.connect("mongodb://localhost:27017/dataB", function(err, db) {
						db.collection("user", function(err, collection) {
							collection.find().toArray(function(err, items) {
								if (err) throw err;
								// Check whether there is data in the dataB
								console.log(items.length);
								if (items != "") {
									// Check whether the user account exists
									for (var i = 0; i < items.length; i++) {
										console.log("user=" + items[i].username);
										console.log("pass=" + items[i].password);
										if (username == items[i].username && password == items[i].password) {
											usersssssss = items[i].username;
											var fav = items[i].favorite;
											console.log(fav);
											var logoutput = "Login successful,"+ fav;
											console.log(logoutput);
											console.log("Login successful");
											isLoginSuccessful = true;
											var data = "todaygood";
											console.log(data);
										}
									}
									/*	  fs.readFile('./json.html', function(error, content) {
                    response.writeHead(200, { 'Content-Type': 'text/html' });
                    response.end(content, 'utf-8');
											console.log("end here");
                });*/
									if (isLoginSuccessful == false) {
										console.log("Fail to login");
										response.end('LOGIN FAIL');
									} else {
										console.log("Login successful");
										response.end(logoutput);
									}
								}
							});
						});
					});
					//	} else {
					//	console.log("Failed to Insert");
					//	}
					//	});
					//});
					//	});
				}
				
				if (obj['act'] == "update") {
					//if (obj.signup != null) {
					var username = obj.username;
					console.log("username : " + obj.username);
					console.log("updateFAV : " + obj.favorite);
					// Send obj data to dataB
					db.open(function() {
						var myquery = {
							"username": user.username
						};
						var newvalues = {
							$set: {
								"favorite": obj.favorite
							}
						};
						db.collection("user").updateOne(myquery, newvalues, function(err, res) {
							if (err) throw err;
							console.log("1 record updated");
							db.close();
						});
					});
				}
				if (obj['act'] == "getfav") {
					//if (obj.signup != null) {
					console.log("GetFav");
					var username2 = obj.ac;
					console.log("input login=" + obj.ac);
					MongoClient.connect("mongodb://localhost:27017/dataB", function(err, db) {
						db.collection("user", function(err, collection) {
							collection.find().toArray(function(err, items) {
								if (err) throw err;
								// Check whether there is data in the dataB
								//console.log(items.length);
								if (items !== "") {
									// Check whether the user account exists
									for (var i = 0; i < items.length; i++) {
										console.log("user=" + items[i].username);
										console.log("pass=" + items[i].password);
										if (username2 == items[i].username) {
											//usersssssss= items[i].username;
											var fav = items[i].favorite;
											console.log(fav);
											console.log("find fav");
											isLoginSuccessful = true;
										}
									}
									/*	  fs.readFile('./json.html', function(error, content) {
                    response.writeHead(200, { 'Content-Type': 'text/html' });
                    response.end(content, 'utf-8');
											console.log("end here");
                });*/
									if (isLoginSuccessful == false) {
										console.log("Fail");
										response.end('LOGIN FAIL');
									} else {
										console.log("fav OK");
										//console.log(fav);
										response.end(fav);
									}
								}
							});
						});
					});
				}
				
				
				
			}
			if (request.url == "/contact.html") {
				if (obj['act'] == "signup") {
					//if (obj.signup != null) {
					console.log("SIGNUP");
					// Send obj data to dataB
					db.open(function() {
						db.collection("user", function(err, collection) {
							collection.insert({
								username: obj.ac,
								password: obj.pw,
								favorite: "00000"
							}, function(err, data) {
								if (data) {
									console.log("Successfully Insert");
									//response.end(200, {'success': "apple"});
									response.end('Registration Success');
								} else {
									console.log("Failed to Insert");
								}
							});
						});
					});
				} else if (obj['act'] == "login") {
					//if (obj.signup != null) {
					//	response.end('{"success" : "Updated Successfully", "status" : 200}');
					console.log("LOGIN");
					// Send obj data to dataB
					//	db.open(function() {
					//		db.collection("user", function(err, collection) {
					//collection.find({
					//		username: obj.ac,
					//			password: obj.pw
					//		}, function(err, data) {
					//	if (data) {
					console.log("Successfullyfound");
					var username = obj.ac;
					var password = obj.pw;
					console.log("input login=" + obj.ac);
					console.log("input pass=" + obj.pw);
					MongoClient.connect("mongodb://localhost:27017/dataB", function(err, db) {
						db.collection("user", function(err, collection) {
							collection.find().toArray(function(err, items) {
								if (err) throw err;
								// Check whether there is data in the dataB
								console.log(items.length);
								if (items != "") {
									// Check whether the user account exists
									for (var i = 0; i < items.length; i++) {
										console.log("user=" + items[i].username);
										console.log("pass=" + items[i].password);
										if (username == items[i].username && password == items[i].password) {
											usersssssss = items[i].username;
											var fav = items[i].favorite;
											console.log(fav);
											console.log("Login successful");
											isLoginSuccessful = true;
											var data = "todaygood";
											console.log(data);
										}
									}
									/*	  fs.readFile('./json.html', function(error, content) {
                    response.writeHead(200, { 'Content-Type': 'text/html' });
                    response.end(content, 'utf-8');
											console.log("end here");
                });*/
									if (isLoginSuccessful == false) {
										console.log("Fail to login");
										response.end('LOGIN FAIL');
									} else {
										console.log("Login successful");
										response.end('Login successful');
									}
								}
							});
						});
					});
					//	} else {
					//	console.log("Failed to Insert");
					//	}
					//	});
					//});
					//	});
				}
			}
			if (request.url == "/video.html") {
				if (obj['act'] == "signup") {
					//if (obj.signup != null) {
					console.log("SIGNUP");
					// Send obj data to dataB
					db.open(function() {
						db.collection("user", function(err, collection) {
							collection.insert({
								username: obj.ac,
								password: obj.pw,
								favorite: "00000"
							}, function(err, data) {
								if (data) {
									console.log("Successfully Insert");
									//response.end(200, {'success': "apple"});
									response.end('Registration Success');
								} else {
									console.log("Failed to Insert");
								}
							});
						});
					});
				} else if (obj['act'] == "login") {
					//if (obj.signup != null) {
					//	response.end('{"success" : "Updated Successfully", "status" : 200}');
					console.log("LOGIN");
					// Send obj data to dataB
					//	db.open(function() {
					//		db.collection("user", function(err, collection) {
					//collection.find({
					//		username: obj.ac,
					//			password: obj.pw
					//		}, function(err, data) {
					//	if (data) {
					console.log("Successfullyfound");
					var username = obj.ac;
					var password = obj.pw;
					console.log("input login=" + obj.ac);
					console.log("input pass=" + obj.pw);
					MongoClient.connect("mongodb://localhost:27017/dataB", function(err, db) {
						db.collection("user", function(err, collection) {
							collection.find().toArray(function(err, items) {
								if (err) throw err;
								// Check whether there is data in the dataB
								console.log(items.length);
								if (items != "") {
									// Check whether the user account exists
									for (var i = 0; i < items.length; i++) {
										console.log("user=" + items[i].username);
										console.log("pass=" + items[i].password);
										if (username == items[i].username && password == items[i].password) {
											usersssssss = items[i].username;
											var fav = items[i].favorite;
											console.log(fav);
											console.log("Login successful");
											isLoginSuccessful = true;
											var data = "todaygood";
											console.log(data);
										}
									}
									/*	  fs.readFile('./json.html', function(error, content) {
                    response.writeHead(200, { 'Content-Type': 'text/html' });
                    response.end(content, 'utf-8');
											console.log("end here");
                });*/
									if (isLoginSuccessful == false) {
										console.log("Fail to login");
										response.end('LOGIN FAIL');
									} else {
										console.log("Login successful");
										response.end('Login successful');
									}
								}
							});
						});
					});
					//	} else {
					//	console.log("Failed to Insert");
					//	}
					//	});
					//});
					//	});
				}
			}
			
			if (request.url == "/index.html") {
				fs.readFile('./index.html', function(error, content) {
			console.log("search page");
			response.writeHead(200, {
				'Content-Type': 'text/html'
			});
			response.end(content, 'utf-8');
		});
				console.log("login page comes");
				if (obj['act'] == "signup") {
					//if (obj.signup != null) {
					console.log("SIGNUP");
					// Send obj data to dataB
					db.open(function() {
						db.collection("user", function(err, collection) {
							collection.insert({
								username: obj.ac,
								password: obj.pw,
								favorite: "00000"
							}, function(err, data) {
								if (data) {
									console.log("Successfully Insert");
									//response.end(200, {'success': "apple"});
									response.end('Registration Success');
								} else {
									console.log("Failed to Insert");
								}
							});
						});
					});
				} else if (obj['act'] == "login") {
					//if (obj.signup != null) {
					//	response.end('{"success" : "Updated Successfully", "status" : 200}');
					console.log("LOGIN");
					// Send obj data to dataB
					//	db.open(function() {
					//		db.collection("user", function(err, collection) {
					//collection.find({
					//		username: obj.ac,
					//			password: obj.pw
					//		}, function(err, data) {
					//	if (data) {
					console.log("Successfullyfound");
					var username = obj.ac;
					var password = obj.pw;
					console.log("input login=" + obj.ac);
					console.log("input pass=" + obj.pw);
					MongoClient.connect("mongodb://localhost:27017/dataB", function(err, db) {
						db.collection("user", function(err, collection) {
							collection.find().toArray(function(err, items) {
								if (err) throw err;
								// Check whether there is data in the dataB
								console.log(items.length);
								if (items != "") {
									// Check whether the user account exists
									for (var i = 0; i < items.length; i++) {
										console.log("user=" + items[i].username);
										console.log("pass=" + items[i].password);
										if (username == items[i].username && password == items[i].password) {
											usersssssss = items[i].username;
											var fav = items[i].favorite;
											console.log(fav);
											console.log("Login successful");
											isLoginSuccessful = true;
											var data = "todaygood";
											console.log(data);
										}
									}
									/*	  fs.readFile('./json.html', function(error, content) {
                    response.writeHead(200, { 'Content-Type': 'text/html' });
                    response.end(content, 'utf-8');
											console.log("end here");
                });*/
									if (isLoginSuccessful == false) {
										console.log("Fail to login");
										response.end('LOGIN FAIL');
									} else {
										console.log("Login successful");
										response.end('Login successful');
									}
								}
							});
						});
					});
					//	} else {
					//	console.log("Failed to Insert");
					//	}
					//	});
					//});
					//	});
				}
			} //if request.url = login.html
		})
	} else {
		// Get
		fs.readFile("./" + request.url, function(err, data) {
			var dotoffset = request.url.lastIndexOf(".");
			var mimetype = dotoffset == -1 ? "text/plain" : {
				".html": "text/html",
				".ico": "photo/x-icon",
				".jpg": "photo/jpeg",
				".png": "photo/png",
				".gif": "photo/gif",
				".css": "text/css",
				".js": "text/javascript"
			}[request.url.substr(dotoffset)];
			if (!err) {
				response.setHeader("Content-Type", mimetype);
				response.end(data);
				console.log(request.url, mimetype);
			} else {
				response.writeHead(302, {
					"Location": "./index.html"
				});
				response.end();
			}
		});
	}
});
server.listen(5000);
console.log("Server running at http://127.0.0.1:5000/");