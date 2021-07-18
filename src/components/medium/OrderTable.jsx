import React from "react";
import Axios from "axios";
import PropTypes from "prop-types";
import profilePicture from "../../assets/temp/profilePicture.jpg";
import { Heading6, MainBodyText, BodyText } from "../../typography";
import { pageDynamics, colors } from "../../globalStyles";
// import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import {
  Toolbar,
  Paper,
  Avatar,
  TablePagination,
  TableRow,
  TableSortLabel,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Button,
} from "@material-ui/core";

import Loading from "../major/Loading";
import { OrderContext, orderRoute } from "../../context/Api";

// import { Pagination } from "@material-ui/lab";

// import DeleteIcon from "@material-ui/icons/Delete";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

function createData(name, carBrand, date, status) {
  return { name, carBrand, date, status };
}

// Data variable
const rows = [
  createData(
    "Leslie Alexander",
    "Toyota Corolla 2020",
    "10 / 10 / 2021",
    "Completed"
  ),
  createData(
    "Leslie Alexander",
    "Toyota Corolla 2020",
    "10 / 10 / 2021",
    "Completed"
  ),
  createData(
    "Leslie Alexander",
    "Toyota Corolla 2020",
    "10 / 10 / 2021",
    "Completed"
  ),
  createData(
    "Leslie Alexander",
    "Toyota Corolla 2020",
    "10 / 10 / 2021",
    "Completed"
  ),
  createData(
    "Leslie Alexander",
    "Toyota Corolla 2020",
    "10 / 10 / 2021",
    "Completed"
  ),
  createData(
    "Leslie Alexander",
    "Toyota Corolla 2020",
    "10 / 10 / 2021",
    "'Withdrawn'"
  ),
  createData(
    "Leslie Alexander",
    "Toyota Corolla 2020",
    "10 / 10 / 2021",
    "Ongoing"
  ),
  createData(
    "Leslie Alexander",
    "Toyota Corolla 2020",
    "10 / 10 / 2021",
    "Completed"
  ),
  createData(
    "Leslie Alexander",
    "Toyota Corolla 2020",
    "10 / 10 / 2021",
    "Ongoing"
  ),
  createData(
    "Leslie Alexander",
    "Toyota Corolla 2020",
    "10 / 10 / 2021",
    "Withdrawn"
  ),
  createData(
    "Leslie Alexander",
    "Toyota Corolla 2020",
    "10 / 10 / 2021",
    "Withdrawn"
  ),
  createData(
    "Leslie Alexander",
    "Toyota Corolla 2020",
    "10 / 10 / 2021",
    "Ongoing"
  ),
  createData(
    "Leslie Alexander",
    "Toyota Corolla 2020",
    "10 / 10 / 2021",
    "Withdrawn"
  ),
];

const clientToken = JSON.parse(localStorage.getItem("client_token"));
// Handle sorting
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

// Table Headers
const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  { id: "carBrand", disablePadding: false, label: "Car Brand" },
  { id: "date", disablePadding: false, label: "Date" },
  { id: "status", disablePadding: false, label: "Status" },
  { id: "delete", disablePadding: true, label: "" },
];

// Sorting by headers
function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const Order = React.useContext(OrderContext);
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  React.useEffect(() => {
    if (Order.state.data == null || Order.state.data == undefined) {
      Order.dispatch({ type: "LOADING" });
      Axios.get(orderRoute, { headers: { token: clientToken.token } })
        .then((res) => {
          Order.dispatch({ type: "FETCH_SUCCESS", payload: res.data });
        })
        .catch((err) => Order.dispatch({ type: "FETCH_FAILURE", error: err }));
    }
  }, []);

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              <MainBodyText>{headCell.label}</MainBodyText>
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
}));

const EnhancedTableToolbar = () => {
  const classes = useToolbarStyles();

  return (
    <Toolbar className={classes.root}>
      <Heading6>Order History</Heading6>
    </Toolbar>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

export default function OrderTable() {
  const responsive = pageDynamics();
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("name");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(6);

  const Order = React.useContext(OrderContext);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return Order.state.loading ? (
    <Loading />
  ) : (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size="medium"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {Order.state.loading && <Loading />}
              {/* {!Order.state.loading && Order.state.error && "Request Failed"} */}
              {!Order.state.loading &&
                Order.state.data &&
                stableSort(Order.state.data, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}
                      >
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <Avatar
                              src={profilePicture}
                              alt="A"
                              style={{ marginRight: 10 }}
                            />
                            <BodyText>{row.user.name}</BodyText>
                          </div>
                        </TableCell>
                        <TableCell>{row.car.brand.name}</TableCell>
                        <TableCell>{row.created_at}</TableCell>
                        <TableCell>{row.status}</TableCell>
                        <TableCell style={{ padding: 0, margin: 0 }}>
                          <DeleteForeverOutlinedIcon
                            style={{ color: "#ffb3af" }}
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          // rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={6}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          labelRowsPerPage={false}
        />
        {/* <Pagination
          page={page}
          count={Math.ceil(rows.length / 6)}
          rowsPerPage={6}
          // onChangePage={handleChangePage}
          // onChangeRowsPerPage={handleChangeRowsPerPage}
          variant="rounded"
          onChange={handleChangePage}
          // defaultPage={0}
          // showFirstButton={true}
        /> */}
        <div
          className={responsive.mobileOnly}
          style={{ width: "100%", justifyContent: "right", marginTop: 20 }}
        >
          <Button
            style={{
              color: colors.mainBg,
              backgroundColor: colors.main,
              textTransform: "capitalize",
              fontWeight: 700,
            }}
          >
            View All
          </Button>
        </div>
      </Paper>
    </div>
  );
}
