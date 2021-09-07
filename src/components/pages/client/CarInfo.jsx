import React from "react";
import Axios from "axios";

import AppBar from "@material-ui/core/AppBar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Tab,
  Tabs,
} from "@material-ui/core";

// import SwipeableViews from "react-swipeable-views";
import { Card, colors, fonts } from "../../../globalStyles";
import { BodyText, Heading6 } from "../../../typography";
import TabPanel from "../../basic/TabPanel";
import BasicCard from "../../medium/BasicCard";
import { CarContext, carRoute } from "../../../context/Api";
import Loading from "../../major/Loading";

const clientData = JSON.parse(localStorage.getItem("client_token"));

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
  const Car = React.useContext(CarContext);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (!Car.state.data || Car.state.error) {
      Car.dispatch({ type: "LOADING" });
      Axios.get(`${carRoute}/${clientData.id}`, {
        headers: { token: clientData.token },
      })
        .then((res) => {
          Car.dispatch({ type: "FETCH_SUCCESS", payload: res.data });
        })
        .catch((err) => Car.dispatch({ type: "FETCH_FAILURE", error: err }));
    }
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const handleChangeIndex = (index) => {
  //   setValue(index);
  // };

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
            {Car.state.loading ? (
              ""
            ) : (
              <React.Fragment>
                <CarTab label="Cars" {...a11yProps(0)} />
                {/* <CarTab label={Car.state.data.brand.name} {...a11yProps(0)} /> */}
              </React.Fragment>
            )}
            {/* <CarTab label="Toyota" {...a11yProps(0)} />
            <CarTab label="Honda" {...a11yProps(1)} />
            <CarTab label="Hyundai" {...a11yProps(2)} />
            <CarTab label="Kia" {...a11yProps(3)} />
            <CarTab label="Toyota" {...a11yProps(4)} />
            <CarTab label="Kia" {...a11yProps(5)} /> */}
          </CarTabs>
        </AppBar>
        {/* <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      > */}
        {Car.state.loading ? (
          <Loading />
        ) : (
          <TabPanel value={value} index={0}>
            {console.log(Car.state.data)}
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <BodyText bold>Car Brand</BodyText>
                  </TableCell>
                  <TableCell>
                    <BodyText bold>Car Model</BodyText>
                  </TableCell>
                  <TableCell>
                    <BodyText bold>Year</BodyText>
                  </TableCell>
                  <TableCell>
                    <BodyText bold>Subscription Expiry</BodyText>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Car.state.data.map((car) => (
                  <TableRow>
                    <TableCell>
                      <BodyText>{car.brand.name}</BodyText>
                      {/* <BodyText>Corolla</BodyText> */}
                    </TableCell>
                    <TableCell>
                      <BodyText>{car.model.name}</BodyText>
                      {/* <BodyText>Corolla</BodyText> */}
                    </TableCell>
                    <TableCell>
                      <BodyText>{car.year}</BodyText>
                    </TableCell>
                    <TableCell>
                      <BodyText>
                        {car.subscription.expiry_date
                          ? car.subscription.expiry_date
                          : "Not Active"}
                      </BodyText>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabPanel>
        )}

        {/* <TabPanel value={value} index={1}>
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
        </TabPanel> */}

        {/* </SwipeableViews> */}
      </div>
    </BasicCard>
  );
}
