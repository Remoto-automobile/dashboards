import React from "react";
import Axios from "axios";
import ProfileCard from "../../medium/ProfileCard";
import CardRow from "../../major/CardRow";
import { BodyText, MainBodyText } from "../../../typography";
import { CarContext, carRoute } from "../../../context/Api";
import Loading from "../../major/Loading";
import Button from "@material-ui/core/Button";
import { Link, useRouteMatch } from "react-router-dom";
import { colors } from "../../../globalStyles";

const clientData = JSON.parse(localStorage.getItem("client_token"));

function UserProfile() {
  const Car = React.useContext(CarContext);
  const { path } = useRouteMatch();

  React.useEffect(() => {
    Car.dispatch({ type: "LOADING" });
    Axios.get(carRoute + "/" + clientData.id, {
      headers: { token: clientData.token },
    })
      .then((res) => Car.dispatch({ type: "FETCH_SUCCESS", payload: res.data }))
      .catch((err) => Car.dispatch({ type: "FETCH_FAILURE", error: err }));
  }, []);
  return (
    <CardRow>
      {Car.state.loading ? (
        <Loading />
      ) : (
        <ProfileCard
          actionText="Edit Profile"
          action="editProfile"
          flex={1}
          picSrc="https://picsum.photos/120/120"
          title="Profile"
        >
          <MainBodyText bold>{clientData.company_name}</MainBodyText>
          <BodyText other={{ margin: 5 }}>
            Phone:{" "}
            <span style={{ fontWeight: 700 }}>{clientData.contact_number}</span>
          </BodyText>
          <BodyText other={{ margin: 5 }}>
            Car Brand(s):{" "}
            {Car.state.data.map(
              (car, i) =>
                i < 5 && (
                  <span style={{ fontWeight: 700 }}>
                    {car.brand.name}, {car.model.name}, {car.year}
                    {";  "}
                  </span>
                )
            )}
            {Car.state.data.length > 5 && (
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
          <BodyText other={{ margin: 5 }}>
            Location:{" "}
            <span style={{ fontWeight: 700 }}>{clientData.address}</span>
          </BodyText>
        </ProfileCard>
      )}
    </CardRow>
  );
}

export default UserProfile;
