import React, { useContext } from "react";
import Axios from "axios";
import CardRow from "../../major/CardRow";
import ProfileCard from "../../medium/ProfileCard";
import OrderCard from "../../medium/OrderCard";
import OrderTable from "../../medium/OrderTable";
import { BodyText, MainBodyText } from "../../../typography";
import {
  UserContext,
  CarContext,
  profileRoute,
  carRoute,
} from "../../../context/Api";
import Loading from "../../major/Loading";

function Dashboard() {
  const User = useContext(UserContext);
  const Car = useContext(CarContext);
  const clientToken = JSON.parse(localStorage.getItem("client_token"));
  console.log(clientToken.token);

  React.useEffect(() => {
    Car.dispatch({ type: "LOADING" });
    Axios.get(carRoute + "/" + clientToken.id, {
      headers: { token: clientToken.token },
    })
      .then((res) => {
        console.log(res.data);
        Car.dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        console.log(clientToken);
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
            {clientToken.company_name}
            {/* Remoto Official */}
          </MainBodyText>
          <BodyText other={{ margin: 5 }}>
            Phone:{" "}
            <span style={{ fontWeight: 700 }}>
              {clientToken.contact_number}
            </span>
          </BodyText>
          <BodyText other={{ margin: 5 }}>
            Car Brand:{" "}
            <span style={{ fontWeight: 700 }}>
              {Car.state.data.brand.name}, {Car.state.data.model.name},{" "}
              {Car.state.data.year}
            </span>
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
