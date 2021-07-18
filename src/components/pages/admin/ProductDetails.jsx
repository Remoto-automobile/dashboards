import React from "react";
import Axios from "axios";
import { Card, fonts, colors } from "../../../globalStyles";
import TitleBar from "../../pageLayout/TitleBar";
import TabPanel from "../../basic/TabPanel";
import { MainBodyText, BodyText } from "../../../typography";
import AddIcon from "@material-ui/icons/Add";
import { useLocation, useHistory, useParams } from "react-router-dom";
import { UiContext } from "../../../App";
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
import {
  adminComponentRoute,
  ComponentContext,
  ExactCompContext,
  adminExactcomponentRoute,
  adminModelRoute,
  ModelContext,
  adminBrandRoute,
  BrandContext,
  ItemContext,
  adminProbRoute,
} from "../../../context/Api";
import Loading from "../../major/Loading";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const CarTabs = withStyles({
  root: {
    backgroundColor: Card.bgColor,
  },
  indicator: {
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

// const carTypes = ["Toyota", "Honda", "Kia", "Hyundai", "Toyota", "Honda"];
const years = [
  2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
  2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
];

function ProductDetails({ systemId }) {
  let priceD = [];
  let probD = [];
  const token = JSON.parse(localStorage.getItem("admin_token")).auth_token;

  const [priceData, setPriceData] = React.useState([]);
  const [probData, setProbData] = React.useState([]);

  let query = useQuery();
  const paramData = query.get("systemId");
  const Comp = React.useContext(ComponentContext);
  const ExactComp = React.useContext(ExactCompContext);
  const Model = React.useContext(ModelContext);
  const Brand = React.useContext(BrandContext);
  const Item = React.useContext(ItemContext);
  const Ui = React.useContext(UiContext);
  const location = useLocation();
  const history = useHistory();
  const [components, setComponents] = React.useState([]);
  const [carModel, setCarModel] = React.useState({});
  // if (!location.state) {
  //   history.push("/admin/products");
  // }
  // const history = useHistory();
  // console.log(location.state.name);
  const [year, setYear] = React.useState(2010);
  const [value, setValue] = React.useState(0);
  const [car, setCar] = React.useState(1);
  const changeCar = (e) => {
    setCar(e.target.value);
  };
  const changeYear = (e) => {
    setYear(e.target.value);
  };

  // get component
  React.useEffect(() => {
    Axios.get(`${adminComponentRoute}/system/${query.get("systemId")}`, {
      headers: { token: token },
    })
      .then((data) => {
        Comp.dispatch({
          type: "FETCH_SUCCESS",
          payload: data.data,
          loading: false,
        });
      })
      .catch((err) =>
        Comp.dispatch({
          type: "FETCH_FAILURE",
          error: err,
          loading: false,
        })
      );
  }, []);

  // get brand
  React.useEffect(() => {
    Axios.get(adminBrandRoute, {
      headers: { token: token },
    })
      .then((data) => {
        Brand.dispatch({
          type: "FETCH_SUCCESS",
          payload: data.data,
          loading: false,
        });
      })
      .catch((err) =>
        Brand.dispatch({ type: "FETCH_ERROR", error: err, loading: false })
      );
  }, []);

  // get model
  React.useEffect(() => {
    Axios.get(adminModelRoute, {
      headers: { token: token },
    })
      .then((data) =>
        Model.dispatch({
          type: "FETCH_SUCCESS",
          payload: data.data,
          loading: false,
        })
      )
      .catch((err) =>
        Model.dispatch({
          type: "FETCH_FAILURE",
          error: err,
          loading: false,
        })
      );
  }, []);

  React.useEffect(() => {
    Axios.post(
      `${adminExactcomponentRoute}/find_unique`,
      {
        model_id: car,
        year: year,
        system_id: query.get("systemId"),
      },
      { headers: { token: token } }
    )
      .then((res) =>
        ExactComp.dispatch({
          type: "FETCH_SUCCESS",
          payload: res.data,
          loading: false,
        })
      )
      .catch((err) => {
        console.log(err);
      });
    return ExactComp.dispatch({
      loading: true,
    });
  }, [year, car]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return Comp.state.loading ? (
    <Loading />
  ) : Brand.state.loading ? (
    <Loading />
  ) : Model.state.loading ? (
    <Loading />
  ) : (
    //  ExactComp.state.loading ? (
    //   <Loading />
    // ) :
    <div>
      <TitleBar
        title={query.get("system_id")}
        actionText="Add New Product"
        actionIcon={<AddIcon />}
        onActionClick={() => history.push("/admin/products/add")}
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
            {Brand.state.data.map((brand) => (
              <CarTab
                label={brand.name}
                {...a11yProps(brand.id)}
                // onChange={handleChangeIndex}
              />
            ))}
            {/* <CarTab label="Toyota" {...a11yProps(0)} />
            <CarTab label="Honda" {...a11yProps(1)} />
            <CarTab label="Hyundai" {...a11yProps(2)} />
            <CarTab label="Kia" {...a11yProps(3)} />
            <CarTab label="Toyota" {...a11yProps(4)} />
            <CarTab label="Kia" {...a11yProps(5)} />
            <CarTab label="Hyundai" {...a11yProps(5)} /> */}
          </CarTabs>
        </AppBar>

        {Brand.state.data.map((brand) => (
          <TabPanel value={value} index={brand.id - 1}>
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
                  {Model.state.data.map((model) => {
                    if (model.brand_id == brand.id)
                      return (
                        <MenuItem key={model.id} value={model.id}>
                          {model.name}
                        </MenuItem>
                      );
                  })}
                  {
                    // carTypes.map((c) => (
                    //   <MenuItem key={c} value={c}>
                    //     {c}
                    //   </MenuItem>
                    // ))
                  }
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
                {ExactComp.state.loading ? (
                  <Loading />
                ) : (
                  Comp.state.data.map((comp) =>
                    ExactComp.state.data.map((ecomp, i) => {
                      if (
                        ecomp.component_id === comp.id &&
                        year === ecomp.year
                      ) {
                        priceD = [
                          ...priceD,
                          { id: ecomp.id, name: comp.name, price: ecomp.price },
                        ];
                        probD = [
                          ...probD,
                          {
                            id: ecomp.id,
                            name: comp.name,
                            probability: ecomp.probability,
                          },
                        ];

                        return (
                          <TableRow>
                            <TableCell>
                              <BodyText>{comp.name}</BodyText>
                            </TableCell>
                            <TableCell>
                              <BodyText>{ecomp.price}</BodyText>
                            </TableCell>
                            <TableCell>
                              <BodyText>{ecomp.probability}</BodyText>
                              {/* <button onClick={() => alert(priceD[i].name)}>
                                Hey
                              </button> */}
                            </TableCell>
                          </TableRow>
                        );
                      }
                    })
                  )
                )}
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
              <CallToAction
                onClick={() => {
                  Ui.uiDispatch({
                    type: "productUpdate",
                    data: { active: true, priceD, probD },
                  });
                }}
              >
                Update Data
              </CallToAction>
            </div>
          </TabPanel>
        ))}
      </div>
    </div>
  );
}

export default ProductDetails;
