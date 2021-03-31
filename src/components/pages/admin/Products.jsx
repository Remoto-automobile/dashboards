import React from "react";
import TitleBar from "../../pageLayout/TitleBar";
import AddIcon from "@material-ui/icons/Add";
import ProductCard from "../../medium/ProductCard";

function Products() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TitleBar
        title="Products"
        actionText="Add New Product"
        actionIcon={<AddIcon />}
      />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <ProductCard title="Exhaust System" />
        <ProductCard title="Fuel System" />
        <ProductCard title="Ignition" />
        <ProductCard title="Steering" />
        <ProductCard title="Suspension" />
        <ProductCard title="Brake System" />
        <ProductCard title="Cooling System" />
        <ProductCard title="Electrical System" />
        <ProductCard title="Engine" />
        <ProductCard title="Transmission" />
      </div>
    </div>
  );
}

export default Products;
