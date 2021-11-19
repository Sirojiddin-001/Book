import AppLayout from "./layouts/AppLayout";
import BookSlider from "./components/Sliders/BookSlider";
import { useTranslation } from "react-i18next";
import { books } from "./utils/constants";

function App() {
  const { t } = useTranslation();

  return (
    <AppLayout>
      <BookSlider title={t("new_books")} books={books} />
      <BookSlider title={t("new_books")} books={books} />
      <BookSlider title={t("new_books")} books={books} />
    </AppLayout>
  );
}

export default App;
