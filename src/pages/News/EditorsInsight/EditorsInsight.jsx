/* eslint-disable react/prop-types */
// import React from 'react';

import { Card, Col, Row } from "react-bootstrap";
import img1 from "../../../assets/editorsInsight1.png";
import img2 from "../../../assets/editorsInsight2.png";
import img3 from "../../../assets/editorsInsight3.png";

const EditorsInsight = ({ props }) => {
  //   console.log(props);
  return (
    <div className="my-5 py-3 px-3">
      <h4>Editors Insight</h4>
      <Row xs={1} lg={props === "main" ? 1 : 3} className="g-3 ">
        <Col>
          <Card data-bs-theme="dark">
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title>Texhnological advancement</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card data-bs-theme="dark">
            <Card.Img variant="top" src={img2} />
            <Card.Body>
              <Card.Title>Online newspapers</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card data-bs-theme="dark">
            <Card.Img variant="top" src={img3} />
            <Card.Body>
              <Card.Title>Into the future</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EditorsInsight;
