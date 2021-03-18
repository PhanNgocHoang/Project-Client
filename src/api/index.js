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
export const loginWithGoogle = async function (params) {
  return await instance.post("/auth/google", params);
};
export const loginWithFacebook = async function (params) {
  return await instance.post("/auth/facebook", params);
};
export const register = async function (params) {
  return await instance.post("/auth/register", params);
};
export const changePassword = async function (params) {
  return await instance.put("/auth/changePassword", params);
};
export const forgotPasswordApi = async function (params) {
  return await instance.put("/auth/forgetPassword", params);
};
export const getAllBookTypes = async function (params) {
  return await instance.get(`/typebook?${params}`);
};
export const getAllAuthor = async function (params) {
  return await instance.get(`/author?${params}`);
};
export const getAllPublisher = async function (params) {
  return await instance.get(`/publisher?${params}`);
};
export const getMe = async function () {
  return await instance.get("/auth/me");
};
export const uploadAvatar = async function (params) {
  return await upload.post("/upload/images", params);
};
export const getBook = async function (params) {
  return await instance.get(`/books?${params}`);
};
export const getBookDetails = async function (params) {
  return await instance.get(`/books/${params}`);
};
export const createReview = async function (params) {
  return await instance.post("/review/create", params);
};
export const getReview = async function (params, pagination) {
  return await instance.get(`/review/${params}?${pagination}`);
};
export const FavoriteBook = async function (params) {
  return await instance.post("/books/favorite", params);
};
export const myFavorites = async function (params, pagination) {
  return await instance.get(`/books/myBookFavorite/${params}?${pagination}`);
};
export const myBooks = async function (params, pagination) {
  return await instance.get(`/books/myBook/${params}?${pagination}`);
};
export const myBooksStatus = async function (params, pagination) {
  return await instance.get(`/books/myBook/status/${params}?${pagination}`);
};
export const myFavoritesLocal = async function (params, pagination) {
  return await instance.get(`/books/myBookFavoriteLocal?${pagination}`, params);
};
export const createOrder = async function (params) {
  return await instance.post("/order/create", params);
};
export const addCoins = async function (params) {
  return await instance.post("/payment/updateWallet", params);
};
export const getBookToRead = async function (userId, orderId) {
  return await instance.get(`/books/read/${userId}/${orderId}`);
};
export const updateMe = async function (params) {
  return await instance.put("/auth/updateMe", params);
};
export const PaymentHistory = async function (params) {
  return await instance.get(`/payment/history?${params}`);
};
