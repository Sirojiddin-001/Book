import React from "react";

const BookSliderItem = () => {
  return (
    <div className="bsi">
      <div className="bsi-body">
        <img src="https://new.book.ru/external/books_new/942676.jpg" alt="book" />
      </div>

      <div className="bsi-footer">
        <ul>
          <li>Title</li>
          <li>Author</li>
          <li>Year</li>
        </ul>
      </div>
    </div>
  );
};

export default BookSliderItem;
