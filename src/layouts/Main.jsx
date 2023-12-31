// import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import Footer from "../pages/shared/Footer/Footer";
import Header from "../pages/shared/Header/Header";
import LeftNav from "../pages/shared/LeftNav/LeftNav";
import RightNav from "../pages/shared/RightNav/RightNav";
import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/shared/NavigationBar/NavigationBar";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <NavigationBar></NavigationBar>
      <Container className="my-5">
        <Row>
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg={6}>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
