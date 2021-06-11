import React from "react";
import TitleBar from "../../pageLayout/TitleBar";
import ProductCard from "../../medium/ProductCard";
import UserTable from "../../major/UserTable";
import { TextField, Input } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { pageDynamics } from "../../../globalStyles";
import { UserContext, userRoute } from "../../../context/Api";
import axios from "axios";

function Users() {
  const User = React.useContext(UserContext);
  const responsive = pageDynamics();

  React.useEffect(() => {
    axios
      .get(userRoute)
      .then((res) => {
        User.dispatch({ type: "FETCH_SUCCESS", payload: res.data });
        console.log(User.state.payload);
      })
      .catch((err) => {
        User.dispatch({ type: "FETCH_FAILURE", error: err });
      });
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TitleBar
        title="Users"
        actionText="Add New Product"
        actionIcon={<AddIcon />}
        ctaSize="big"
      >
        <div className={responsive.desktopOnly}>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "right",
              flexWrap: "wrap",
            }}
          >
            <TextField
              placeholder="Search Users"
              style={{ width: 300, marginRight: 50 }}
            />
          </div>
        </div>
      </TitleBar>
      <ProductCard type="display" title="Users" displayData="213" />

      <div style={{ marginBottom: 30 }}>
        <UserTable />
      </div>
    </div>
  );
}

export default Users;
