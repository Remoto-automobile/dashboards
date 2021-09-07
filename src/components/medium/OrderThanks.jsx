import React from "react";
import Axios from "axios";

import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import { Card, colors, pageDynamics } from "../../globalStyles";
import check from "../../assets/check.jpg";
import { Heading7, Heading6, BodyText, MainBodyText } from "../../typography";
import { OrderContext, orderRoute } from "../../context/Api";
import Loading from "../major/Loading";

const clientData = JSON.parse(localStorage.getItem("client_token"));

function OrderThanks({ flex, title }) {
  const Order = React.useContext(OrderContext);
  const responsive = pageDynamics();

  const [orderCount, setOrderCount] = React.useState({
    pending: 0,
    completed: 0,
    withdrawn: 0,
  });

  React.useEffect(() => {
    if (!Order.state.data || Order.state.error) {
      Order.dispatch({ type: "LOADING" });

      Axios.get(orderRoute, { headers: { token: clientData.token } })
        .then((res) => {
          Order.dispatch({ type: "FETCH_SUCCESS", payload: res.data });
        })
        .then(() => {
          Order.state.data.map((order) => {
            switch (order.status) {
              case 1:
                setOrderCount((count) => ({
                  ...count,
                  pending: count.pending + 1,
                }));
                break;

              case 2:
                setOrderCount((count) => ({
                  ...count,
                  completed: count.completed + 1,
                }));
                break;

              case 3:
                setOrderCount((count) => ({
                  ...count,
                  withdrawn: count.withdrawn + 1,
                }));
                break;

              default:
                break;
            }
          });
        })
        .catch((err) => {
          Order.dispatch({ type: "FETCH_FAILURE", error: err });
        });
    }
  }, []);

  return (
    <div
      style={{
        ...Card.spacing,
        flex: flex || 1,
        borderRadius: 14,
        backgroundColor: Card.bgColor,
        flexDirection: "column",
        minHeight: 280,
      }}
    >
      <div style={Card.title}>
        <Heading6 color={Card.color}>{title || "Current Order"}</Heading6>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          marginTop: 20,
        }}
      >
        {Order.state.loading ? (
          <Loading />
        ) : (
          <React.Fragment>
            {orderCount.ongoing > 0 && (
              <div className={responsive.desktopOnly}>
                <div
                  style={{
                    padding: "auto 30px",
                    marginRight: 40,
                  }}
                >
                  <img
                    style={{ width: 160, height: 120 }}
                    src={check}
                    alt={<CheckCircleIcon />}
                  />
                  {/* <CheckCircleIcon /> </Avatar> */}
                </div>
              </div>
            )}

            {orderCount.ongoing > 0 && (
              <div className={responsive.mobileOnly}>
                <div
                  style={{
                    padding: "auto 30px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    style={{ width: 120, height: 90 }}
                    src={check}
                    alt={<CheckCircleIcon />}
                  />
                  {/* <CheckCircleIcon />
          </Avatar> */}
                </div>
              </div>
            )}

            {orderCount.ongoing > 0 ? (
              <React.Fragment>
                <div className={responsive.desktopOnly}>
                  <div style={{ flex: 1, minWidth: 320 }}>
                    <Heading7>Thank you for your order</Heading7>
                    <BodyText color={colors.bodyText}>
                      We are currently processing your order. You can find
                      updates to your order under Order History
                    </BodyText>
                  </div>
                </div>
                <div className={responsive.mobileOnly}>
                  <div
                    style={{
                      flex: 1,
                      minWidth: 320,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      padding: 20,
                    }}
                  >
                    <Heading7 other={{ margin: 10 }}>
                      Thank you for your order
                    </Heading7>
                    <BodyText color={colors.bodyText}>
                      We are currently processing your order. You can find
                      updates to your order under Order History
                    </BodyText>
                  </div>
                </div>
              </React.Fragment>
            ) : (
              <MainBodyText>No Ongoing Orders</MainBodyText>
            )}
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default OrderThanks;
