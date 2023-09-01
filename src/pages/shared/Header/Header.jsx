// import React from 'react';
import moment from "moment/moment";
import logo from "../../../assets/TDN-logo.png";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <>
      <div className="text-center tdn-logo pb-3">
        <img src={logo} alt="tdn-logo" className="img-fluid" />
        <p className="text-white pb-3">{moment().format("MMMM Do, YYYY")}</p>
        <Container className="latest-news py-2 text-start shadow-sm d-flex">
          <button type="button" className="btn btn-secondary rounded-0">
            <span className="fw-bold px-3">Latest</span>
          </button>
          <Marquee pauseOnHover={true} speed={100}>
            I can be a React component, multiple React components, or just some
            text.
          </Marquee>
        </Container>
      </div>

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
            <Nav className="mx-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#career">Career</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#profile">Profile</Nav.Link>
              <button type="button" className="btn btn-secondary rounded-0">
                <span className="fw-bold px-3">Login</span>
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
