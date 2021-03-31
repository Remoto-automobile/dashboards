import React from "react";
import TitleBar from "../../pageLayout/TitleBar";
import AddIcon from "@material-ui/icons/Add";
import ProductCard from "../../medium/ProductCard";

function Dashboard() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TitleBar
        title="Dashboard"
        actionText="Add New Product"
        actionIcon={<AddIcon />}
      />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <ProductCard
          type="display"
          title="Premium Plan"
          displayData="358,000"
        />
        <ProductCard type="display" title="Mini-Plan" displayData="250,000" />
        <ProductCard type="display" title="Access Plan" displayData="150,000" />
      </div>
    </div>
  );
}

export default Dashboard;
