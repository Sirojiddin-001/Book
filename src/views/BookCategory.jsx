import React from "react";
import { books } from "../utils/books";
import BookSliderItem from "../components/Sliders/BookSliderItem";

const BookCategory = () => {
  return books && books.length > 0 ? (
    <div className="mb-4">
      <div className="header d-flex justify-content-between">
        <h3 className="uk-text-bold">Category 1</h3>
      </div>

      <div className="uk-child-width-1-2 uk-child-width-1-3@s" data-uk-grid>
        {books.splice(0, 30).map((book) => (
          <div key={book.id}>
            <BookSliderItem
              id={book.id}
              cover={book.cover}
              title={book.name}
              author={book.author}
              year={book.year}
            />
          </div>
        ))}
      </div>
    </div>
  ) : null;
};

export default BookCategory;
