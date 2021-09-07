import React from "react";
import { Card } from "../../../globalStyles";
import { BodyText, MainBodyText } from "../../../typography";
import TitleBar from "../../pageLayout/TitleBar";
import BasicCard from "../../medium/BasicCard";
import CallToAction from "../../basic/CallToAction";
import { TextField } from "@material-ui/core";

function AddProduct() {
  return (
    <div>
      <div>
        <TitleBar title="Add New Product" noCtaButton />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <BasicCard
          custom={{
            flex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            padding: "0px 20px",
          }}
        >
          <div style={{ paddingTop: 15, ...Card.title }}>
            <MainBodyText bold color={Card.color}>
              Available Products
            </MainBodyText>
          </div>
          <div style={{ marginTop: 30 }}>
            <TextField
              variant="outlined"
              placeholder="Search Products"
              style={{ width: 320 }}
              size="small"
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <BodyText bold other={{ margin: 10 }}>
                Toyota
              </BodyText>
              <BodyText bold other={{ margin: 10 }}>
                Honda
              </BodyText>
              <BodyText bold other={{ margin: 10 }}>
                Kia
              </BodyText>
              <BodyText bold other={{ margin: 10 }}>
                Hyundai
              </BodyText>
            </div>
          </div>
        </BasicCard>
        <BasicCard
          custom={{
            flex: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            padding: "0px 20px",
          }}
        >
          <div style={{ paddingTop: 15, ...Card.title }}>
            <MainBodyText bold color={Card.color}>
              New Products
            </MainBodyText>
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
              marginTop: 30,
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            <TextField
              variant="outlined"
              name="newProduct"
              placeholder="Mercedes"
              style={{ width: 320, marginBottom: 20, marginRight: 20 }}
              size="small"
            />
            <div style={{ marginBottom: 20 }}>
              <CallToAction>Add</CallToAction>
            </div>
          </div>
        </BasicCard>
      </div>
    </div>
  );
}

export default AddProduct;
