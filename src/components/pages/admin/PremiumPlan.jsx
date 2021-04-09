import React from "react";
import { UiContext } from "../../../App";
import TitleBar from "../../pageLayout/TitleBar";
import ProductCard from "../../medium/ProductCard";

import Premium from "../../../assets/premium.svg";
import Mini from "../../../assets/mini.svg";
import Access from "../../../assets/access.svg";
import Blue from "../../../assets/blue.svg";
import Yellow from "../../../assets/yellow.svg";

function PremiumPlan() {
  const Ui = React.useContext(UiContext);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TitleBar
        title="Premium Plan"
        actionText="Update Data"
        onActionClick={() => {
          Ui.uiDispatch("showUpdateDataDialog");
        }}
      />
      <div style={{ display: "flex", flexWrap: "wrap", marginBottom: 50 }}>
        <ProductCard
          type="display"
          title="Total Sum of Component"
          displayData="N373,980.00"
          imgSrc={Premium}
          bg="rgba(0, 178, 169, 0.1)"
        />
        <ProductCard
          type="display"
          title="Workmanship @12K Per Month"
          displayData="N144,000.00"
          imgSrc={Mini}
          bg="rgba(255, 102, 52, 0.1)"
        />
        <ProductCard
          type="display"
          title="Commission @10%"
          displayData="N37,398.00"
          imgSrc={Access}
          bg="rgba(39, 174, 96, 0.1)"
        />
        <ProductCard
          type="display"
          title="VAT @7.5% of Commission"
          displayData="N10,800.00"
          imgSrc={Blue}
          bg="rgba(45, 156, 219, 0.1)"
        />
        <ProductCard
          type="display"
          title="WHT Tax @7.5% of Commission"
          displayData="N7,200.00"
          imgSrc={Yellow}
          bg="rgba(234, 171, 0, 0.1)"
        />
      </div>
    </div>
  );
}

export default PremiumPlan;
