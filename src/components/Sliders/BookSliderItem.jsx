import React from "react";
import { Link } from "react-router-dom";

const BookSliderItem = ({ id, cover, title, author, year }) => {
  return (
    <div className="bsi">
      <Link to={`/book/${id}`}>
        <div className="bsi-body">
          <img src={`https://new.book.ru${cover}`} alt={title} />
        </div>

        <div className="bsi-footer">
          <ul>
            <li>{title}</li>
            <li>{author}</li>
            <li>{year}</li>
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default BookSliderItem;
