var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var supervisor = require('supervisor');
//引用bodyParser
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//设置跨域请求
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
var questions = [{
        name: 'xiaoming',
        age: 41
    },
    {
        name: 'lihua',
        age: 99
    }
];
//写个接口
app.get('/api/user', function(req, res) {
    res.status(200),
        res.json(questions)
});
app.post('/api/delete', function(req, res) {
        res.json(req.body);
    })
    //配置服务端口
const port = 8888;
app.listen(port, () => {
    console.log('Express server listening on port ' + port);
});