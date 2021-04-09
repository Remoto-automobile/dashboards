import React from "react";
import { Card, colors, fonts } from "../../../globalStyles";
import { BodyText, Heading6 } from "../../../typography";
import TabPanel from "../../basic/TabPanel";
import BasicCard from "../../medium/BasicCard";

// import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";

import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Tab,
  Tabs,
} from "@material-ui/core";

const CarTabs = withStyles({
  root: {
    backgroundColor: Card.bgColor,
  },
  indicator: {
    // backgroundColor: "green",
    backgroundColor: "#60ceca",
  },
})(Tabs);

const CarTab = withStyles((theme) => ({
  root: {
    textTransform: "capitalize",
    minWidth: 72,
    borderRadius: "20px 20px 0px 0px",
    // margin: "auto 5px",
    // backgroundColor: colors,
    fontWeight: 600,
    fontFamily: fonts.bodyText.fontFamily,
    // marginRight: theme.spacing(4),
    "&:hover": {
      color: colors.main,
      opacity: 1,
    },
    "&$selected": {
      color: Card.color,
      fontWeight: 600,
      backgroundColor: "#ccf0ee",
    },
    "&:focus": {
      color: "#40a9ff",
    },
  },
  selected: {},
}))(Tab);

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: Card.bgColor,
    width: "90%",
    marginTop: 20,
  },
}));

export default function CarInfo() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <BasicCard custom={{ display: "flex", flexDirection: "column" }}>
      <div style={Card.title}>
        <Heading6>Car Information</Heading6>
      </div>
      <div className={classes.root}>
        <AppBar position="static" color="transparent" elevation="none">
          <CarTabs
            value={value}
            onChange={handleChange}
            // indicatorColor="secondary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <CarTab label="Toyota" {...a11yProps(0)} />
            <CarTab label="Honda" {...a11yProps(1)} />
            <CarTab label="Hyundai" {...a11yProps(2)} />
            <CarTab label="Kia" {...a11yProps(3)} />
            <CarTab label="Toyota" {...a11yProps(4)} />
            <CarTab label="Kia" {...a11yProps(5)} />
          </CarTabs>
        </AppBar>
        {/* <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      > */}
        <TabPanel value={value} index={0}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <BodyText bold>Car Model</BodyText>
                </TableCell>
                <TableCell>
                  <BodyText bold>Year</BodyText>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <BodyText>Corolla</BodyText>
                </TableCell>
                <TableCell>
                  <BodyText>2018</BodyText>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <BodyText bold>Car Model</BodyText>
                </TableCell>
                <TableCell>
                  <BodyText bold>Year</BodyText>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <BodyText>Corolla</BodyText>
                </TableCell>
                <TableCell>
                  <BodyText>2018</BodyText>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <BodyText bold>Car Model</BodyText>
                </TableCell>
                <TableCell>
                  <BodyText bold>Year</BodyText>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <BodyText>Corolla</BodyText>
                </TableCell>
                <TableCell>
                  <BodyText>2018</BodyText>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabPanel>

        <TabPanel value={value} index={3}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <BodyText bold>Car Model</BodyText>
                </TableCell>
                <TableCell>
                  <BodyText bold>Year</BodyText>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <BodyText>Corolla</BodyText>
                </TableCell>
                <TableCell>
                  <BodyText>2018</BodyText>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabPanel>

        <TabPanel value={value} index={4}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <BodyText bold>Car Model</BodyText>
                </TableCell>
                <TableCell>
                  <BodyText bold>Year</BodyText>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <BodyText>Corolla</BodyText>
                </TableCell>
                <TableCell>
                  <BodyText>2018</BodyText>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabPanel>

        <TabPanel value={value} index={5}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <BodyText bold>Car Model</BodyText>
                </TableCell>
                <TableCell>
                  <BodyText bold>Year</BodyText>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <BodyText>Corolla</BodyText>
                </TableCell>
                <TableCell>
                  <BodyText>2018</BodyText>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabPanel>

        {/* </SwipeableViews> */}
      </div>
    </BasicCard>
  );
}
