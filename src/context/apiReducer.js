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

export const brandRoute = "http://localhost:8000/api/brand";
export const carRoute = "http://localhost:8000/api/car";
export const carModelRoute = "http://localhost:8000/api/carModel";
export const planRoute = "http://localhost:8000/api/plan";
export const orderRoute = "http://localhost:8000/api/order";
export const productRoute = "http://localhost:8000/api/product";
export const productCategoryRoute = "http://localhost:8000/api/productCategory";
export const subscriptionRoute = "http://localhost:8000/api/subscription";
export const userRoute = "http://localhost:8000/api/user";

export default ApiContext;
