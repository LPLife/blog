var DatabaseOperation = require('./connection');
let username = localStorage.getItem("username");
let password = localStorage.getItem("password");
// console.log(username);
// console.log(password);
//用户登录验证
function loginApi() {
    let userinfo = ''
    DatabaseOperation.select('user', {
        "username": username,
        "password": password
    }, function(result) {
        console.log("select查询结果");
        userinfo = result;
        console.log(result);
    });
    //用户登录验证
    app.get('/api/user/login', function(req, res) {
        res.status(200),
            res.json(userinfo)
    });
}

module.exports = loginApi;