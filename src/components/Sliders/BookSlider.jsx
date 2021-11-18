import React from "react";
import BookSliderItem from "./BookSliderItem";

const BookSlider = () => {
  return (
    <div
      className="uk-card uk-background-default uk-border-rounded border-500"
      data-tabindex="-1"
      data-uk-slider="finite: true; sets: true"
    >
      <div className="card-header">
        <h4 className="card-title uk-text-truncate">New Books</h4>
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
        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-grid">
          <li>
            <BookSliderItem />
          </li>
          <li>
            <BookSliderItem />
          </li>
          <li>
            <BookSliderItem />  
          </li>
          <li>
            <div class="uk-panel">
              <img src="images/slider4.jpg" alt="" />
              <div class="uk-position-center uk-panel">
                <h1>4</h1>
              </div>
            </div>
          </li>
          <li>
            <div class="uk-panel">
              <img src="images/slider5.jpg" alt="" />
              <div class="uk-position-center uk-panel">
                <h1>5</h1>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BookSlider;
