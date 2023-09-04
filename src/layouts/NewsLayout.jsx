// import React from "react";
import Header from "../pages/shared/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import RightNav from "../pages/shared/RightNav/RightNav";
import Footer from "../pages/shared/Footer/Footer";
import { useEffect } from "react";

const NewsLayout = () => {
  useEffect(() => {
    // Scroll to the top of the page when the pathname changes
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header></Header>
      <Container className="my-5">
        <Row>
          <Col lg={9}>
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

export default NewsLayout;
