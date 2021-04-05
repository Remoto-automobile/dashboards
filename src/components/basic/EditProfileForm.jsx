import React, { useState } from "react";
import { form, Card, colors } from "../../globalStyles";
import {
  InputLabel,
  FormControl,
  TextField,
  Button,
  MenuItem,
} from "@material-ui/core";
import { BodyText } from "../../typography";

const years = [
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
  2016,
  2017,
  2018,
];

function EditProfileForm({ picAlt, picSrc, mobile }) {
  const [year, setYear] = useState(2018);
  const changeYear = (event) => {
    setYear(event.target.value);
  };
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
    >
      <FormControl margin="normal">
        <label htmlFor="name">
          <BodyText bold>Name</BodyText>
        </label>
        <TextField
          name="name"
          // label="Name"
          value="Remoto Official"
          variant="outlined"
          // style={form.field}
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
          // style={form.field}
        />
      </FormControl>

      <FormControl margin="normal">
        <label htmlFor="brand">
          <BodyText bold>Brand</BodyText>
        </label>
        <TextField
          name="brand"
          value="Toyota"
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
          value="Corolla"
          variant="outlined"
          // style={form.field}
        />
      </FormControl>

      <FormControl margin="normal">
        <TextField
          name="year"
          select
          variant="outlined"
          onChange={changeYear}
          value={year}
          // style={form.field}
        >
          {years.map((year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>

      <FormControl margin="normal">
        <TextField
          name="location"
          value="Lagos"
          variant="outlined"
          // style={form.field}
        />
      </FormControl>
      <Button
        style={{
          // ...form.field,
          backgroundColor: colors.main,
          textTransform: "capitalize",
        }}
      >
        <BodyText bold color={colors.mainBg}>
          Save Changes
        </BodyText>
      </Button>
    </form>
  );
}

export default EditProfileForm;
