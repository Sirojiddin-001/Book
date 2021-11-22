import React from "react";
import BookSlider from "../components/Sliders/BookSlider"
import { useTranslation } from "react-i18next";
import { books } from "../utils/books";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <BookSlider title={t("new_books")} books={books} />
      <BookSlider title={t("new_books")} books={books} />
      <BookSlider title={t("new_books")} books={books} />
    </div>
  );
};

export default Home;
