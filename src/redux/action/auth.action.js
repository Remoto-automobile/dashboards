import axios from "axios";
import Config from "../../config";

export const authAdmin = (userData) => (dispatch) => {
  const url = Config.API_URL + Config.adminLogin;
  dispatch({ type: "ADMIN_AUTHENTICATING_START" });
  axios
    .post(url, userData)
    .then((response) => {
      localStorage.setItem("admin_token", JSON.stringify(response.data));
      dispatch({
        type: "ADMIN_AUTHENTICATING_FINISHED",
        payload: response.data,
      });
    })
    .catch((err) => {
      const errData = err.response?.data?.message || err.message;
      dispatch({ type: "ADMIN_AUTHENTICATING_ERROR", payload: errData });
    });
};

export const authClient = (userData) => (dispatch) => {
  const url = Config.API_URL + Config.clientLogin;
  dispatch({ type: "CLIENT_AUTHENTICATING_START" });
  axios
    .post(url, userData)
    .then((response) => {
      localStorage.setItem("client_token", JSON.stringify(response.data));
      dispatch({
        type: "CLIENT_AUTHENTICATING_FINISHED",
        payload: response.data,
      });
    })
    .catch((err) => {
      const errData = err.response?.data?.message || err.message;
      dispatch({ type: "CLIENT_AUTHENTICATING_ERROR", payload: errData });
    });
};
