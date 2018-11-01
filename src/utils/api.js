var axios = require("axios");

// const baseURL = "http://bzflag.subinsb.com:8000/api/";
const baseURL = 'http://localhost:8000/api';

axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";

// Get cookie by name
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
export function apiVer() {
  axios.get(baseURL + "/").then(res => {
    console.log(res.data);
    return res.data;
  });
}

// login via API
export async function login(username, password) {
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
export async function register(username, pass, email, name) {
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
    throw new Error(err.response.data.username[0]);
  }
}

export async function getAllReqs() {
  try {
    let res = await axios.get(baseURL + "/help");
    return res;
  } catch (err) {
    throw new Error(err);
  }
}

// get user details from API
export async function userDetails(username) {
  var headers = {
    accept: "application/json",
    "X-CSRFToken": csrftoken
  };
  try {
    let res = await axios.get(baseURL + "/accounts/u/" + username, {
      headers: headers
    });
    return res;
  } catch (err) {
    throw new Error(err);
  }
}

// add camps
export async function addCamp(
  id,
  lat,
  lng,
  location,
  capacity,
  number_of_people,
  admin
) {
  var data = {
    id: id,
    lat: lat,
    lng: lng,
    location: location,
    capacity: capacity,
    number_of_people: number_of_people,
    admin: admin
  };
  try {
    let res = await axios.post(baseURL + "/camps/add", data);
    return res;
  } catch (err) {
    throw new Error(err);
  }
}

// get camp
export async function getCamp(id) {
  try {
    let res = await axios.get(baseURL + "/camps/c/" + id);
    return res;
  } catch (err) {
    throw new Error(err);
  }
}
