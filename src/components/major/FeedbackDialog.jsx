import React from "react";
import { UiContext } from "../../App";
import { Dialog } from "@material-ui/core";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import HourglassEmptyRoundedIcon from "@material-ui/icons/HourglassEmptyRounded";
import { BodyText } from "../../typography";

function FeedbackDialog() {
  const Ui = React.useContext(UiContext);
  const closeFeedback = () => {
    setTimeout(() => {
      Ui.uiDispatch({
        type: "feedbackDialog",
        payload: { active: false, content: "" },
      });
    }, 2000);
  };

  return (
    <Dialog
      keepMounted
      open={Ui.uiState.feedbackDialog.active}
      onClose={() =>
        Ui.uiDispatch({
          type: "feedbackDialog",
          payload: { active: false, content: "", success: false },
        })
      }
      onEntered={closeFeedback}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 40,
          // color: rgba
        }}
      >
        <div
          style={{
            width: 200,
            // backgroundColor: "red",
            height: 200,
            borderRadius: "50%",
            zIndex: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {Ui.uiState.feedbackDialog.success === true ? (
            <CheckCircleOutlineRoundedIcon
              style={{ fontSize: 120, color: "green" }}
            />
          ) : Ui.uiState.feedbackDialog.success === false ? (
            <CancelRoundedIcon style={{ fontSize: 120, color: "red" }} />
          ) : (
            <HourglassEmptyRoundedIcon
              style={{ fontSize: 120, color: "yellow" }}
            />
          )}
        </div>
        <br />
        <br />
        <BodyText>{Ui.uiState.feedbackDialog.content}</BodyText>
      </div>
    </Dialog>
  );
}

export default FeedbackDialog;
