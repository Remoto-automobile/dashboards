import React from "react";
import TitleBar from "../../pageLayout/TitleBar";
import AddIcon from "@material-ui/icons/Add";
import ProductCard from "../../medium/ProductCard";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/Styles";

const paint = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

function Dashboard() {
  const painting = paint();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TitleBar
        title="Dashboard"
        actionText="Add New Product"
        actionIcon={<AddIcon />}
      />
      <div style={{ display: "flex", flexWrap: "wrap", marginBottom: 50 }}>
        <Link to="plans/premium" className={painting.link}>
          <ProductCard
            type="display"
            title="Premium Plan"
            displayData="358,000"
          />
        </Link>
        <Link to="plans/mini" className={painting.link}>
          <ProductCard type="display" title="Mini-Plan" displayData="250,000" />
        </Link>
        <Link to="plans/access" className={painting.link}>
          <ProductCard
            type="display"
            title="Access Plan"
            displayData="150,000"
          />
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
