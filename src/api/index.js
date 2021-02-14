import axios from "axios";

const jwt = localStorage.getItem("token");
const instance = axios.create({
  baseURL: `https://e-libraryapi.herokuapp.com/`,
  // baseURL: `http://localhost:4000`,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + jwt,
  },
});
const upload = axios.create({
  baseURL: `https://e-libraryapi.herokuapp.com/`,
  // baseURL: `http://localhost:4000`,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
export const checkLogin = async function (params) {
  return await instance.post("/auth/login", params);
};
export const getAllBookTypes = async function () {
  return await instance.get("/typebook/getAll");
};
export const getAllAuthor = async function () {
  return await instance.get("/author/getAll");
};
export const getAllPublisher = async function () {
  return await instance.get("/publisher/getAll");
};
export const getMe = async function () {
  return await instance.get("/auth/me");
};
export const uploadAvatar = async function (params) {
  return await upload.post("/upload/images", params);
};
export const urlSignInWithGoogle =
  "https://e-libraryapi.herokuapp.com/auth/google";
export const urlSignInWithFacebook =
  // "http://localhost:4000/auth/facebook";
  "https://e-libraryapi.herokuapp.com/auth/facebook";
