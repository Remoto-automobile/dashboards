import React from "react";
import { fonts } from "../../../globalStyles";
import ProfileCard from "../../medium/ProfileCard";
import CardRow from "../../major/CardRow";

import { Typography } from "@material-ui/core";

function UserProfile() {
  return (
    <CardRow>
      <ProfileCard
        action="View Profile"
        flex={1}
        picSrc="https://picsum.photos/120/120"
        title="Profile"
      >
        <Typography style={fonts.heading7}>Remoto Official</Typography>
        <Typography style={{ ...fonts.mainBodyText, margin: 5 }}>
          Phone: <span style={{ fontWeight: 700 }}>+2348000000000</span>
        </Typography>
        <Typography style={{ ...fonts.mainBodyText, margin: 5 }}>
          Car Brand:{" "}
          <span style={{ fontWeight: 700 }}>Toyota, Corolla, 2018</span>
        </Typography>
      </ProfileCard>
    </CardRow>
  );
}

export default UserProfile;
