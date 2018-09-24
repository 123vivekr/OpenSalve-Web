var axios = require('axios');

const APIbase = "http://localhost:8000/api";

axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";

// Get cookie by name
// https://stackoverflow.com/questions/10730362/get-cookie-by-name
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

const csrftoken = getCookie("csrftoken");

// return API version
function apiVer() {
    axios.get(APIbase + "/")
        .then(res => {
            console.log(res.data);
            return res.data;
        })
}

// login via API
function login(username, pass) {
    axios.get(APIbase + "/accounts/login")
        .then(res => {
            console.log(res);
            return res;
        })
}

// register via API
function register(username, pass, email, name) {
    var data = {
        "username": username,
        "password": pass,
        "email": email,
        "name": name
    }
    console.log(data);
    axios.post(APIbase + "/accounts/register", data)
        .then(res => {
            console.log(res);
        })
        .catch(error => {
            console.log(error);
        })
}

// get user details from API
function userDetails(username) {
	var headers = {
		'accept': 'application/json',
		'X-CSRFToken': csrftoken,
	};
    axios.get(APIbase + "/accounts/u/" + username, {headers: headers})
        .then(res => {
            console.log(res);
        })
}

module.exports.apiVer = apiVer;
module.exports.register = register;
module.exports.login = login;
module.exports.userDetails = userDetails;
