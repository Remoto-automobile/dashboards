import React from "react";
import CardRow from "../../major/CardRow";
import ProfileCard from "../../medium/ProfileCard";
import OrderCard from "../../medium/OrderCard";
import OrderTable from "../../medium/OrderTable";
import { BodyText, MainBodyText } from "../../../typography";

function Dashboard() {
  return (
    <React.Fragment>
      <CardRow>
        <ProfileCard
          action="View Profile"
          flex={2}
          picSrc="https://picsum.photos/120/120"
          title="Profile"
          actionText="View Profile"
        >
          <MainBodyText bold>Remoto Official</MainBodyText>
          <BodyText other={{ margin: 5 }}>
            Phone: <span style={{ fontWeight: 700 }}>+2348000000000</span>
          </BodyText>
          <BodyText other={{ margin: 5 }}>
            Car Brand:{" "}
            <span style={{ fontWeight: 700 }}>Toyota, Corolla, 2018</span>
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
