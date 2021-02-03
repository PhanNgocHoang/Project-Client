const axios = require("axios");

const instance = axios.create({
  baseURL: `https://e-libraryapi.herokuapp.com/`,
  // baseURL: `http://localhost:4000`,
  headers: {
    "Content-Type": "application/json",
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
module.exports.urlSignInWithGoogle =
  "https://e-libraryapi.herokuapp.com/auth/google";
module.exports.urlSignInWithFacebook =
  "https://e-libraryapi.herokuapp.com/auth/facebook";
