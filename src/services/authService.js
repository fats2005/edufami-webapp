// import jwtDecode from "jwt-decode";
import http from "./httpService";

const tokenKey = "token";
const userKey = "user";

function setToken(token) {
  localStorage.setItem(tokenKey, JSON.stringify(token));
  http.setToken(token.id);
}

function getToken() {
  return JSON.parse(localStorage.getItem(tokenKey));
}

function setCurrentUser(user) {
  localStorage.setItem(userKey, JSON.stringify(user));
}

http.setToken(getToken());

async function login(username, password) {
  const { data } = await http.post("/AppUsers/login", {
    username,
    password,
  });
  setToken(data);
}

function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

function logout() {
  localStorage.removeItem(tokenKey);
  localStorage.removeItem(userKey);
}

async function register(user) {
  return http.post("/AppUsers", {
    username: user.username,
    password: "abc12345",
    firstName: user.firstName,
    lastName: user.lastName,
    terms: user.terms,
  });
}

async function getUser() {
  const { userId } = getToken();
  const { data: user } = await http.get(`/AppUsers/${userId}`);
  setCurrentUser(user);
}

function getCurrentUser() {
  // TODO - Implements JWT
  /* try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  } */
  return {
    username: "user",
    password: "abc12345",
    firstName: "User",
    lastName: "LastName",
    terms: true,
  };
}

function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  loginWithJwt,
  logout,
  register,
  getCurrentUser,
  setCurrentUser,
  getJwt,
  getToken,
  getUser,
};
