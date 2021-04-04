import React from "react";
import { UiContext } from "../../../App";
import TitleBar from "../../pageLayout/TitleBar";
import AddIcon from "@material-ui/icons/Add";
import ProductCard from "../../medium/ProductCard";

import acImage from "../../../assets/air-condition.svg";
import exhaustImage from "../../../assets/exhaust.svg";
import fuelImage from "../../../assets/fuel.svg";
import ignitionImage from "../../../assets/ignition.svg";
import steeringImage from "../../../assets/steering.svg";
import suspensionImage from "../../../assets/suspension.svg";
import brakeImage from "../../../assets/brake.svg";
import coolingImage from "../../../assets/cooling.svg";
import electricalImage from "../../../assets/electrical.svg";
import engineImage from "../../../assets/engine.svg";
import transmissionImage from "../../../assets/transmission.svg";

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
          title="Air Condition System"
          imgSrc={acImage}
          bg="rgba(255, 102, 52, 0.1)"
          onButtonClick={() => {
            Ui.uiDispatch("showUpdateProductDialog");
          }}
        />
        <ProductCard
          title="Exhaust System"
          imgSrc={exhaustImage}
          bg="rgba(39, 174, 96, 0.1)"
          onButtonClick={() => {
            Ui.uiDispatch("showUpdateProductDialog");
          }}
        />
        <ProductCard
          title="Fuel System"
          imgSrc={fuelImage}
          bg="rgba(45, 156, 219, 0.1)"
          onButtonClick={() => {
            Ui.uiDispatch("showUpdateProductDialog");
          }}
        />
        <ProductCard
          title="Ignition"
          imgSrc={ignitionImage}
          bg="rgba(0, 178, 169, 0.1)"
          onButtonClick={() => {
            Ui.uiDispatch("showUpdateProductDialog");
          }}
        />
        <ProductCard
          title="Steering"
          onButtonClick={() => {
            Ui.uiDispatch("showUpdateProductDialog");
          }}
          imgSrc={steeringImage}
          bg="rgba(255, 102, 52, 0.1)"
        />
        <ProductCard
          title="Suspension"
          imgSrc={suspensionImage}
          bg="rgba(39, 174, 96, 0.1)"
          onButtonClick={() => {
            Ui.uiDispatch("showUpdateProductDialog");
          }}
        />
        <ProductCard
          title="Brake System"
          imgSrc={brakeImage}
          bg="rgba(45, 156, 219, 0.1)"
          onButtonClick={() => {
            Ui.uiDispatch("showUpdateProductDialog");
          }}
        />
        <ProductCard
          title="Cooling System"
          imgSrc={coolingImage}
          bg="rgba(0, 178, 169, 0.1)"
          onButtonClick={() => {
            Ui.uiDispatch("showUpdateProductDialog");
          }}
        />
        <ProductCard
          title="Electrical System"
          imgSrc={electricalImage}
          bg="rgba(255, 102, 52, 0.1)"
          onButtonClick={() => {
            Ui.uiDispatch("showUpdateProductDialog");
          }}
        />
        <ProductCard
          title="Engine"
          imgSrc={engineImage}
          bg="rgba(39, 174, 96, 0.1)"
          onButtonClick={() => {
            Ui.uiDispatch("showUpdateProductDialog");
          }}
        />
        <ProductCard
          title="Transmission"
          imgSrc={transmissionImage}
          bg="rgba(255, 102, 52, 0.1)"
          onButtonClick={() => {
            Ui.uiDispatch("showUpdateProductDialog");
          }}
        />
      </div>
    </div>
  );
}

export default Products;
