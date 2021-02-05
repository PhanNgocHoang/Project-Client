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
module.exports.checkLogin = async function (params) {
  return await instance.post("/auth/login", params);
};
module.exports.getAllBookTypes = async function () {
  return await instance.get("/typebook/getAll");
};
module.exports.getAllAuthor = async function () {
  return await instance.get("/author/getAll");
};
module.exports.getAllPublisher = async function () {
  return await instance.get("/publisher/getAll");
};
module.exports.getMe = async function () {
  return await instance.get("/auth/me");
};
module.exports.uploadAvatar = async function (params) {
  return await upload.post("/upload/images", params);
};
module.exports.urlSignInWithGoogle =
  "https://e-libraryapi.herokuapp.com/auth/google";
module.exports.urlSignInWithFacebook =
  // "http://localhost:4000/auth/facebook";
  "https://e-libraryapi.herokuapp.com/auth/facebook";
