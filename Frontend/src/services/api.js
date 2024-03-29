// ../../services/api.js

import axios from "axios";

// const url = "https://wrogn-backend.vercel.app";
const url = "http://localhost:5000";

export const AddProduct = async (productData) => {
  console.log("Api Called: Adding Product, Data =", productData);
  return await axios.post(`${url}/`, productData);
};

export const getProduct = async () => {
  console.log("Api called to view Product");
  return await axios.get(`${url}/`);
};

export const updateProduct = async (productId, updatedProductData) => {
  console.log(
    "updateProduct Api called, Product ID =",
    productId + " and Product Data : ",
    updatedProductData
  );
  return await axios.put(`${url}/${productId}`, updatedProductData); // Use PUT for updating
};

export const deleteProduct = async (productId) => {
  console.log("Api called to Delete Product with Product ID = ", productId);
  return await axios.delete(`${url}/${productId}`);
};

export const fetchProductData = async (productId) => {
  console.log(
    "fetch Product Data Api called in Update.js , Product id : ",
    productId
  );
  return await axios.get(`${url}/${productId}`);
};

// For registration
export const addUser = async (UserData) => {
  console.log("Api called to Register data into db");
  return await axios.post(`${url}/User/Register/`, UserData);
};


// For login
export const AuthUser = async (userData) => {
  console.log("Api Called to Authenticate user data from db", userData);
  return await axios.post(`${url}/User/Login`, userData);
}

export const addGoogleUser = async (googleObj) =>{
  console.log("Add google user : ",googleObj);
  axios.post(`${url}/google/Signup`,googleObj);
}