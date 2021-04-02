import React from "react";
import TitleBar from "../../pageLayout/TitleBar";
import ProductCard from "../../medium/ProductCard";
import UserTable from "../../major/UserTable";
import { InputBase } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

function Users() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TitleBar
        title="Users"
        actionText="Add New Product"
        actionIcon={<AddIcon />}
      >
        <InputBase placeholder="Search" />
      </TitleBar>
      <ProductCard type="display" title="Users" displayData="213" />

      <div>
        <UserTable />
      </div>
    </div>
  );
}

export default Users;
