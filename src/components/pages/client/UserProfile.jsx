import React from "react";
import Axios from "axios";
import ProfileCard from "../../medium/ProfileCard";
import CardRow from "../../major/CardRow";
import { BodyText, MainBodyText } from "../../../typography";
import { CarContext, carRoute } from "../../../context/Api";
import Loading from "../../major/Loading";

const clientData = JSON.parse(localStorage.getItem("client_token"));

function UserProfile() {
  const Car = React.useContext(CarContext);

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
            Car Brand:{" "}
            <span style={{ fontWeight: 700 }}>
              {Car.state.data.brand.name}, {Car.state.data.model.name},{" "}
              {Car.state.data.year}
            </span>
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
