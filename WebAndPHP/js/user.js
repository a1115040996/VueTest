var express = require('express');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'person'
});
connection.connect();
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

app.get('/user/findUserMsg', function(req, res) {
	var sql = 'SELECT * FROM PERSON';
	connection.query(sql,function(err,result){
		if (err) {
			resu.send(err);
		}
		res.send(JSON.stringify(result));
	});
});

app.get('/user/deleteUser', function(req, res) {
	var sql = 'DELETE FROM PERSON WHERE NAME='+'"'+req.query.name+'"';
	connection.query(sql,function(err,result){
		if (err) {
			res.send(err);
		}
		res.send(JSON.stringify({"code":0}));
	});
});

app.listen(8888);
console.log('Listening on port 8888...');