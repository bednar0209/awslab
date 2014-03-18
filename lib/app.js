var lab1_1 = require("./lab1_1").lab
var example_1 = require("./example_1").lab;
var lab_2 = require("./lab_1_2").lab;

var PORT = 8080;


var urlMap = [
	{path: "/", action:__dirname + "/index.html"},	 
	{path: "/digest", action: lab1_1},	
	{path: "/example_1", action: example_1},
	{path: "/instance", action: lab_2}, 
	];

var service = require("./service").http(urlMap);

service(PORT);

