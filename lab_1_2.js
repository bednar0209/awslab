var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');

var task = function(request, callback){
	var ec2 = new AWS.EC2();
	
	ec2.describeInstances({}, function(err, data){
	
	if(err) { callback(err); return; }
	
	callback(null, data);
	});
}

