import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
export const Header = ({
  showPast,
  showSearch,
  showCountryName,
  countryName,
  searchValue,
  handleSearch,
  countryList,
}) => {
  return (
    <>
      <Navbar bg="dark" expand="lg" className="d-flex">
        <Navbar.Brand className="text-white mx-3" href="/">
          Covid 19 Tracker
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="mr-auto">
            {showPast && (
              <Link
                className="text-white btn btn-outline-warning mx-2 px-3 py-1 my-2"
                to="/past"
              >
                Past
              </Link>
            )}
            {showCountryName && (
              <Nav.Item className="text-white mx-2 px-3 py-1 my-2">
                <b style={{ fontSize: "120%" }}>{countryName}</b>
              </Nav.Item>
            )}
          </Nav>
          {showSearch && (
            <Form className="d-flex">
              <FormControl
                type="text"
                placeholder="Search"
                className="mx-5"
                value={searchValue}
                onChange={(e) => handleSearch(e.target.value)}
                autoFocus={true}
              />
            </Form>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

const useStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});
