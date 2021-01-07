import http from "./httpServices";
import { apiUrl } from "../config.json";
import jwtDecode from "jwt-decode";

export function getJwt() {
  return localStorage.getItem("token");
}

export async function login(email, password) {
  const { data } = await http.post(`${apiUrl}/auth`, { email, password });
  // console.log(data);
  localStorage.setItem("token", data);
}

export async function register(email, password, name) {
  // eslint-disable-next-line no-unused-vars
  const { data } = await http.post(`${apiUrl}/users`, {
    email,
    password,
    name,
  });
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function logout() {
  localStorage.removeItem("token");
  window.location = "/";
}

export async function removeUser(userId) {
  return await http.delete(`${apiUrl}/users/delete`, { data: { _id: userId } });
}

export async function getAllUser() {
  return await http.get(`${apiUrl}/users/all`);
}
export async function getMyUser() {
  return await http.get(`${apiUrl}/users/me`);
}

const userService = {
  getJwt,
  login,
  register,
  getCurrentUser,
  logout,
  removeUser,
  getAllUser,
  getMyUser,
};
export default userService;
