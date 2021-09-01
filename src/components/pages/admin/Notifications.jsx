import React, { useEffect, useContext, useState } from "react";
import parseHtml from "html-react-parser";
import Axios from "axios";
import AddIcon from "@material-ui/icons/Add";
import {
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  makeStyles,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import TitleBar from "../../pageLayout/TitleBar";
import BasicCard from "../../medium/BasicCard";
import { Card, colors, pageDynamics } from "../../../globalStyles";
import { Heading6, BodyText, MainBodyText } from "../../../typography";
import { adminMessagesRoute, MessagesContext } from "../../../context/Api";
import Loading from "../../major/Loading";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const adminData = JSON.parse(localStorage.getItem("admin_token"));

function Notifications() {
  const [range, setRange] = useState({ from: 0, to: 10 });
  const classes = useStyles();
  const Messages = useContext(MessagesContext);
  const responsive = pageDynamics();

  useEffect(() => {
    Axios.get(`${adminMessagesRoute}`, {
      headers: { token: adminData.auth_token },
    })
      .then((res) => {
        Messages.dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((err) =>
        Messages.dispatch({ type: "FETCH_FAILURE", payload: err })
      );
  }, []);

  return Messages.state.loading ? (
    <Loading />
  ) : (
    <>
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
              {Messages.state.data.map((msg, i) => {
                return (
                  i >= range.from &&
                  i < range.to && (
                    <Accordion>
                      <AccordionSummary
                        expandIcon={msg.body && <ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <MainBodyText color={colors.main}>
                          {msg.title}
                        </MainBodyText>
                      </AccordionSummary>
                      {msg.body && (
                        <AccordionDetails>
                          <BodyText>{parseHtml(msg.body)}</BodyText>
                        </AccordionDetails>
                      )}
                    </Accordion>
                  )
                );
              })}

              {/* <BodyText other={{ marginTop: 30, padding: 20 }}>
                New issurance subscribe available, please take action for
                release of documents
              </BodyText> */}
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "right",
                marginTop: 20,
                marginBottom: 20,
              }}
            >
              {/* <Button
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
              </Button> */}
              <Pagination
                count={Math.ceil(
                  Messages.state.data.length / (range.to - range.from)
                )}
                variant="outlined"
                shape="rounded"
                onChange={(e, page) => {
                  setRange((currentRange) => ({
                    from:
                      page * (currentRange.to - currentRange.from) -
                      (currentRange.to - currentRange.from),
                    to: page * (currentRange.to - currentRange.from),
                  }));
                }}
              />
            </div>
          </BasicCard>

          <div style={{ flex: 1 }} className={responsive.desktopOnly}></div>
        </div>
      </div>
    </>
  );
}

export default Notifications;
