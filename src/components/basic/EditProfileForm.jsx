import React, { useState } from "react";
import Axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";

import { form, Card, colors } from "../../globalStyles";
import { FormControl, TextField, Button, MenuItem } from "@material-ui/core";
import { BodyText } from "../../typography";
import { CarContext, carRoute } from "../../context/Api";
import Loading from "../major/Loading";

const years = [
  2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017,
  2018,
];
const editProfileSchema = Yup.object({
  name: Yup.string()
    .min(3, "Company name is too short")
    .required("Name cannot be left blank"),
  phone: Yup.string()
    .matches(/^[0-9\+\(\)\-\ ]+$/, "Invalid Phone number")
    .min(7, "Phone number cannot be less than 7 characters")
    .max(20, "Maximum Length exceeded"),
  location: Yup.string().required("Location cannot be left blank"),
});
const clientData = JSON.parse(localStorage.getItem("client_token"));

function EditProfileForm({ picAlt, picSrc, mobile }) {
  const Car = React.useContext(CarContext);
  const formik = useFormik({
    initialValues: {
      name: clientData.company_name,
      phone: clientData.contact_number,
      brand: "",
      model: "",
      year: "",
      location: clientData.address,
    },

    validationSchema: editProfileSchema,
    onSubmit: (values) => {
      alert(values.name);
    },
  });
  const [year, setYear] = useState(2018);
  const changeYear = (event) => {
    setYear(event.target.value);
  };
  let width;
  mobile ? (width = "90%") : (width = "35%");

  React.useEffect(() => {
    Car.dispatch({ type: "LOADING" });
    Axios.get(`${carRoute}/${clientData.id}`, {
      headers: { token: clientData.token },
    })
      .then((res) => Car.dispatch({ type: "FETCH_SUCCESS", payload: res.data }))
      .catch((err) => Car.dispatch({ type: "FETCH_FAILURE", error: err }));
  }, []);

  return (
    <form
      noValidate
      autoComplete="off"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        width: width,
        marginBottom: 40,
      }}
      onSubmit={formik.handleSubmit}
    >
      <FormControl margin="normal">
        <label htmlFor="name">
          <BodyText bold>Name</BodyText>
        </label>
        <TextField
          name="name"
          // label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          variant="outlined"
        />
      </FormControl>

      <FormControl margin="normal">
        <label htmlFor="phone">
          <BodyText bold>Phone</BodyText>
        </label>
        <TextField
          name="phone"
          value="2348000000000"
          variant="outlined"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />
      </FormControl>
      {Car.state.loading || Car.state.error ? (
        <Loading />
      ) : (
        <React.Fragment>
          <FormControl margin="normal">
            <label htmlFor="brand">
              <BodyText bold>Brand</BodyText>
            </label>
            <TextField
              name="brand"
              value=""
              disabled
              value={Car.state.data.brand.name}
              variant="outlined"
              // style={form.field}
            />
          </FormControl>

          <FormControl margin="normal">
            <label htmlFor="model">
              <BodyText bold>Model</BodyText>
            </label>
            <TextField
              name="model"
              // value="Corolla"
              variant="outlined"
              disabled
              value={Car.state.data.model.name}
              // style={form.field}
            />
          </FormControl>

          <FormControl margin="normal">
            <label htmlFor="year">
              <BodyText bold>Year</BodyText>
            </label>
            <TextField
              name="year"
              disabled
              value={Car.state.data.year}
              variant="outlined"
              onChange={changeYear}
              // value={year}
              // style={form.field}
            >
              {/* {years.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))} */}
            </TextField>
          </FormControl>
        </React.Fragment>
      )}

      <FormControl margin="normal">
        <label htmlFor="location">
          <BodyText bold>Location</BodyText>
        </label>
        <TextField
          name="location"
          variant="outlined"
          value={formik.values.location}
          onChange={formik.handleChange}
          error={formik.touched.location && Boolean(formik.errors.location)}
          helperText={formik.touched.location && formik.errors.location}
        />
      </FormControl>
      <Button
        style={{
          // ...form.field,
          backgroundColor: colors.main,
          textTransform: "capitalize",
        }}
        type="submit"
      >
        <BodyText bold color={colors.mainBg}>
          Save Changes
        </BodyText>
      </Button>
    </form>
  );
}

export default EditProfileForm;
