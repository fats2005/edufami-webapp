// import jwtDecode from "jwt-decode";
import http from "./httpService";

const tokenKey = "token";
const userKey = "user";

http.setToken(getToken());

export async function login(username, password) {
  const { data } = await http.post("/userAccounts/login", {
    username,
    password
  });
  setToken(data);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
  localStorage.removeItem(userKey);
}

export async function getUser() {
  console.log("getUser");
  const { userId } = getToken();
  const { data: user } = await http.get("/UserAccounts/" + userId);
  localStorage.setItem(userKey, JSON.stringify(user));
}

export function getCurrentUser() {
  // TODO - Implements JWT
  /* try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  } */
  return JSON.parse(localStorage.getItem(userKey));
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

function setToken(token) {
  localStorage.setItem(tokenKey, JSON.stringify(token));
  http.setToken(token.id);
}

export function getToken() {
  return JSON.parse(localStorage.getItem(tokenKey));
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
  getToken,
  getUser
};
