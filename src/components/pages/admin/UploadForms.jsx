import React from "react";
import Axios from "axios";
import { Formik, Form, Field, FieldArray, FastField } from "formik";
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
  adminExactcomponentRoute,
} from "../../../context/Api";
import TabPanel from "../../basic/TabPanel";
import { BodyText, MainBodyText } from "../../../typography";
import { Card, fonts, colors } from "../../../globalStyles";
import { Button } from "@material-ui/core";
import Loading from "../../major/Loading";
import { values } from "lodash";
import {
  UploadComponentDataForm,
  UploadProbabilityForm,
  UploadBrandForm,
  UploadModelForm,
  submitProbability,
  submitComponents,
  submitFiles,
  submitBrand,
  submitModel,
} from "../../../context/helpers";

const token =
  localStorage.getItem("admin_token") &&
  JSON.parse(localStorage.getItem("admin_token")).auth_token;

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

  return Brand.state.loading ? (
    <Loading />
  ) : System.state.loading ? (
    <Loading />
  ) : Model.state.loading ? (
    <Loading />
  ) : Component.state.loading ? (
    <Loading />
  ) : (
    <React.Fragment>
      <div>
        <TitleBar
          title="Update Database"
          noCtaButton
          //   actionText="Edit Existing"
          //   actionIcon={<AddIcon />}
          //   onActionClick={() => history.push(`${path}/edit`)}
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
              <FormTab label="Add Components" {...a11yProps(0)} />
              <FormTab label="Add Probability" {...a11yProps(1)} />
              <FormTab label="Add Brand" {...a11yProps(2)} />
              <FormTab label="Add Car Models" {...a11yProps(3)} />
              <FormTab label="Upload Files (CSV)" {...a11yProps(4)} />
            </FormTabs>
          </AppBar>
        </div>
      </div>
      <TabPanel value={value} index={0}>
        <Formik
          initialValues={{
            component: [{ name: "", model: "", price: "", year: "" }],
          }}
        >
          {(prop) => {
            const { values } = prop;
            // const { values } = form;
            // alert(values.brand);
            return (
              <div>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <MainBodyText bold>Component</MainBodyText>
                      </TableCell>
                      <TableCell>
                        <MainBodyText bold>Model</MainBodyText>
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
                      components={Component.state.data}
                      models={Model.state.data}
                    />
                  </TableBody>
                </Table>
                <div>
                  <Button onClick={() => submitComponents(values)}>Go</Button>
                </div>
              </div>
            );
          }}
        </Formik>
      </TabPanel>

      {/* Probability Tab */}
      <TabPanel value={value} index={1}>
        <Formik
          initialValues={{
            probability: [{ component: 1, brand: 1, probability: "" }],
          }}
        >
          {(prop) => {
            return (
              <div>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <MainBodyText bold>Component</MainBodyText>
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
                    <UploadProbabilityForm
                      components={Component.state.data}
                      brand={Brand.state.data}
                    />
                  </TableBody>
                </Table>
                <div>
                  <Button color="secondary" onClick={() => prop.resetForm()}>
                    Reset
                  </Button>
                  <Button onClick={() => submitProbability(prop.values)}>
                    Go
                  </Button>
                </div>
              </div>
            );
          }}
        </Formik>
      </TabPanel>

      {/* Brand */}
      <TabPanel value={value} index={2}>
        <Formik
          initialValues={{
            name: [""],
          }}
        >
          {(prop) => {
            return (
              <div>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <MainBodyText bold>Name</MainBodyText>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <UploadBrandForm />
                  </TableBody>
                </Table>
                <div>
                  <Button color="secondary" onClick={() => prop.resetForm()}>
                    Reset
                  </Button>
                  <Button onClick={() => submitBrand(prop.values)}>Go</Button>
                </div>
              </div>
            );
          }}
        </Formik>
      </TabPanel>

      {/* Model */}
      <TabPanel value={value} index={3}>
        <Formik
          initialValues={{
            model: [{ brand: 1, name: "" }],
          }}
        >
          {(prop) => {
            return (
              <div>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <MainBodyText bold>Brand</MainBodyText>
                      </TableCell>
                      <TableCell>
                        <MainBodyText bold>Name</MainBodyText>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <UploadModelForm brands={Brand.state.data} />
                  </TableBody>
                </Table>
                <div>
                  <Button color="secondary" onClick={() => prop.resetForm()}>
                    Reset
                  </Button>
                  <Button onClick={() => submitModel(prop.values)}>Go</Button>
                </div>
              </div>
            );
          }}
        </Formik>
      </TabPanel>

      {/* File */}
      <TabPanel value={value} index={4}>
        <Formik
          initialValues={{
            file: null,
            format: "CSV",
            target: "Components",
          }}
        >
          {(prop) => {
            const { setFieldValue, handleChange, values } = prop;
            const acceptableTargets = ["Components", "Probability"];
            return (
              <div>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <MainBodyText bold>Format</MainBodyText>
                      </TableCell>
                      <TableCell>
                        <MainBodyText bold>Target Database</MainBodyText>
                      </TableCell>
                      <TableCell>
                        <MainBodyText bold>File</MainBodyText>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Field name="format" disabled value="CSV" />
                      </TableCell>
                      <TableCell>
                        <Field name="target" as="select">
                          {acceptableTargets.map((t, i) => (
                            <option value={t} key={i}>
                              {t}
                            </option>
                          ))}
                        </Field>
                      </TableCell>
                      <TableCell>
                        <input
                          type="file"
                          // value={values.file}
                          className="form-control"
                          onChange={(event) => {
                            let formData = new FormData();
                            formData.append(
                              "dataFile",
                              event.currentTarget.files[0]
                            );
                            // console.log(formData.get("dataFile"));
                            setFieldValue("file", formData.get("dataFile"));
                          }}
                        />
                      </TableCell>
                      {/* <Button onClick={() => console.log(values)}>hihgi</Button> */}
                    </TableRow>
                  </TableBody>
                </Table>
                <div>
                  <Button color="secondary" onClick={() => prop.resetForm()}>
                    Reset
                  </Button>
                  <Button onClick={() => submitFiles(values)}>Go</Button>
                </div>
              </div>
            );
          }}
        </Formik>
      </TabPanel>
    </React.Fragment>
  );
}

export default UploadForms;
