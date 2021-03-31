import React from "react";
import TitleBar from "../../pageLayout/TitleBar";
import ProductCard from "../../medium/ProductCard";

function PremiumPlan() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TitleBar title="Premium Plan" actionText="Update Data" />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <ProductCard
          type="display"
          title="Total Sum of Component"
          displayData="N373,980.00"
        />
        <ProductCard
          type="display"
          title="Workmanship @12K Per Month"
          displayData="N144,000.00"
        />
        <ProductCard
          type="display"
          title="Commission @10%"
          displayData="N37,398.00"
        />
        <ProductCard
          type="display"
          title="VAT @7.5% of Commission"
          displayData="N10,800.00"
        />
        <ProductCard
          type="display"
          title="WHT Tax @7.5% of Commission"
          displayData="N7,200.00"
        />
      </div>
    </div>
  );
}

export default PremiumPlan;
