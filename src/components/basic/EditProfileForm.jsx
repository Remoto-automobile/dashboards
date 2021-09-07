import React, { useState } from "react";
import Axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";

import { colors } from "../../globalStyles";
import { FormControl, TextField, Button } from "@material-ui/core";
import { BodyText } from "../../typography";
import { UserContext, profileRoute } from "../../context/Api";
import CallToAction from "./CallToAction";
import { useHistory } from "react-router-dom";

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
  const User = React.useContext(UserContext);
  const history = useHistory();

  const buttonRef = React.useRef(null);

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
      Axios.put(
        `${profileRoute}/edit/${clientData.id}`,
        {
          company_name: values.name,
          contact_number: values.phone,
          address: values.location,
        },
        { headers: { token: clientData.token } }
      )
        .then((res) => {
          User.dispatch({ type: "POST_SUCCESS", payload: res.data });
          console.log(res.data);
        })
        .catch((err) => {
          User.dispatch({ type: "POST_FAILURE", error: err });
          console.log(err);
        });
    },
  });

  let width;
  mobile ? (width = "90%") : (width = "35%");

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
      <div
        style={{
          borderRadius: 10,
          backgroundColor: colors.secondaryBg,
          marginBottom: 10,
          marginTop: 10,
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CallToAction
          size="big"
          onClick={() => {
            history.push("/client/car_info");
          }}
        >
          View All Cars
        </CallToAction>
      </div>

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
        ref={buttonRef}
      >
        <BodyText bold color={colors.mainBg}>
          Save Changes
        </BodyText>
      </Button>
    </form>
  );
}

export default EditProfileForm;
