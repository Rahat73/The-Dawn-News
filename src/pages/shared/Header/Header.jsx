// import React from 'react';
import moment from "moment/moment";
import logo from "../../../assets/TDN-logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="text-center tdn-logo">
      <img src={logo} alt="tdn-logo" />
      <p className="text-white pb-3">{moment().format("MMMM Do, YYYY")}</p>
    </div>
  );
};

export default Header;
