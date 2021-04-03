import React from "react";
import TitleBar from "../../pageLayout/TitleBar";
import TabPanel from "../../basic/TabPanel";
import { MainBodyText, BodyText } from "../../../typography";
import AddIcon from "@material-ui/icons/Add";
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

function populate(component, price, probability) {
  return { component, price, probability };
}

const tableData = [
  populate("Compressor", 31000, 0.25),
  populate("Condenser", 21000, 0.2),
  populate("Expansion Valve", 10000, 0.02),
  populate("Reciever Drier", 4000, 0.1),
  populate("Evaporator", 16000, 0.2),
  populate("Blower Motor", 6000, 0.03),
  populate("Accumulator", 7000, 0.1),
  populate("Refrigerant", 2000, 0.1),
];

function AcSystem() {
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
        title="Air-Condition System"
        actionText="Add New Product"
        actionIcon={<AddIcon />}
      />
      <div>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Toyota" {...a11yProps(0)} />
            <Tab label="Honda" {...a11yProps(1)} />
            <Tab label="Hyundai" {...a11yProps(2)} />
            <Tab label="Kia" {...a11yProps(3)} />
            <Tab label="Toyota" {...a11yProps(4)} />
            <Tab label="Kia" {...a11yProps(5)} />
            <Tab label="Hyundai" {...a11yProps(5)} />
          </Tabs>
        </AppBar>

        <TabPanel value={value} index={0}>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <MainBodyText other={{ marginRight: 20 }}>
                Select Car Type
              </MainBodyText>
              <TextField
                name="car"
                select
                label="Car"
                variant="outlined"
                onChange={changeCar}
                value={car}
                style={{ width: 400 }}
              >
                {carTypes.map((c) => (
                  <MenuItem key={c} value={c}>
                    {c}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <MainBodyText other={{ marginRight: 20 }}>
                Select Car Type
              </MainBodyText>
              <TextField
                name="year"
                select
                label="Year"
                variant="outlined"
                onChange={changeYear}
                value={year}
                style={{ width: 400 }}
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
              {tableData.map((table) => (
                <TableRow>
                  <TableCell>
                    <BodyText>{table.component}</BodyText>
                  </TableCell>
                  <TableCell>
                    <BodyText>{table.price}</BodyText>
                  </TableCell>
                  <TableCell>
                    <BodyText>{table.probability}</BodyText>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabPanel>
      </div>
    </div>
  );
}

export default AcSystem;
