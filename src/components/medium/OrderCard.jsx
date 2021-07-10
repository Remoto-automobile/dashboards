import React from "react";
import Axios from "axios";
import { Typography } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { Card, fonts } from "../../globalStyles";
import { Heading6, BodyText } from "../../typography";
import { OrderContext, orderRoute } from "../../context/Api";
import Loading from "../major/Loading";

function OrderCard({ children, flex }) {
  const [count, setCount] = React.useState({
    ongoing: 0,
    completed: 0,
    withdrawn: 0,
  });
  const clientToken = JSON.parse(localStorage.getItem("client_token"));
  const Order = React.useContext(OrderContext);

  React.useEffect(() => {
    Order.dispatch({ type: "LOADING" });
    Axios.get(orderRoute, { headers: { token: clientToken.token } })
      .then((res) => {
        Order.dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .then(() => {
        Order.state.data.forEach((order) => {
          switch (order.status) {
            case 1:
              setCount((count) => ({ ...count, ongoing: count.ongoing + 1 }));
              break;

            case 2:
              setCount((count) => ({
                ...count,
                completed: count.completed + 1,
              }));
              break;

            case 3:
              setCount((count) => ({
                ...count,
                withdrawn: count.withdrawn + 1,
              }));

            default:
              break;
          }
        });
      })
      .catch((err) => {
        Order.dispatch({ type: "FETCH_FAILURE", payload: err });
      });
  }, []);

  return Order.state.loading ? (
    <Loading />
  ) : (
    <div
      style={{
        ...Card.spacing,
        flex: flex,
        borderRadius: 14,
        backgroundColor: Card.bgColor,
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          width: "100%",
          paddingLeft: 20,
        }}
      >
        <Heading6 color={Card.color}>Orders</Heading6>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={Card.orderBullet}>
          <FiberManualRecordIcon
            style={{
              color: "#00b2a9",
              marginRight: 30,
              marginTop: 5,
              marginBottom: 5,
            }}
          />
          {/* <BodyText bold>100 Completed</BodyText> */}
          <BodyText bold>{count.completed} Completed</BodyText>
        </div>
        <div style={Card.orderBullet}>
          <FiberManualRecordIcon
            style={{
              color: "#eaab00",
              marginRight: 30,
              marginTop: 5,
              marginBottom: 5,
            }}
          />
          <BodyText bold>{count.ongoing} Ongoing</BodyText>
        </div>
        <div style={Card.orderBullet}>
          <FiberManualRecordIcon
            style={{
              color: "#eb5757",
              marginRight: 30,
              marginTop: 5,
              marginBottom: 5,
            }}
          />
          <BodyText bold>{count.withdrawn} Withdrawn</BodyText>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
