import React from "react";
import ProfileCard from "../../medium/ProfileCard";
import CardRow from "../../major/CardRow";
import { BodyText, MainBodyText } from "../../../typography";

function UserProfile() {
  return (
    <CardRow>
      <ProfileCard
        actionText="Edit Profile"
        action="editProfile"
        flex={1}
        picSrc="https://picsum.photos/120/120"
        title="Profile"
      >
        <MainBodyText bold>Remoto Official</MainBodyText>
        <BodyText other={{ margin: 5 }}>
          Phone: <span style={{ fontWeight: 700 }}>+2348000000000</span>
        </BodyText>
        <BodyText other={{ margin: 5 }}>
          Car Brand:{" "}
          <span style={{ fontWeight: 700 }}>Toyota, Corolla, 2018</span>
        </BodyText>
        <BodyText other={{ margin: 5 }}>
          Location: <span style={{ fontWeight: 700 }}>Lagos</span>
        </BodyText>
      </ProfileCard>
    </CardRow>
  );
}

export default UserProfile;
