import { number } from "prop-types";
import React from "react";
import PropTypes from "prop-types";

const Book = ({ title = "unknown", author = "anonymous", price = 0 }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <h4>{price}</h4>
    </div>
  );
};


export default Book;
