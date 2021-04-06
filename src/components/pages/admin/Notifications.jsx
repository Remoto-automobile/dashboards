import React from "react";
import { Card, colors, pageDynamics } from "../../../globalStyles";
import BasicCard from "../../medium/BasicCard";
import TitleBar from "../../pageLayout/TitleBar";
import AddIcon from "@material-ui/icons/Add";
import { Button } from "@material-ui/core";
import { Heading6, BodyText } from "../../../typography";

function Notifications() {
  const responsive = pageDynamics();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TitleBar
        title="Notifications"
        actionText="Add New Product"
        actionIcon={<AddIcon />}
      />
      <div style={{ display: "flex" }}>
        <BasicCard
          custom={{
            flex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            justifyContent: "flex-start",
            padding: "0px 20px",
            minHeight: "50vh",
          }}
        >
          <div style={{ ...Card.title, marginTop: 30 }}>
            <Heading6 color={Card.color}>{"Subscribers"}</Heading6>
          </div>
          <div>
            <BodyText other={{ marginTop: 30, padding: 20 }}>
              New issurance subscribe available, please take action for release
              of documents
            </BodyText>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "right",
              marginTop: 20,
            }}
          >
            <Button
              variant="outlined"
              style={{
                color: colors.mainBg,
                backgroundColor: colors.main,
                textTransform: "capitalize",
                fontWeight: 700,
              }}
            >
              Approve
            </Button>
            <Button
              variant="outlined"
              style={{
                color: colors.main,
                textTransform: "capitalize",
                fontWeight: 700,
                marginLeft: 20,
                borderColor: colors.main,
              }}
            >
              Reject
            </Button>
          </div>
        </BasicCard>

        <div style={{ flex: 1 }} className={responsive.desktopOnly}></div>
      </div>
    </div>
  );
}

export default Notifications;
