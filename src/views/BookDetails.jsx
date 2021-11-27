import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { books } from "../utils/books";
import BookSlider from "../components/Sliders/BookSlider";

const BookDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const data = books.filter((book) => book.id === +id);
    setData(data);
  }, [id]);

  return data.length > 0 ? (
    <>
    <div className="uk-card uk-background-default uk-border-rounded border-500 mb-4">
      <div className="card-header">
        <h4 className="card-title-details">{data[0].name}</h4>
      </div>
      <div className="my-2 card-body uk-grid">
        <div className="uk-width-1-3@s">
          <img
            className="book-details-img"
            src={`https://new.book.ru${data[0].cover}`}
            alt=""
          />

          <button className="mt-3 uk-width-1-1 uk-button book-primary-btn">
            <i className="mr-2 far fa-lg fa-eye"></i>
            View
          </button>
          <button className="mt-3 uk-width-1-1 uk-button book-danger-btn">
            <i className="mr-2 far fa-lg fa-heart"></i>
            Save
          </button>
          <button className="mt-3 uk-width-1-1 uk-button book-success-btn">
            <i className="mr-2 far fa-lg fa-download"></i>
            Download
          </button>
        </div>

        <div className="uk-width-2-3@s mt-4 mt-sm-0">
          <div className="p-3 border-500 uk-border-rounded uk-text-small">
            <div className="mb-2">
              <span className="d-flex flex-column font-semibold">Author</span>
              <span>{data[0].author}</span>
            </div>

            <div className="mb-2">
              <span className="d-flex flex-column font-semibold">Year </span>
              <span>{data[0].year}</span>
            </div>

            <div className="mb-2">
              <span className="d-flex flex-column font-semibold">
                Public name{" "}
              </span>
              <span>{data[0].pub_name}</span>
            </div>
          </div>
          <div className="mt-4 mb-2">
            <ul data-uk-accordion className="category-list">
              <li>
                <a className="uk-accordion-title" href="#books">
                  Description
                </a>
                <div className="uk-accordion-content p-3 uk-text-small">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Accusantium debitis omnis dignissimos labore error? Pariatur
                  minima mollitia repellendus. Nihil, eaque adipisci. Placeat
                  eligendi dicta, maiores sunt ea quos omnis nostrum! Iure
                  quaerat enim aspernatur reprehenderit ipsa laboriosam ea et,
                  quo harum vel, ratione nulla non, reiciendis illo porro
                  adipisci molestias. Reprehenderit aperiam deserunt eius
                  repellendus ab eligendi consectetur! Est perspiciatis optio,
                  fuga repellendus delectus, fugiat mollitia ea asperiores dolor
                  officia aspernatur ipsum? Reiciendis aut libero ab. Quas quae
                  sequi ea sed ex, labore quod corporis, in minus voluptatem
                  iure asperiores quibusdam quo, eius inventore consequuntur
                  voluptates similique temporibus doloribus fuga.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <BookSlider title="Books" books={books}/>
  </>) : null;
};

export default BookDetails;
