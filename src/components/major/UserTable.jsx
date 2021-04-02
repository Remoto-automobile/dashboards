import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, phone, carBrand, location, orderStatus) {
  return { name, phone, carBrand, location, orderStatus };
}

const rows = [
  createData(
    "Leslie Alexander",
    "+23445024566",
    "Toyota Corolla, 2020",
    "Lagos",
    "Completed"
  ),
  createData(
    "Ronald Richards",
    "+23445024566",
    "Toyota Corolla, 2020",
    "Lagos",
    "Completed"
  ),
  createData(
    "Jane Richards",
    "+23445024566",
    "Toyota Corolla, 2020",
    "Lagos",
    "Completed"
  ),
  createData(
    "Robert Fox",
    "+23445024566",
    "Toyota Corolla, 2020",
    "Lagos",
    "Completed"
  ),
  createData(
    "Jenny Wilson",
    "+23445024566",
    "Toyota Corolla, 2020",
    "Lagos",
    "Completed"
  ),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Car Brand</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Order Status</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.carBrand}</TableCell>
              <TableCell align="right">{row.location}</TableCell>
              <TableCell align="right">{row.orderStatus}</TableCell>
              <TableCell align="right">...</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
