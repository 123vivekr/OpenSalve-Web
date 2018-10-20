var axios = require("axios");

const baseURL = "http://localhost:8000/api";

axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";

// Get cookie by name
// https://stackoverflow.com/questions/10730362/get-cookie-by-name
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2)
    return parts
      .pop()
      .split(";")
      .shift();
}

const csrftoken = getCookie("csrftoken");

// return API version
function apiVer() {
  axios.get(baseURL + "/").then(res => {
    console.log(res.data);
    return res.data;
  });
}

// login via API
async function login(username, password) {
  try {
    let res = await axios.post(baseURL + "/accounts/login", {
      username,
      password
    });
    return res;
  } catch (err) {
    throw new Error(err);
  }
}

// register via API
async function register(username, pass, email, name) {
  try {
    var data = {
      username: username,
      password: pass,
      email: email,
      name: name
    };
    let res = await axios.post(baseURL + "/accounts/register", data);
    return res;
  } catch (err) {
    throw new Error(err);
  }
}

// get user details from API
function userDetails(username) {
  var headers = {
    accept: "application/json",
    "X-CSRFToken": csrftoken
  };
  axios
    .get(baseURL + "/accounts/u/" + username, { headers: headers })
    .then(res => {
      console.log(res);
    })
    .catch(error => {
      console.log(error);
    });
}

// add camps
function addCamp(id, lat, lng, location, capacity, number_of_people, admin) {
  var data = {
    id: id,
    lat: lat,
    lng: lng,
    location: location,
    capacity: capacity,
    number_of_people: number_of_people,
    admin: admin
  };
  axios
    .post(baseURL + "/camps/add", data)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
}

// get camp
function getCamp(id) {
  axios
    .get(baseURL + "/camps/c/" + id)
    .then(res => {
      console.log(res);
    })
    .catch(error => {
      console.log(error);
    });
}

module.exports.apiVer = apiVer;
module.exports.register = register;
module.exports.login = login;
module.exports.userDetails = userDetails;
