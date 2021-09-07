import React from "react";
import Axios from "axios";
import { UiContext } from "../../../App";
import {
  SystemContext,
  adminSystemRoute,
  ItemContext,
} from "../../../context/Api";
import TitleBar from "../../pageLayout/TitleBar";
import AddIcon from "@material-ui/icons/Add";
import ProductCard from "../../medium/ProductCard";
import { useRouteMatch } from "react-router-dom";

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
import Loading from "../../major/Loading";

function Products() {
  const token = JSON.parse(localStorage.getItem("admin_token")).auth_token;
  // let history = useHistory();
  let { url } = useRouteMatch();
  // const Ui = React.useContext(UiContext);
  const Product = React.useContext(SystemContext);
  // const Ite\m = React.useContext(ItemContext);

  let productData = [
    { color: "rgba(255, 102, 52, 0.1)", image: acImage, link: "ac_system" },
    { color: "rgba(0, 178, 169, 0.1)", image: coolingImage, link: "cooling" },
    {
      color: "rgba(255, 102, 52, 0.1)",
      image: electricalImage,
      link: "electrical",
    },
    { color: "rgba(39, 174, 96, 0.1)", image: exhaustImage, link: "exhaust" },
    { color: "rgba(39, 174, 96, 0.1)", image: engineImage, link: "engine" },
    { color: "rgba(45, 156, 219, 0.1)", image: fuelImage, link: "fuel" },
    {
      color: "rgba(255, 102, 52, 0.1)",
      image: steeringImage,
      link: "steering",
    },
    {
      color: "rgba(255, 102, 52, 0.1)",
      image: transmissionImage,
      link: "transmission",
    },
    { color: "rgba(0, 178, 169, 0.1)", image: ignitionImage, link: "ignition" },
    {
      color: "rgba(39, 174, 96, 0.1)",
      image: suspensionImage,
      link: "suspension",
    },
    { color: "rgba(45, 156, 219, 0.1)", image: brakeImage, link: "brake" },
  ];
  React.useEffect(() => {
    Axios.get(adminSystemRoute, {
      headers: {
        token: token,
      },
    })
      .then((data) =>
        Product.dispatch({
          type: "FETCH_SUCCESS",
          payload: data.data,
          loading: false,
        })
      )
      .catch((err) => {
        Product.dispatch({ type: "FETCH_FAILURE", err: err, loading: false });
      });
  }, []);
  let i = -1;

  return Product.state.loading ? (
    <Loading />
  ) : (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TitleBar
        title="Products"
        actionText="Add New Product"
        actionIcon={<AddIcon />}
        linkLocation={`${url}/add`}
      />
      <div style={{ display: "flex", flexWrap: "wrap", marginBottom: 50 }}>
        {Product.state.data.map((product, index) => {
          i++;
          let pdata = productData[i];
          return (
            <ProductCard
              title={product.name + " System"}
              imgSrc={pdata.image}
              bg={pdata.color}
              routeLink={pdata.link}
              systemId={product.id}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
