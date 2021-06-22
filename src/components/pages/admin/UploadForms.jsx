import React from "react";
import Axios from "axios";
import { Formik, Form, Field, FieldArray } from "formik";
import {
  withStyles,
  AppBar,
  Tabs,
  Tab,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import TitleBar from "../../pageLayout/TitleBar";
import {
  BrandContext,
  ModelContext,
  ComponentContext,
  adminBrandRoute,
  adminComponentRoute,
  adminModelRoute,
  SystemContext,
  adminSystemRoute,
} from "../../../context/Api";
import TabPanel from "../../basic/TabPanel";
import { BodyText, MainBodyText } from "../../../typography";
import { Card, fonts, colors } from "../../../globalStyles";
import { Button } from "@material-ui/core";

function UploadComponentDataForm({ components, models }) {
  return (
    // <TableRow>
    <FieldArray name="component">
      {(fieldArrayProp) => {
        const { push, remove, form, insert } = fieldArrayProp;
        const { values } = form;
        const { component } = values;
        return (
          <React.Fragment>
            {component.map((c, index) => (
              <TableRow>
                <TableCell>
                  <Field as="select" name={`component[${index}].name`}>
                    {components.map((comp, i) => (
                      <option key={i} value={comp.id}>
                        {comp.name}
                      </option>
                    ))}
                  </Field>
                </TableCell>

                <TableCell>
                  <Field as="select" name={`component[${index}].model`}>
                    {models.map((model, i) => (
                      <option key={i} value={model.id}>
                        {model.name}
                      </option>
                    ))}
                  </Field>
                </TableCell>

                <TableCell>
                  <Field name={`component[${index}].price`} />
                </TableCell>

                <TableCell>
                  <Field name={`component[${index}].year`} />
                </TableCell>
                <TableCell>
                  <Button onClick={() => remove(index)}>-</Button>
                  <Button
                    onClick={() =>
                      insert(index, {
                        name: component[index].name,
                        model: component[index].model,
                        year: component[index].year,
                        price: component[index].price,
                      })
                    }
                  >
                    +
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </React.Fragment>
        );
      }}
    </FieldArray>
  );
}

function UploadBrandDataForm() {
  return (
    <FieldArray name="probability">
      {(prop) => {
        const { push, remove, form, insert } = prop;
        const { values } = form;
        const { probability } = values;

        return probability.map((p, index) => (
          <TableRow>
            <TableCell>
              <Field name={`probability[${index}].system`} />
            </TableCell>
            <TableCell>
              <Field name={`probability[${index}].brand`} />
            </TableCell>
            <TableCell>
              <Field name={`probability[${index}].probability`} />
            </TableCell>
            <TableCell>
              <Button onClick={() => remove(index)}>-</Button>
              <Button
                onClick={() =>
                  insert(index, {
                    system: probability[index].system,
                    brand: probability[index].brand,
                    probability: probability[index].probability,
                  })
                }
              >
                +
              </Button>
            </TableCell>
          </TableRow>
        ));
      }}
    </FieldArray>
  );
}

const FormTabs = withStyles({
  root: {
    backgroundColor: Card.bgColor,
  },
  indicator: {
    backgroundColor: "#60ceca",
  },
})(Tabs);

const FormTab = withStyles((theme) => ({
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
      backgroundColor: "#ecb0ee",
    },
    "&:focus": {
      color: "#a049ff",
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

function UploadForms() {
  const token = JSON.parse(localStorage.getItem("admin_token")).auth_token;

  const Brand = React.useContext(BrandContext);
  const Model = React.useContext(ModelContext);
  const Component = React.useContext(ComponentContext);
  const System = React.useContext(SystemContext);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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

  // get components
  React.useEffect(() => {
    Axios.get(`${adminComponentRoute}`, {
      headers: { token: token },
    })
      .then((data) => {
        Component.dispatch({
          type: "FETCH_SUCCESS",
          payload: data.data,
          loading: false,
        });
      })
      .catch((err) =>
        Component.dispatch({
          type: "FETCH_FAILURE",
          error: err,
          loading: false,
        })
      );
  }, []);

  // get systems
  React.useEffect(() => {
    Axios.get(`${adminSystemRoute}`, {
      headers: { token: token },
    })
      .then((data) => {
        System.dispatch({
          type: "FETCH_SUCCESS",
          payload: data.data,
          loading: false,
        });
      })
      .catch((err) =>
        System.dispatch({
          type: "FETCH_FAILURE",
          error: err,
          loading: false,
        })
      );
  }, []);

  return (
    // !Brand.state.loading &&
    // !System.state.loading &&
    // !Model.state.loading &&
    // !Component.state.loading && (
    <React.Fragment>
      <div>
        <TitleBar
          title="Update Database"
          actionText="Add New Product"
          actionIcon={<AddIcon />}
          //   onActionClick={() => history.push("/admin/products/add")}
        />
        <div>
          <AppBar position="static" color="default" elevation="none">
            <FormTabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              {/* {Brand.state.data.map((brand) => (
                <FormTab
                label={brand.name}
                {...a11yProps(brand.id)}
                // onChange={handleChangeIndex}
                />
                ))} */}
              <FormTab label="Add Components" {...a11yProps(0)} />
              <FormTab label="Add Probability" {...a11yProps(1)} />
              <FormTab label="Add System" {...a11yProps(2)} />
              {/* <FormTab label="Kia" {...a11yProps(3)} />
            <FormTab label="Toyota" {...a11yProps(4)} />
            <FormTab label="Kia" {...a11yProps(5)} />
        <FormTab label="Hyundai" {...a11yProps(5)} /> */}
            </FormTabs>
          </AppBar>
        </div>
      </div>
      <TabPanel value={value} index={0}>
        <Formik
          initialValues={{
            brand: "",
            system: "",
            component: [
              { name: "", model: "", price: "", year: "" },
              //   { name: "Toyota", model: "Toyota", price: 250000, year: 2010 },
              //   { name: "Toyota", model: "Toyota", price: 250000, year: 2010 },
            ],
          }}
        >
          <div>
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
                  Select Brand
                </BodyText>
                <Field
                  name="brand"
                  as="select"
                  variant="outlined"
                  style={{ width: 300 }}
                  size="small"
                >
                  {/* {Brand.state.data.map((brand) => ( */}
                  {[1, 2, 3].map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </Field>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <BodyText small other={{ marginRight: 20 }}>
                  Choose System
                </BodyText>
                <Field
                  name="system"
                  as="select"
                  variant="outlined"
                  style={{ width: 300 }}
                  size="small"
                >
                  {[1, 2, 3].map((system) => (
                    //   {System.state.data.map((system) => (
                    <option key={system} value={system}>
                      {system}
                    </option>
                  ))}
                </Field>
              </div>
            </div>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <MainBodyText bold>Model</MainBodyText>
                  </TableCell>
                  <TableCell>
                    <MainBodyText bold>Component</MainBodyText>
                  </TableCell>
                  <TableCell>
                    <MainBodyText bold>Price</MainBodyText>
                  </TableCell>
                  <TableCell>
                    <MainBodyText bold>Year</MainBodyText>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <UploadComponentDataForm
                  components={[
                    { id: 1, name: "Hammer" },
                    { id: 2, name: "Gauge" },
                  ]}
                  models={[
                    { id: 1, name: "Hyundai" },
                    { id: 2, name: "Toyota" },
                  ]}
                />
              </TableBody>
            </Table>
          </div>
        </Formik>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Formik
          initialValues={{
            brand: "",
            probability: [
              { system: "", brand: "", probability: "" },
              //   { system: "Cooling system", brand: "Toyota", probability: 2.5 },
              //   { system: "Cooling system", brand: "Toyota", probability: 2.5 },
            ],
          }}
        >
          <div>
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
                  Select Brand
                </BodyText>
                <Field
                  name="brand"
                  as="select"
                  variant="outlined"
                  style={{ width: 300 }}
                  size="small"
                >
                  {/* {Brand.state.data.map((brand) => ( */}
                  {[1, 2, 3].map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </Field>
              </div>
            </div>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <MainBodyText bold>System</MainBodyText>
                  </TableCell>
                  <TableCell>
                    <MainBodyText bold>Brand</MainBodyText>
                  </TableCell>
                  <TableCell>
                    <MainBodyText bold>Probability</MainBodyText>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <UploadBrandDataForm />
              </TableBody>
            </Table>
          </div>
        </Formik>
      </TabPanel>
    </React.Fragment>
  );
}

export default UploadForms;
