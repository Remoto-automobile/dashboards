import React from "react";
import Axios from "axios";
import { UiContext } from "../../../App";
import { SystemContext, systemRoute, ItemContext } from "../../../context/Api";
import TitleBar from "../../pageLayout/TitleBar";
import AddIcon from "@material-ui/icons/Add";
import ProductCard from "../../medium/ProductCard";
import { useRouteMatch, useHistory, useLocation } from "react-router-dom";

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
  let history = useHistory();
  let { path, url } = useRouteMatch();
  const Ui = React.useContext(UiContext);
  const Product = React.useContext(SystemContext);
  const Item = React.useContext(ItemContext);

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
    Axios.get(systemRoute)
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
        {Product.state.data.map((product) => {
          i++;
          let pdata = productData[i];
          return (
            <ProductCard
              title={product.name + " System"}
              imgSrc={pdata.image}
              bg={pdata.color}
              routeLink={pdata.link}
              systemId={product.id}
              // onButtonClick={() => {
              //   history.push(`/admin/products/${pdata.link}`, {
              //     name: product.name + " System",
              //     system: product.id,
              //     data: [
              //       {
              //         component: "Compressor",
              //         price: 31000,
              //         probability: 0.25,
              //       },
              //       { component: "Condenser", price: 21000, probability: 0.2 },
              //       {
              //         component: "Expansion Valve",
              //         price: 10000,
              //         probability: 0.02,
              //       },
              //       {
              //         component: "Reciever Drier",
              //         price: 4000,
              //         probability: 0.1,
              //       },
              //       { component: "Evaporator", price: 16000, probability: 0.2 },
              //       {
              //         component: "Blower Motor",
              //         price: 6000,
              //         probability: 0.03,
              //       },
              //       { component: "Accumulator", price: 7000, probability: 0.1 },
              //       { component: "Refrigerant", price: 7000, probability: 0.1 },
              //     ],
              //   });
              //   // Ui.uiDispatch("showUpdateProductDialog");
              // }}
            />
          );
        })}
        {/* <ProductCard
          title="Air Condition System"
          imgSrc={acImage}
          bg="rgba(255, 102, 52, 0.1)"
          onButtonClick={() => {
            history.push("/admin/products/ac_system", {
              name: "Air Conditioning System",
              data: [
                { component: "Compressor", price: 31000, probability: 0.25 },
                { component: "Condenser", price: 21000, probability: 0.2 },
                {
                  component: "Expansion Valve",
                  price: 10000,
                  probability: 0.02,
                },
                { component: "Reciever Drier", price: 4000, probability: 0.1 },
                { component: "Evaporator", price: 16000, probability: 0.2 },
                { component: "Blower Motor", price: 6000, probability: 0.03 },
                { component: "Accumulator", price: 7000, probability: 0.1 },
                { component: "Refrigerant", price: 7000, probability: 0.1 },
              ],
            });
            // Ui.uiDispatch("showUpdateProductDialog");
          }}
        />
        <ProductCard
          title="Exhaust System"
          imgSrc={exhaustImage}
          bg="rgba(39, 174, 96, 0.1)"
          onButtonClick={() => {
            // Ui.uiDispatch("showUpdateProductDialog");
            history.push("/admin/products/exhaust", {
              name: "Exhaust System",
              data: [
                {
                  component: "Exhaust Manifold",
                  price: 44000,
                  probability: 0.25,
                },
                { component: "Oxygen Sensor", price: 15000, probability: 0.2 },
                {
                  component: "Catalytic Converter",
                  price: 50000,
                  probability: 0.02,
                },
                { component: "Hangers", price: 4000, probability: 0.1 },
                { component: "Exhaust Joint", price: 3000, probability: 0.2 },
                { component: "Muffler", price: 13000, probability: 0.03 },
              ],
            });
          }}
        />
        <ProductCard
          title="Fuel System"
          imgSrc={fuelImage}
          bg="rgba(45, 156, 219, 0.1)"
          onButtonClick={() => {
            // Ui.uiDispatch("showUpdateProductDialog");
            history.push("/admin/products/fuel", {
              name: "Fuel System",
              data: [
                {
                  component: "Exhaust Manifold",
                  price: 44000,
                  probability: 0.25,
                },
                { component: "Oxygen Sensor", price: 15000, probability: 0.2 },
                {
                  component: "Catalytic Converter",
                  price: 50000,
                  probability: 0.02,
                },
                { component: "Hangers", price: 4000, probability: 0.1 },
                { component: "Exhaust Joint", price: 3000, probability: 0.2 },
                { component: "Muffler", price: 13000, probability: 0.03 },
              ],
            });
          }}
        />
        <ProductCard
          title="Ignition"
          imgSrc={ignitionImage}
          bg="rgba(0, 178, 169, 0.1)"
          onButtonClick={() => {
            history.push("/admin/products/ignition", {
              name: "Ignition System",
              data: [
                {
                  component: "Exhaust Manifold",
                  price: 44000,
                  probability: 0.25,
                },
                { component: "Oxygen Sensor", price: 15000, probability: 0.2 },
                {
                  component: "Catalytic Converter",
                  price: 50000,
                  probability: 0.02,
                },
                { component: "Hangers", price: 4000, probability: 0.1 },
                { component: "Exhaust Joint", price: 3000, probability: 0.2 },
                { component: "Muffler", price: 13000, probability: 0.03 },
              ],
            });
          }}
        />
        <ProductCard
          title="Steering"
          onButtonClick={() => {
            // Ui.uiDispatch("showUpdateProductDialog");
            history.push("/admin/products/steering", {
              name: "Steering",
              data: [
                {
                  component: "Exhaust Manifold",
                  price: 44000,
                  probability: 0.25,
                },
                { component: "Oxygen Sensor", price: 15000, probability: 0.2 },
                {
                  component: "Catalytic Converter",
                  price: 50000,
                  probability: 0.02,
                },
                { component: "Hangers", price: 4000, probability: 0.1 },
                { component: "Exhaust Joint", price: 3000, probability: 0.2 },
                { component: "Muffler", price: 13000, probability: 0.03 },
              ],
            });
          }}
          imgSrc={steeringImage}
          bg="rgba(255, 102, 52, 0.1)"
        />
        <ProductCard
          title="Suspension"
          imgSrc={suspensionImage}
          bg="rgba(39, 174, 96, 0.1)"
          onButtonClick={() => {
            history.push("/admin/products/suspension", {
              name: "Suspension System",
              data: [
                {
                  component: "Exhaust Manifold",
                  price: 44000,
                  probability: 0.25,
                },
                { component: "Oxygen Sensor", price: 15000, probability: 0.2 },
                {
                  component: "Catalytic Converter",
                  price: 50000,
                  probability: 0.02,
                },
                { component: "Hangers", price: 4000, probability: 0.1 },
                { component: "Exhaust Joint", price: 3000, probability: 0.2 },
                { component: "Muffler", price: 13000, probability: 0.03 },
              ],
            });
          }}
        />
        <ProductCard
          title="Brake System"
          imgSrc={brakeImage}
          bg="rgba(45, 156, 219, 0.1)"
          onButtonClick={() => {
            history.push("/admin/products/brake", {
              name: "Brake System",
              data: [
                {
                  component: "Exhaust Manifold",
                  price: 44000,
                  probability: 0.25,
                },
                { component: "Oxygen Sensor", price: 15000, probability: 0.2 },
                {
                  component: "Catalytic Converter",
                  price: 50000,
                  probability: 0.02,
                },
                { component: "Hangers", price: 4000, probability: 0.1 },
                { component: "Exhaust Joint", price: 3000, probability: 0.2 },
                { component: "Muffler", price: 13000, probability: 0.03 },
              ],
            });
          }}
        />
        <ProductCard
          title="Cooling System"
          imgSrc={coolingImage}
          bg="rgba(0, 178, 169, 0.1)"
          onButtonClick={() => {
            history.push("/admin/products/cooling", {
              name: "Cooling System",
              data: [
                {
                  component: "Exhaust Manifold",
                  price: 44000,
                  probability: 0.25,
                },
                { component: "Oxygen Sensor", price: 15000, probability: 0.2 },
                {
                  component: "Catalytic Converter",
                  price: 50000,
                  probability: 0.02,
                },
                { component: "Hangers", price: 4000, probability: 0.1 },
                { component: "Exhaust Joint", price: 3000, probability: 0.2 },
                { component: "Muffler", price: 13000, probability: 0.03 },
              ],
            });
          }}
        />
        <ProductCard
          title="Electrical System"
          imgSrc={electricalImage}
          bg="rgba(255, 102, 52, 0.1)"
          onButtonClick={() => {
            history.push("/admin/products/electrical", {
              name: "Electrical System",
              data: [
                {
                  component: "Exhaust Manifold",
                  price: 44000,
                  probability: 0.25,
                },
                { component: "Oxygen Sensor", price: 15000, probability: 0.2 },
                {
                  component: "Catalytic Converter",
                  price: 50000,
                  probability: 0.02,
                },
                { component: "Hangers", price: 4000, probability: 0.1 },
                { component: "Exhaust Joint", price: 3000, probability: 0.2 },
                { component: "Muffler", price: 13000, probability: 0.03 },
              ],
            });
          }}
        />
        <ProductCard
          title="Engine"
          imgSrc={engineImage}
          bg="rgba(39, 174, 96, 0.1)"
          onButtonClick={() => {
            history.push("/admin/products/engine", {
              name: "Engine",
              data: [
                {
                  component: "Exhaust Manifold",
                  price: 44000,
                  probability: 0.25,
                },
                { component: "Oxygen Sensor", price: 15000, probability: 0.2 },
                {
                  component: "Catalytic Converter",
                  price: 50000,
                  probability: 0.02,
                },
                { component: "Hangers", price: 4000, probability: 0.1 },
                { component: "Exhaust Joint", price: 3000, probability: 0.2 },
                { component: "Muffler", price: 13000, probability: 0.03 },
              ],
            });
          }}
        />
        <ProductCard
          title="Transmission"
          imgSrc={transmissionImage}
          bg="rgba(255, 102, 52, 0.1)"
          onButtonClick={() => {
            history.push("/admin/products/transmission", {
              name: "Transmission",
              data: [
                {
                  component: "Transmission Shaft",
                  price: 44000,
                  probability: 0.25,
                },
                { component: "Clutch Pads", price: 15000, probability: 0.2 },
                {
                  component: "Catalytic Converter",
                  price: 50000,
                  probability: 0.02,
                },
                { component: "Hangers", price: 4000, probability: 0.1 },
                { component: "Exhaust Joint", price: 3000, probability: 0.2 },
                { component: "Muffler", price: 13000, probability: 0.03 },
              ],
            });
          }}
        /> */}
      </div>
    </div>
  );
}

export default Products;
