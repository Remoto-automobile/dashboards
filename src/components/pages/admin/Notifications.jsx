import React from "react";
import { Card, fonts, colors } from "../../../globalStyles";
import BasicCard from "../../medium/BasicCard";
import TitleBar from "../../pageLayout/TitleBar";
import AddIcon from "@material-ui/icons/Add";
import { Typography, Button } from "@material-ui/core";

function Notifications() {
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
            padding: "0px 20px",
          }}
        >
          <div style={Card.title}>
            <Typography style={{ ...fonts.heading6, color: Card.color }}>
              {"Subscribers"}
            </Typography>
          </div>
          <div>
            <Typography
              style={{ ...fonts.bodyText, paddingLeft: 20, marginTop: 30 }}
            >
              New issurance subscribe available, please take action for release
              of documents
            </Typography>
          </div>
          <div
            style={{ display: "flex", width: "100%", justifyContent: "right" }}
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
        <div style={{ flex: 1 }}></div>
      </div>
    </div>
  );
}

export default Notifications;
