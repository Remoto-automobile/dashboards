import React from "react";
import TitleBar from "../../pageLayout/TitleBar";
import AddIcon from "@material-ui/icons/Add";
import ProductCard from "../../medium/ProductCard";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/Styles";
import Premium from "../../../assets/premium.svg";
import Mini from "../../../assets/mini.svg";
import Access from "../../../assets/access.svg";

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
            displayData="573,378"
            imgSrc={Premium}
            bg="rgba(0, 178, 169, 0.1)"
          />
        </Link>
        <Link to="plans/mini" className={painting.link}>
          <ProductCard
            type="display"
            title="Mini-Plan"
            displayData="496,763"
            imgSrc={Mini}
            bg="rgba(255, 102, 52, 0.1)"
          />
        </Link>
        <Link to="plans/access" className={painting.link}>
          <ProductCard
            type="display"
            title="Access Plan"
            displayData="445,404"
            imgSrc={Access}
            bg="rgba(39, 174, 96, 0.1)"
          />
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
