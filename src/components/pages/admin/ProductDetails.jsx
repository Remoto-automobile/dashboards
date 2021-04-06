import React from "react";
import { Card, fonts, colors } from "../../../globalStyles";
import TitleBar from "../../pageLayout/TitleBar";
import TabPanel from "../../basic/TabPanel";
import { MainBodyText, BodyText } from "../../../typography";
import AddIcon from "@material-ui/icons/Add";
import { useLocation, useHistory } from "react-router-dom";
import {
  AppBar,
  Tabs,
  Tab,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  MenuItem,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import CallToAction from "../../basic/CallToAction";

const CarTabs = withStyles({
  root: {
    backgroundColor: Card.bgColor,
  },
  indicator: {
    backgroundColor: "green",
  },
})(Tabs);

const CarTab = withStyles((theme) => ({
  root: {
    textTransform: "capitalize",
    minWidth: 72,
    borderRadius: "20px 20px 0px 0px",
    margin: "auto 5px",
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
      backgroundColor: "#b2ffb2",
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

const carTypes = ["Toyota", "Honda", "Kia", "Hyundai", "Toyota", "Honda"];
const years = [
  2000,
  2001,
  2002,
  2003,
  2004,
  2005,
  2006,
  2007,
  2008,
  2009,
  2010,
  2011,
  2012,
  2013,
  2014,
  2015,
];

function ProductDetails() {
  const location = useLocation();
  const history = useHistory();
  // if (!location.state) {
  //   history.push("/admin/products");
  // }
  // const history = useHistory();
  console.log(location.state.name);
  const [year, setYear] = React.useState(2008);
  const [value, setValue] = React.useState(0);
  const [car, setCar] = React.useState("Toyota");
  const changeCar = (e) => {
    setCar(e.target.value);
  };
  const changeYear = (e) => {
    setYear(e.target.value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <div>
      <TitleBar
        title={location.state.name}
        actionText="Add New Product"
        actionIcon={<AddIcon />}
      />
      <div>
        <AppBar position="static" color="default" elevation="none">
          <CarTabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
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
            <CarTab label="Hyundai" {...a11yProps(5)} />
          </CarTabs>
        </AppBar>

        <TabPanel value={value} index={0}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginBottom: 30,
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <BodyText small other={{ marginRight: 20 }}>
                Select Car Type
              </BodyText>
              <TextField
                name="car"
                select
                variant="outlined"
                onChange={changeCar}
                value={car}
                style={{ width: 300 }}
                size="small"
              >
                {carTypes.map((c) => (
                  <MenuItem key={c} value={c}>
                    {c}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <BodyText small other={{ marginRight: 20 }}>
                Choose Year
              </BodyText>
              <TextField
                name="year"
                select
                variant="outlined"
                onChange={changeYear}
                value={year}
                style={{ width: 300 }}
                size="small"
              >
                {years.map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </div>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <MainBodyText bold>Components</MainBodyText>
                </TableCell>
                <TableCell>
                  <MainBodyText bold>Prices</MainBodyText>
                </TableCell>
                <TableCell>
                  <MainBodyText bold>Probability</MainBodyText>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {location.state.data.map((data) => (
                <TableRow>
                  <TableCell>
                    <BodyText>{data.component}</BodyText>
                  </TableCell>
                  <TableCell>
                    <BodyText>{data.price}</BodyText>
                  </TableCell>
                  <TableCell>
                    <BodyText>{data.probability}</BodyText>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "right",
              marginTop: 50,
              paddingRight: 50,
            }}
          >
            <CallToAction>Update Data</CallToAction>
          </div>
        </TabPanel>
      </div>
    </div>
  );
}

export default ProductDetails;
