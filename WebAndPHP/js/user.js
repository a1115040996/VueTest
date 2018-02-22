

var express = require('express');
var app = express();
//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get('', function(req, res) {
	/*var users = [
		{
			"zhangsan":{
				name:'zhangsan',
				age:'18',
				address:'prc',
				id:'101010'
			}
		},
		
		{
			"lisi":{
				name:'lisi',
				age:'22',
				address:'uk',
				id:'181818'
			}
		},
	];*/
	var users = [
			{
				name:'zhan1gsan',
				age:'18',
				address:'prc',
				id:'101010'
			},
			{
				name:'zhan2gsan',
				age:'18',
				address:'prc',
				id:'101010'
			},
			
			{
				name:'zhang2san',
				age:'18',
				address:'prc',
				id:'101010'
			},
			
			{
				name:'zhan5gsan',
				age:'18',
				address:'prc',
				id:'101010'
			},
		{
				name:'lisi',
				age:'22',
				address:'uk',
				id:'181818'
		},
		
		{
				name:'lisi',
				age:'22',
				address:'uk',
				id:'181818'
		},
		
		{
				name:'lisi',
				age:'22',
				address:'uk',
				id:'181818'
		},
	];
    res.send(users);
});
app.listen(8888);
console.log('Listening on port 8888...');