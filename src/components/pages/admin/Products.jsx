import React from "react";
import { UiContext } from "../../../App";
import TitleBar from "../../pageLayout/TitleBar";
import AddIcon from "@material-ui/icons/Add";
import ProductCard from "../../medium/ProductCard";

function Products() {
  const Ui = React.useContext(UiContext);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TitleBar
        title="Products"
        actionText="Add New Product"
        actionIcon={<AddIcon />}
      />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <ProductCard
          title="Exhaust System"
          onButtonClick={() => {
            Ui.uiDispatch("showUpdateProductDialog");
          }}
        />
        <ProductCard
          title="Fuel System"
          onButtonClick={() => {
            Ui.uiDispatch("showUpdateProductDialog");
          }}
        />
        <ProductCard
          title="Ignition"
          onButtonClick={() => {
            Ui.uiDispatch("showUpdateProductDialog");
          }}
        />
        <ProductCard
          title="Steering"
          onButtonClick={() => {
            Ui.uiDispatch("showUpdateProductDialog");
          }}
        />
        <ProductCard
          title="Suspension"
          onButtonClick={() => {
            Ui.uiDispatch("showUpdateProductDialog");
          }}
        />
        <ProductCard
          title="Brake System"
          onButtonClick={() => {
            Ui.uiDispatch("showUpdateProductDialog");
          }}
        />
        <ProductCard
          title="Cooling System"
          onButtonClick={() => {
            Ui.uiDispatch("showUpdateProductDialog");
          }}
        />
        <ProductCard
          title="Electrical System"
          onButtonClick={() => {
            Ui.uiDispatch("showUpdateProductDialog");
          }}
        />
        <ProductCard
          title="Engine"
          onButtonClick={() => {
            Ui.uiDispatch("showUpdateProductDialog");
          }}
        />
        <ProductCard
          title="Transmission"
          onButtonClick={() => {
            Ui.uiDispatch("showUpdateProductDialog");
          }}
        />
      </div>
    </div>
  );
}

export default Products;
