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

app.get('/user/createUser', function(req, res) {
	var user_name = req.query.name;
	var user_age = req.query.age;
	var user_address = req.query.address;
	var sql = "insert into person(name,age,address) value("+"'"+user_name+"',"+user_age+",'"+user_address+"'"+")";
	connection.query(sql,function(err,result){
		if (err) {
			res.send(err);
		}else{
			connection.query("SELECT id From Person WHERE NAME ="+"'"+user_name+"'",function(err,result){
				if (err) {
					res.send(JSON.stringify({"code":0,"msg":'插入数据成功!',userMsg:{
						name:user_name,
						age:user_age,
						address:user_address,
					}}));
				}else{
					res.send(JSON.stringify({"code":0,"msg":'插入数据成功!',userMsg:{
						name:user_name,
						age:user_age,
						address:user_address,
						id:result[0]["id"],
					}}));
				}
			});
			
			
		}
	});
});
app.listen(8888);
console.log('Listening on port 8888...');