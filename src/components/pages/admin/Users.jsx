import React from "react";
import TitleBar from "../../pageLayout/TitleBar";
import ProductCard from "../../medium/ProductCard";
import UserTable from "../../major/UserTable";
import { TextField, Input } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { pageDynamics } from "../../../globalStyles";
import { UserContext, userRoute } from "../../../context/Api";
import axios from "axios";
import Loading from "../../major/Loading";

function Users() {
  const User = React.useContext(UserContext);
  const responsive = pageDynamics();

  React.useEffect(() => {
    axios
      .get(userRoute, {
        // headers: {
        //   token: "f45165058243964ce7acff87206efb97",
        // },
      })
      .then((res) => {
        User.dispatch({
          type: "FETCH_SUCCESS",
          payload: res.data,
          loading: false,
        });
        console.log(User.state.data);
      })
      .catch((err) => {
        User.dispatch({ type: "FETCH_FAILURE", error: err, loading: false });
      });
  }, []);

  return User.state.loading ? (
    <Loading />
  ) : (
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
      <ProductCard
        type="display"
        title="Users"
        displayData={User.state.data.length}
      />

      <div style={{ marginBottom: 30 }}>
        <UserTable />
      </div>
    </div>
  );
}

export default Users;
