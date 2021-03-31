import React from "react";
import CardRow from "../../major/CardRow";
import ProfileCard from "../../medium/ProfileCard";
import OrderCard from "../../medium/OrderCard";
import { fonts } from "../../../globalStyles";
import { Typography } from "@material-ui/core";
import OrderTable from "../../medium/OrderTable";

function Dashboard() {
  return (
    <React.Fragment>
      <CardRow>
        <ProfileCard
          action="View Profile"
          flex={2}
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
        <OrderCard flex={1} />
      </CardRow>
      <div style={{ margin: "auto 10px" }}>
        <OrderTable />
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
