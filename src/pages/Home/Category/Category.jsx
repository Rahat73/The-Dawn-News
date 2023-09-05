// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Newscard from "../NewsCard/Newscard";
import useTitle from "../../../hooks/useTitle";

// import { useParams } from "react-router-dom";

const Category = () => {
  // const { id } = useParams();
  const categoryNews = useLoaderData();
  useTitle("Home");
  return (
    <div>
      {categoryNews.map((news) => (
        <Newscard key={news._id} news={news}></Newscard>
      ))}
    </div>
  );
};

export default Category;
