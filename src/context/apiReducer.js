import React from "react";

export const initialState = {
  loading: true,
  error: "",
  data: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, loading: false, error: "", data: action.payload };
    case "FETCH_FAILURE":
      return { ...state, loading: false, error: action.error, data: "" };
    case "POST_SUCCESS":
      return { ...state, loading: false, error: "", data: action.payload };
    case "POST_FAILURE":
      return { ...state, loading: false, error: action.error, data: "" };
    default:
      return { ...state };
  }
};

const ApiContext = React.createContext();

export const brandRoute = "https://remotoglobal.com/api/brand";
export const carRoute = "https://remotoglobal.com/api/car";
export const carModelRoute = "https://remotoglobal.com/api/carModel";
export const planRoute = "https://remotoglobal.com/api/plan";
export const orderRoute = "https://remotoglobal.com/api/order";
export const productRoute = "https://remotoglobal.com/api/product";
export const productCategoryRoute = "https://remotoglobal.com/api/productCategory";
export const subscriptionRoute = "https://remotoglobal.com/api/subscription";
export const userRoute = "https://remotoglobal.com/api/user";

export default ApiContext;
