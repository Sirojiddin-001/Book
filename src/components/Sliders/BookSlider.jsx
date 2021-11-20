import React from "react";
import BookSliderItem from "./BookSliderItem";

const BookSlider = ({ title, books }) => {
  return books ? (
    <div
      className="uk-card uk-background-default uk-border-rounded border-500 mb-4"
      data-tabindex="-1"
      data-uk-slider="finite: true; sets: true"
    >
      <div className="card-header">
        <h4 className="card-title uk-text-truncate">{title}</h4>
        <div className="ml-auto d-flex">
          <a
            className="slider-btn mr-2"
            href="#prev"
            data-uk-slider-item="previous"
          >
            <span className="far fa-arrow-left"></span>
          </a>
          <a className="slider-btn" href="#next" data-uk-slider-item="next">
            <span className="far fa-arrow-right"></span>
          </a>
        </div>
      </div>
      <div className="my-2 card-body">
        <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-grid">
          {books.map((book) => (
            <li key={book.id}>
              <BookSliderItem
                id={book.id}
                cover={book.cover}
                title={book.name}
                author={book.author}
                year={book.year}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : null;
};

export default BookSlider;
