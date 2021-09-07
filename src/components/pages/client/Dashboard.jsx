import React, { useContext } from "react";
import Axios from "axios";
import CardRow from "../../major/CardRow";
import ProfileCard from "../../medium/ProfileCard";
import OrderCard from "../../medium/OrderCard";
import OrderTable from "../../medium/OrderTable";
import { BodyText, MainBodyText } from "../../../typography";
import { colors } from "../../../globalStyles";
import { CarContext, carRoute } from "../../../context/Api";
import Loading from "../../major/Loading";
import { Link, useRouteMatch } from "react-router-dom";
import Button from "@material-ui/core/Button";

function Dashboard() {
  const Car = useContext(CarContext);
  const clientData = JSON.parse(localStorage.getItem("client_token"));
  console.log(clientData.token);
  const { path } = useRouteMatch();

  React.useEffect(() => {
    Car.dispatch({ type: "LOADING" });
    console.log(clientData.token);
    Axios.get(carRoute + "/" + clientData.id, {
      headers: { token: clientData.token },
    })
      .then((res) => {
        console.log(res.data);
        Car.dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        Car.dispatch({ type: "FETCH_FAILURE", error: err });
        // localStorage.removeItem("client_token");
        // window.location.href = "/client/login";
      });
  }, []);

  return Car.state.loading ? (
    <Loading />
  ) : (
    // return (
    <React.Fragment>
      <CardRow>
        <ProfileCard
          action="View Profile"
          flex={2}
          picSrc="https://picsum.photos/120/120"
          title="Profile"
          actionText="View Profile"
        >
          <MainBodyText bold>
            {clientData.company_name}
            {/* Remoto Official */}
          </MainBodyText>
          <BodyText other={{ margin: 5 }}>
            Phone:{" "}
            <span style={{ fontWeight: 700 }}>{clientData.contact_number}</span>
          </BodyText>
          <BodyText other={{ margin: 5 }}>
            Car Brand(s):{" "}
            {Car.state.data.map(
              (car, i) =>
                i < 3 && (
                  <span style={{ fontWeight: 700 }}>
                    {car.brand.name}, {car.model.name}, {car.year} {"; "}
                  </span>
                )
            )}
            {Car.state.data.length > 3 && (
              <Button
                variant="contained"
                color="primary"
                style={{ marginLeft: 20 }}
              >
                <Link
                  to={`${path}car_info`}
                  style={{
                    textDecoration: "none",
                    color: colors.mainBg,
                    fontWeight: "bold",
                  }}
                >
                  View all {Car.state.data.length}
                </Link>
              </Button>
            )}
          </BodyText>
        </ProfileCard>
        <OrderCard flex={1} />
      </CardRow>
      <div style={{ margin: 10 }}>
        <OrderTable />
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
