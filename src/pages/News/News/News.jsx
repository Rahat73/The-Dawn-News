// import React from 'react';

import { Button, Card } from "react-bootstrap";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInsight from "../EditorsInsight/EditorsInsight";
import useTitle from "../../../hooks/useTitle";

const News = () => {
  const news = useLoaderData();
  useTitle("News Details");
  const { title, image_url, details, category_id } = news;
  return (
    <div>
      <Card data-bs-theme="dark">
        <Card.Img variant="top" src={image_url} className="rounded-0" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/categories/${category_id}`}>
            <Button className="rounded-0" variant="secondary">
              <FaArrowLeftLong></FaArrowLeftLong> All news in this category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <EditorsInsight props={"news"}></EditorsInsight>
    </div>
  );
};

export default News;
