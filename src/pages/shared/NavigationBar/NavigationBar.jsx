// import React from 'react';

import { useContext } from "react";
import {
  Container,
  Nav,
  Navbar,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { FaCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary fw-bold"
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto align-items-center ">
            <Link
              className="text-decoration-none text-secondary-emphasis"
              to="/categories/0"
            >
              Home
            </Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#career">Career</Nav.Link>
          </Nav>
          <Nav className="align-items-center">
            {user &&
              (user.photoURL ? (
                <Nav.Link href="#profile">
                  <OverlayTrigger
                    placement={`left`}
                    overlay={
                      <Tooltip>
                        <strong>{user.displayName}</strong>.
                      </Tooltip>
                    }
                  >
                    <img src={user.photoURL} alt="" style={{ width: "2em" }} />
                  </OverlayTrigger>
                </Nav.Link>
              ) : (
                <Nav.Link href="#profile">
                  <FaCircleUser size={"2em"}></FaCircleUser>
                </Nav.Link>
              ))}
            {user ? (
              <Link onClick={handleLogOut} to={"/login"}>
                <button type="button" className="btn btn-secondary rounded-0">
                  <span className="fw-bold px-3">Log Out</span>
                </button>
              </Link>
            ) : (
              <Link to={"/login"}>
                <button type="button" className="btn btn-secondary rounded-0">
                  <span className="fw-bold px-3">Login</span>
                </button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
