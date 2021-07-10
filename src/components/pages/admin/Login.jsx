import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authAdmin, authClient } from "../../../redux/action/auth.action";
import Loading from "../../major/Loading";
export default function (props) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authenticating = useSelector(
    (state) => state.AdminLogin.authenticating
  );
  const [isAuth, setIsAuth] = useState(false);
  const auth_error = useSelector((state) => state.AdminLogin.auth_error);
  const adminToken = localStorage.getItem("admin_token");
  const clientToken = localStorage.getItem("client_token");
  useEffect(() => {
    if (adminToken != null) {
      window.location.href = "/admin";
    }
    if (clientToken != null) {
      window.location.href = "/client";
    }
  }, [1]);
  const startAuth = async () => {
    if (props.type == "client") {
      await dispatch({ type: "CLIENT_AUTHENTICATING_UPDATE", payload: null });
      if (email === "" || password == "") {
        dispatch({
          type: "CLIENT_AUTHENTICATING_UPDATE",
          payload: "Please provide valid username and password",
        });
      } else {
        dispatch(authClient({ email, password }));
      }
    } else {
      await dispatch({ type: "ADMIN_AUTHENTICATING_UPDATE", payload: null });
      if (email === "" || password == "") {
        dispatch({
          type: "ADMIN_AUTHENTICATING_UPDATE",
          payload: "Please provide valid username and password",
        });
      } else {
        dispatch(authAdmin({ email, password }));
      }
    }
  };
  useEffect(() => {
    if (isAuth && !authenticating && auth_error === null) {
      window.location.href =
        props.type === "client" ? "/client" : "/admin/dashboard";
    }
    setIsAuth(authenticating);
  }, [authenticating]);

  if (adminToken !== null || clientToken !== null) return null;
  return (
    <div className="login-wrapper">
      <div className="flex-container">
        <div className="form-container">
          {isAuth ? (
            <Loading />
          ) : (
            <>
              <div className="form-header">
                <img src="https://remotoglobal.com/images/REMOTO-logo.png" />
              </div>
              <div className="form-body">
                <form>
                  {auth_error !== null && (
                    <div className="error_alert text-center">
                      <b>{auth_error}</b>
                    </div>
                  )}
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      placeholder="username"
                      defaultValue={email}
                      onChange={(evt) => {
                        setEmail(evt.target.value);
                        dispatch({
                          type: "ADMIN_AUTHENTICATING_UPDATE",
                          payload: null,
                        });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="username">Password</label>
                    <input
                      type="password"
                      placeholder="password"
                      defaultValue={password}
                      onChange={(evt) => {
                        setPassword(evt.target.value);
                        dispatch({
                          type: "ADMIN_AUTHENTICATING_UPDATE",
                          payload: null,
                        });
                      }}
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    {authenticating ? (
                      <div className="text-center">
                        <i>Please wait...</i>
                      </div>
                    ) : (
                      <button type="button" onClick={startAuth}>
                        Login
                      </button>
                    )}
                  </div>
                  <div className="form-group text-center">
                    <a
                      href="#"
                      className="text-center"
                      style={{ display: "block" }}
                    >
                      Forgot password?
                    </a>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="flex-container with-bg"></div>
    </div>
  );
}
