// import React from 'react';
import moment from "moment/moment";
import logo from "../../../assets/TDN-logo.png";
import "./Header.css";
import { Container } from "react-bootstrap";
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
    </>
  );
};

export default Header;
