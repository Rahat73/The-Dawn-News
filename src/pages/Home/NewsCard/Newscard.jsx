/* eslint-disable react/prop-types */
// import React from 'react';

import moment from "moment";
import { Card, Image } from "react-bootstrap";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareNodes,
  FaStar,
} from "react-icons/fa6";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const Newscard = ({ news }) => {
  const { _id, rating, total_view, title, author, image_url, details } = news;
  return (
    <Card className="my-4 rounded-1 shadow border-0" data-bs-theme="dark">
      <Card.Header className="d-flex align-items-center">
        <Image
          src={author?.img}
          roundedCircle
          className="img-fluid"
          style={{ height: "50px" }}
        />
        <div className="ps-3 flex-grow-1">
          <p className="mb-0">{author?.name}</p>
          <small>{moment(author?.published_date).format("yyyy-MM-D")}</small>
        </div>
        <div>
          <FaRegBookmark></FaRegBookmark> <FaShareNodes></FaShareNodes>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <Image src={image_url} className="img-fluid rounded-1 mb-3" />
          {details.length > 250 ? (
            <>
              {details.slice(0, 250)}...{" "}
              <Link to={`/news/${_id}`}>Read more</Link>
            </>
          ) : (
            <>{details}</>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex ">
        <div className="mx-5 flex-grow-1">
          <span className="pe-2">Rating:</span>
          <Rating
            readonly
            initialRating={rating.number}
            emptySymbol={<FaRegStar></FaRegStar>}
            fullSymbol={<FaStar className="text-warning"></FaStar>}
            fractions={2}
          />
        </div>
        <div className="mx-5">
          <FaEye></FaEye>
          <span className="px-2">{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default Newscard;
