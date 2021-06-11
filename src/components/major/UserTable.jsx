import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { MainBodyText, BodyText, Heading6 } from "../../typography";
import { Table, Menu, MenuItem, ButtonBase, Button } from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { navigation, pageDynamics, colors } from "../../globalStyles";
import profileImage from "../../assets/temp/profilePicture.jpg";
import { UserContext, userRoute } from "../../context/Api";
import axios from "axios";
import Loading from "./Loading";

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
  const [rows, setRows] = React.useState([]);
  const User = React.useContext(UserContext);
  const responsive = pageDynamics();
  const painting = navigation();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  // const [isDia, setIsDia] = React.useState(false);

  const isMenuOpen = Boolean(anchorEl);
  // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleActionMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // const handleMobileMenuClose = () => {
  //   setMobileMoreAnchorEl(null);
  // };

  const handleMenuClose = () => {
    setAnchorEl(null);
    // handleMobileMenuClose();
  };

  const actionMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      // id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to="users/view" className={painting.link}>
        <MenuItem onClick={handleMenuClose}>View User</MenuItem>
      </Link>
      <MenuItem onClick={handleMenuClose}>Delete User</MenuItem>
    </Menu>
  );

  React.useEffect(() => {
    axios
      .get(userRoute, {
        headers: { token: "f45165058243964ce7acff87206efb97" },
      })
      .then((res) => {
        // User.dispatch({type: "FETCH_SUCCESS", payload: res.data, loading: false})
        setRows((r) => (r = res.data));
      })
      .catch((err) => User.dispatch({ type: "FETCH_FAILURE", error: err }));
  }, []);
  return User.state.loading ? (
    <Loading />
  ) : (
    <div style={{ padding: "auto 40px", marginTop: 20, marginBottom: 50 }}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <MainBodyText bold>Name</MainBodyText>
              </TableCell>
              <TableCell align="right">
                <MainBodyText bold>Phone</MainBodyText>
              </TableCell>
              <TableCell align="right">
                <MainBodyText bold>Car Brand</MainBodyText>
              </TableCell>
              <TableCell align="right">
                <MainBodyText bold>Location</MainBodyText>
              </TableCell>
              <TableCell align="right">
                <MainBodyText bold>Order Status</MainBodyText>
              </TableCell>
              <TableCell align="right">
                <MainBodyText bold>Action</MainBodyText>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={profileImage}
                      alt=""
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        marginRight: 20,
                      }}
                    />
                    <BodyText>{row.company_name}</BodyText>
                  </div>
                </TableCell>
                <TableCell align="right">
                  <BodyText>{row.contact_number}</BodyText>
                </TableCell>
                <TableCell align="right">
                  <BodyText>{row.carBrand}</BodyText>
                </TableCell>
                <TableCell align="right">
                  <BodyText>{row.location}</BodyText>
                </TableCell>
                <TableCell align="right">
                  <BodyText>{row.orderStatus}</BodyText>
                </TableCell>
                <TableCell align="right">
                  <ButtonBase disableRipple onClick={handleActionMenuOpen}>
                    <Heading6 bold>. . .</Heading6>
                  </ButtonBase>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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
      {actionMenu}
    </div>
  );
}
