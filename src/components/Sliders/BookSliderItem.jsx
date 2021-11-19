import React from "react";

const BookSliderItem = ({ id, cover, title, author, year }) => {
  return (
    <div className="bsi">
      <a href={`#${id}`}>
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
      </a>
    </div>
  );
};

export default BookSliderItem;
