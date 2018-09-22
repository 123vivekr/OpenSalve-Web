var axios = require('axios');

axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";

// return API version
function apiVer() {
    axios.get("/api")
        .then(res => {
            console.log(res.data);
            return res.data;
        })
}

// login via API
function login(username, pass) {
    axios.get("/api/accounts/login")
        .then(res => {
            console.log(res);
            return res;
        })
}

// register via API
function register(username, pass, email, name) {
    var data = {
        username: username,
        password: pass,
        email: email,
        name: name
    }
    axios.post("http://localhost:8000/api/accounts/register", data)
        .then(res => {
            console.log(res);
        })
        .catch(error => {
            console.log(error);
        })
}

module.exports.apiVer = apiVer;
module.exports.register = register;
module.exports.login = login;
