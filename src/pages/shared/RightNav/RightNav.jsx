// import React from "react";
import "./RightNav.css";

import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";
import QZone from "../QZone/QZone";

const RightNav = () => {
  return (
    <div>
      <div className="login-with py-3 shadow rounded-1">
        <h4 className="w-75 mx-auto">Login with</h4>
        <Button
          className="my-2 px-4 d-flex align-items-center rounded-0 w-75 mx-auto"
          variant="outline-primary"
        >
          <FaGoogle className="me-2" /> Login with Google
        </Button>
        <Button
          className="my-2 px-4 d-flex align-items-center rounded-0 w-75 mx-auto"
          variant="outline-secondary"
        >
          <FaGithub className="me-2" /> Login with Github
        </Button>
      </div>
      <div className="my-3 shadow find-us py-3 rounded-1">
        <h4 className="w-75 mx-auto">Find us on</h4>
        <ListGroup
          bg="dark"
          data-bs-theme="dark"
          className="shadow-sm w-75 mx-auto rounded-0"
        >
          <ListGroup.Item action className="bg-transparent">
            <FaFacebook /> Facebook{" "}
          </ListGroup.Item>
          <ListGroup.Item action className="bg-transparent">
            <FaTwitter /> Twitter{" "}
          </ListGroup.Item>
          <ListGroup.Item action className="bg-transparent">
            <FaYoutube /> YouTube{" "}
          </ListGroup.Item>
          <ListGroup.Item action className="bg-transparent">
            <FaInstagram /> Instagram{" "}
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div className="my-3 shadow background-image">
        <h3 className="fw-bold text-center pt-5">
          Create an Amazing Newspaper
        </h3>
        <p className="text-center">
          Discover thousands of options, easy to customise layouts, one click to
          import demo and much more.
        </p>
        <button
          type="button"
          className="btn btn-secondary rounded-0 d-block mx-auto"
        >
          <span className="fw-bold px-3">Learn More</span>
        </button>
      </div>
    </div>
  );
};

export default RightNav;
