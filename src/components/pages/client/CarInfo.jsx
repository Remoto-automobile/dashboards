import React from "react";
import { Card, colors } from "../../../globalStyles";
import TabPanel from "../../basic/TabPanel";

// import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: Card.bgColor,
    width: "100%",
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
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Toyota" {...a11yProps(0)} style={styles.head} />
          <Tab label="Honda" {...a11yProps(1)} style={styles.head} />
          <Tab label="Hyundai" {...a11yProps(2)} style={styles.head} />
          <Tab label="Kia" {...a11yProps(3)} style={styles.head} />
          <Tab label="Toyota" {...a11yProps(4)} style={styles.head} />
          <Tab label="Kia" {...a11yProps(5)} style={styles.head} />
        </Tabs>
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
              <TableCell>Car Model</TableCell>
              <TableCell>Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Corolla</TableCell>
              <TableCell>2018</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Car Model</TableCell>
              <TableCell>Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Corolla</TableCell>
              <TableCell>2018</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Car Model</TableCell>
              <TableCell>Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Corolla</TableCell>
              <TableCell>2018</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Car Model</TableCell>
              <TableCell>Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Corolla</TableCell>
              <TableCell>2018</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Car Model</TableCell>
              <TableCell>Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Corolla</TableCell>
              <TableCell>2018</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Car Model</TableCell>
              <TableCell>Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Corolla</TableCell>
              <TableCell>2018</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TabPanel>
      {/* </SwipeableViews> */}
    </div>
  );
}

const styles = {
  head: {
    borderRadius: "1em 1em 0 0",
    backgroundColor: colors.secondaryBg,
    "&:hover": { backgroundColor: colors.main },
  },
};
