// import React from "react";
import "./LeftNav.css";
import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import ActiveLink from "../../../components/ActiveLink/ActiveLink";
import EditorsInsight from "../../News/EditorsInsight/EditorsInsight";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://the-dawn-news-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  // console.log(categories);
  return (
    <>
      <div className="categories shadow py-3 rounded-1">
        <h4 className="w-75 mx-auto">All Categories</h4>
        <ListGroup
          bg="dark"
          data-bs-theme="dark"
          className="w-75 mx-auto rounded-0"
        >
          {categories.map((category) => (
            <ActiveLink to={`/categories/${category.id}`} key={category.id}>
              <ListGroup.Item action className="bg-transparent ">
                {category.name}
              </ListGroup.Item>
            </ActiveLink>
          ))}
        </ListGroup>
      </div>
      <div className="editors-insight rounded-1 shadow">
        <EditorsInsight props={"main"}></EditorsInsight>
      </div>
    </>
  );
};

export default LeftNav;
