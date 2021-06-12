import React from "react";
import Axios from "axios";
import TitleBar from "../../pageLayout/TitleBar";
import AddIcon from "@material-ui/icons/Add";
import ProductCard from "../../medium/ProductCard";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Premium from "../../../assets/premium.svg";
import Mini from "../../../assets/mini.svg";
import Access from "../../../assets/access.svg";

import Loading from "../../major/Loading";
import { capitalize } from "../../../globalStyles";

import { planRoute, PlanContext } from "../../../context/Api";

const images = { premium: Premium, mini: Mini, access: Access };
let bg = [
  "rgba(0, 178, 169, 0.1)",
  "rgba(255, 102, 52, 0.1)",
  "rgba(39, 174, 96, 0.1)",
];

const paint = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "inherit"
  },
}));

function Dashboard() {
  const Plan = React.useContext(PlanContext);
  const painting = paint();

  // Fetch Data From Api
  React.useEffect(() => {
    Axios.get(planRoute)
      .then((data) =>
        Plan.dispatch({ type: "FETCH_SUCCESS", payload: data.data })
      )
      .catch((err) => Plan.dispatch({ type: "FETCH_FAILURE", error: err }));
  }, []);

  return Plan.state.loading ? (
    <Loading />
  ) : (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TitleBar
        title="Dashboard"
        actionText="Add New Product"
        actionIcon={<AddIcon />}
      />
      {/* <h3> {Plan.state.data[0].title} </h3> */}
      {console.log(Plan.state.data)}
      <div style={{ display: "flex", flexWrap: "wrap", marginBottom: 50 }}>
        {Plan.state.data.map(
          (planData) => (
            // images.map((image) => (
            <Link to={`plans/${planData.title}`} className={painting.link}>
              <ProductCard
                type="display"
                title={capitalize(planData.title) + " Plan"}
                displayData={planData.total}
                imgSrc={images.premium}
                bg={
                  planData.title == "premium"
                    ? bg[0]
                    : planData.title == "mini"
                    ? bg[1]
                    : planData.title == "access"
                    ? bg[2]
                    : bg[0]
                }
              />
            </Link>
          )
          // ))
        )}
        {/* <Link to="plans/premium" className={painting.link}>
          <ProductCard
            type="display"
            title="Premium Plan"
            displayData={Plan.state.data[2].total}
            imgSrc={Premium}
            bg="rgba(0, 178, 169, 0.1)"
          />
        </Link>
        <Link to="plans/mini" className={painting.link}>
          <ProductCard
            type="display"
            title="Mini-Plan"
            displayData={Plan.state.data[1].total}
            imgSrc={Mini}
            bg="rgba(255, 102, 52, 0.1)"
          />
        </Link>
        <Link to="plans/access" className={painting.link}>
          <ProductCard
            type="display"
            title="Access Plan"
            displayData={Plan.state.data[0].total}
            imgSrc={Access}
            bg="rgba(39, 174, 96, 0.1)"
          />
        </Link> */}
      </div>
    </div>
  );
}

export default Dashboard;
