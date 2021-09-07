import React, { useState, useContext } from "react";
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
import {
  UserContext,
  userRoute,
  AuthContext,
  adminUserRoute,
} from "../../context/Api";
import axios from "axios";
import Loading from "./Loading";
import CallToAction from "../basic/CallToAction";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable() {
  const [source, setSource] = useState(userRoute);
  const User = useContext(UserContext);
  const Auth = useContext(AuthContext);
  const responsive = pageDynamics();
  const painting = navigation();
  const classes = useStyles();
  const [clickedUser, setClickedUser] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);
  const adminData = JSON.parse(localStorage.getItem("admin_token"));

  const isMenuOpen = Boolean(anchorEl);

  const handleActionMenuOpen = (event, userData) => {
    setAnchorEl(event.currentTarget);
    setClickedUser(userData);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const actionMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to={`users/${clickedUser.id}`} className={painting.link}>
        <MenuItem onClick={handleMenuClose}>View User</MenuItem>
      </Link>
      <MenuItem onClick={handleMenuClose}>Delete User</MenuItem>
    </Menu>
  );

  React.useEffect(() => {
    axios
      .get(source, {
        headers: { token: adminData.auth_token },
      })
      .then((res) => {
        User.dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((err) => User.dispatch({ type: "FETCH_FAILURE", error: err }));
  }, [source]);
  return User.state.loading ? (
    <Loading />
  ) : (
    <React.Fragment>
      {Auth.state.data.__superadmin__ == true &&
        (source === userRoute ? (
          <CallToAction
            onClick={() => {
              setSource(adminUserRoute);
            }}
          >
            Manage Administrators
          </CallToAction>
        ) : (
          <CallToAction
            onClick={() => {
              setSource(userRoute);
            }}
          >
            Manage Clients
          </CallToAction>
        ))}
      <div style={{ padding: "auto 40px", marginTop: 20, marginBottom: 50 }}>
        <TableContainer component={Paper}>
          {User.state.loading ? (
            <Loading />
          ) : source === userRoute ? (
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
                    <MainBodyText bold>Email</MainBodyText>
                  </TableCell>
                  <TableCell align="right">
                    <MainBodyText bold>Location</MainBodyText>
                  </TableCell>
                  <TableCell align="right">
                    <MainBodyText bold>Order Status</MainBodyText>
                  </TableCell>
                  <TableCell align="right">
                    <MainBodyText bold>Actions</MainBodyText>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {User.state.data.map((row) => (
                  <TableRow key={row.id}>
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
                      <BodyText>{row.email}</BodyText>
                    </TableCell>
                    <TableCell align="right">
                      <BodyText>{row.address}</BodyText>
                    </TableCell>
                    <TableCell align="right">
                      <BodyText>{row.orderStatus}</BodyText>
                    </TableCell>
                    <TableCell align="right">
                      <ButtonBase
                        disableRipple
                        onClick={(e) => handleActionMenuOpen(e, row)}
                      >
                        <Heading6 bold>. . .</Heading6>
                      </ButtonBase>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <MainBodyText bold>Name</MainBodyText>
                  </TableCell>
                  <TableCell align="right">
                    <MainBodyText bold>Email</MainBodyText>
                  </TableCell>
                  <TableCell align="right">
                    <MainBodyText bold>SuperAdmin?</MainBodyText>
                  </TableCell>
                  <TableCell align="right">
                    <MainBodyText bold>UserName</MainBodyText>
                  </TableCell>
                  <TableCell align="right">
                    <MainBodyText bold>Active?</MainBodyText>
                  </TableCell>
                  <TableCell align="right">
                    <MainBodyText bold>Action</MainBodyText>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {User.state.data.map((row) => (
                  <TableRow key={row.id}>
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
                        <BodyText>{row.name}</BodyText>
                      </div>
                    </TableCell>
                    <TableCell align="right">
                      <BodyText>{row.email}</BodyText>
                    </TableCell>
                    <TableCell align="right">
                      <BodyText>{row.__superadmin__}</BodyText>
                    </TableCell>
                    <TableCell align="right">
                      <BodyText>{row.username}</BodyText>
                    </TableCell>
                    <TableCell align="right">
                      <BodyText>{row.active}</BodyText>
                    </TableCell>
                    <TableCell align="right">
                      <ButtonBase
                        disableRipple
                        onClick={(e) => handleActionMenuOpen(e, row)}
                      >
                        <Heading6 bold>. . .</Heading6>
                      </ButtonBase>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
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
    </React.Fragment>
  );
}
