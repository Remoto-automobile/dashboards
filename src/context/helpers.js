import React from "react";
import { FieldArray, FastField } from "formik";
import { TableCell, TableRow, Button } from "@material-ui/core";
import Axios from "axios";

import {
  adminBrandRoute,
  adminExactcomponentRoute,
  adminModelRoute,
  adminSystemRoute,
  adminFileUploadRoute,
} from "../context/Api";

const token =
  localStorage.getItem("admin_token") &&
  JSON.parse(localStorage.getItem("admin_token")).auth_token;

export function UploadComponentDataForm({ components, models }) {
  return (
    // <TableRow>
    <FieldArray name="component">
      {(fieldArrayProp) => {
        const { remove, form, insert } = fieldArrayProp;
        const { values } = form;
        const { component } = values;
        return (
          <React.Fragment>
            {component.map((c, index) => (
              <TableRow>
                <TableCell>
                  <FastField as="select" name={`component[${index}].name`}>
                    {components.map((comp, i) => (
                      <option key={i} value={comp.id}>
                        {comp.name}
                      </option>
                    ))}
                  </FastField>
                </TableCell>

                <TableCell>
                  <FastField as="select" name={`component[${index}].model`}>
                    {models.map((model, i) => (
                      <option key={i} value={model.id}>
                        {model.name}
                      </option>
                    ))}
                  </FastField>
                </TableCell>

                <TableCell>
                  <FastField name={`component[${index}].price`} />
                </TableCell>

                <TableCell>
                  <FastField name={`component[${index}].year`} />
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => remove(index)}
                    color="secondary"
                    variant="contained"
                  >
                    -
                  </Button>
                  <Button
                    onClick={() =>
                      insert(index, {
                        name: component[index].name,
                        model: component[index].model,
                        year: component[index].year,
                        price: component[index].price,
                      })
                    }
                    color="primary"
                    variant="contained"
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

export function UploadModelForm({ brands }) {
  return (
    // <TableRow>
    <FieldArray name="model">
      {(fieldArrayProp) => {
        const { push, remove, form, insert } = fieldArrayProp;
        const { values } = form;
        const { model } = values;
        return (
          <React.Fragment>
            {model.map((c, index) => (
              <TableRow>
                <TableCell>
                  <FastField as="select" name={`model[${index}].brand`}>
                    {brands.map((brand, i) => (
                      <option key={i} value={brand.id}>
                        {brand.name}
                      </option>
                    ))}
                  </FastField>
                </TableCell>

                <TableCell>
                  <FastField name={`model[${index}].name`} />
                </TableCell>

                <TableCell>
                  <Button
                    onClick={() => remove(index)}
                    color="secondary"
                    variant="contained"
                  >
                    -
                  </Button>
                  <Button
                    onClick={() =>
                      push({
                        name: "",
                        brand: model[index].brand,
                      })
                    }
                    color="primary"
                    variant="contained"
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

export function UploadProbabilityForm({ brand, components }) {
  return (
    <FieldArray name="probability">
      {(prop) => {
        const { push, remove, form, insert } = prop;
        const { values } = form;
        const { probability } = values;

        return probability.map((p, index) => (
          <TableRow>
            <TableCell>
              <FastField as="select" name={`probability[${index}].component`}>
                {components.map((comp, i) => (
                  <option key={i} value={comp.id}>
                    {comp.name}
                  </option>
                ))}
              </FastField>
            </TableCell>
            <TableCell>
              <FastField as="select" name={`probability[${index}].brand`}>
                {brand.map((b, i) => (
                  <option key={i} value={b.id}>
                    {b.name}
                  </option>
                ))}
              </FastField>
            </TableCell>
            <TableCell>
              <FastField name={`probability[${index}].probability`} />
            </TableCell>
            <TableCell>
              <Button onClick={() => remove(index)}>-</Button>
              <Button
                onClick={() =>
                  insert(index, {
                    component: probability[index].component,
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

export function UploadBrandForm() {
  return (
    <FieldArray name="name">
      {(prop) => {
        const { push, remove, form, insert } = prop;
        const { values } = form;
        const { name } = values;

        return name.map((p, index) => (
          <TableRow>
            <TableCell>
              <FastField name={`name[${index}]`} />
            </TableCell>
            <TableCell>
              <Button onClick={() => remove(index)}>-</Button>
              <Button onClick={() => push("")}>+</Button>
            </TableCell>
          </TableRow>
        ));
      }}
    </FieldArray>
  );
}

export function submitComponents(data) {
  Axios.post(
    `${adminExactcomponentRoute}/bulk`,
    { component: data.component },
    { headers: { token: token } }
  )
    .then((res) => {
      alert(`${res.data} Fields Added`);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
      alert("Failed to Add Fields");
    });
}

export function submitProbability(data) {
  Axios.post(
    `${adminSystemRoute}/bulk_prob`,
    { probability: data.probability },
    { headers: { token: token } }
  )
    .then((res) => {
      alert(`${res.data} Fields Added`);
      //   console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
      alert("Failed to Add Fields");
    });
}

export function submitBrand(data) {
  Axios.post(
    `${adminBrandRoute}/bulk`,
    { name: data.name },
    { headers: { token: token } }
  )
    .then((res) => {
      alert(`${res.data} Fields Added`);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
      alert("Failed to Add Fields");
    });
}

export function submitModel(data) {
  Axios.post(
    `${adminModelRoute}/bulk`,
    { model: data.model },
    { headers: { token: token } }
  )
    .then((res) => {
      alert(`${res.data} Fields Added`);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
      alert("Failed to Add Fields");
    });
}

export function submitFiles(data, disp) {
  console.log(data);
  Axios.post(adminFileUploadRoute, data, {
    headers: {
      token: token,
    },
  })
    .then((res) => {
      res.status == 201
        ? disp({
            type: "feedbackDialog",
            payload: { success: true, active: true, content: res.data },
          })
        : disp({
            type: "feedbackDialog",
            payload: { success: false, active: true, content: res.data },
          });
    })
    .catch((err) => {
      disp({
        type: "feedbackDialog",
        payload: {
          success: false,
          active: true,
          content: "Failed to add fields, check file type",
        },
      });
      console.log(err);
    });
}

export function sqlDateToTimestamp(dateString) {
  let dateParts = dateString.split("-");
  let jsDate = new Date(
    dateParts[0],
    dateParts[1] - 1,
    dateParts[2].substr(0, 2)
  );
  return jsDate.getTime();
}

export function sqlDateToTime(dateString, time = false) {
  let dateParts = dateString.split("-");
  let jsDate = new Date(
    dateParts[0],
    dateParts[1] - 1,
    dateParts[2].substr(0, 2)
  );

  if (time === true) {
    let timePart = dateString.split("T");
    timePart = timePart[1].split(":");
    return (
      jsDate.toLocaleDateString() +
      " | <strong style='color: #b51515'>" +
      timePart[0] +
      ":" +
      timePart[1] +
      "</strong>"
    );
  }
  return jsDate.toLocaleDateString();
}
