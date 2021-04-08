import React from "react";
import { colors } from "../../globalStyles";
import { MainBodyText } from "../../typography";
import { makeStyles, fade } from "@material-ui/core/styles";
import { UiContext } from "../../App";

function SiderItem({ children, icon, rad, activeStyle }) {
  const compCl = styles();
  const Ui = React.useContext(UiContext);
  let extra = {};
  if (rad) {
    extra = { borderRadius: 10 };
  }
  return (
    <div
      className={compCl.container}
      style={{ ...activeStyle, ...extra }}
      onClick={() => {
        Ui.uiDispatch("default");
      }}
    >
      <MainBodyText>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          {/* <div style={{ marginRight: 10 }}> */}
          <div style={{ marginRight: 20 }}>{icon}</div>
          {/* </div> */}
          <div style={{ display: "flex", alignItems: "center" }}>
            {children}
          </div>
        </div>
      </MainBodyText>
    </div>
  );
}

const styles = makeStyles((theme) => ({
  container: {
    paddingTop: 15,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 20,
    width: "100%",
    "&:hover": {
      backgroundColor: fade(colors.main, 0.05),
    },
  },
}));

export default SiderItem;
