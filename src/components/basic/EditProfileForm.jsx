import React, { useState } from "react";
import { form, Card, colors, fonts } from "../../globalStyles";
import {
  Avatar,
  TextField,
  Button,
  MenuItem,
  Typography,
} from "@material-ui/core";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";

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
  2016,
  2017,
  2018,
  2019,
  2020,
  2021,
];

function EditProfileForm({ picAlt, picSrc, mobile }) {
  const [year, setYear] = useState(2021);
  const changeYear = (event) => {
    setYear(event.target.value);
  };
  let padding;
  mobile ? (padding = "0 20px") : (padding = "0 30%");
  return (
    <React.Fragment>
      <div
        style={{
          padding: padding,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          src={picSrc}
          alt={picAlt || "image"}
          style={{ ...Card.avatar, marginBottom: 30 }}
        >
          <AddAPhotoIcon />
        </Avatar>
        <form noValidate autoComplete="off">
          <label htmlFor="name">
            <Typography style={fonts.bodyText}>Name</Typography>
          </label>
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            style={form.field}
          />
          <TextField
            name="phone"
            label="Phone"
            variant="outlined"
            style={form.field}
          />
          <TextField
            name="brand"
            label="Car Brand"
            variant="outlined"
            style={form.field}
          />
          <TextField
            name="model"
            label="Model"
            variant="outlined"
            style={form.field}
          />
          <TextField
            name="year"
            select
            label="Year"
            variant="outlined"
            onChange={changeYear}
            value={year}
            style={form.field}
          >
            {years.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            name="location"
            label="Location"
            variant="outlined"
            style={form.field}
          />
          <Button
            style={{
              ...form.field,
              backgroundColor: colors.main,
              textTransform: "capitalize",
              color: colors.secondaryBg,
              fontWeight: 600,
            }}
          >
            Save Changes
          </Button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default EditProfileForm;
