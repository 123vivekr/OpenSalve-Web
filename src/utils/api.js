var axios = require('axios');
var cookies = require('cookies');

// return API version
function apiVer() {
    axios.get("http://localhost:8000/api/")
        .then(res => {
            console.log(res.data);
            return res.data;
        })
}

// login via API
function login(username, pass) {
    // const Http = new XMLHttpRequest();
    // const url='http://localhost:8000/api/accounts/login';
    // Http.open("GET", url);
    // Http.setRequestHeader("Content-Type", "application/json");
    // Http.send(JSON.stringify({
    //     username: username,
    //     password: pass
    // }));
    // Http.onreadystatechange=(e)=>{
    //     console.log(Http.responseText)
    // }
    axios.get("http://localhost:8000/api/accounts/login", {
        username: username,
        password: pass
    }).then(res => {
        console.log(res);
    }).catch(error => {
        console.log(error);
    })
}

// register via API
function register(username, pass, email, name) {
    console.log("logging in");
    axios.post("http://localhost:8000/api/accounts/register", {
        username: username,
        password: pass,
        email: email,
        name: name
    }).then(res => {
        console.log("posted");
        console.log(res)
    }).catch(error => {
        console.log(error);
    })
}

module.exports.apiVer = apiVer;
module.exports.register = register;
module.exports.login = login;
