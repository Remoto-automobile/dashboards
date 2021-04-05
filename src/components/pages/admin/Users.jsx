import React from "react";
import TitleBar from "../../pageLayout/TitleBar";
import ProductCard from "../../medium/ProductCard";
import UserTable from "../../major/UserTable";
import { TextField, Input } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

function Users() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TitleBar
        title="Users"
        actionText="Add New Product"
        actionIcon={<AddIcon />}
        ctaSize="big"
      >
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
            style={{ width: 500, marginRight: 50 }}
          />
        </div>
      </TitleBar>
      <ProductCard type="display" title="Users" displayData="213" />

      <div>
        <UserTable />
      </div>
    </div>
  );
}

export default Users;
