import Home from "../views/Home";
import BookDetails from "../views/BookDetails";
import BookCategory from "../views/BookCategory";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/book/:id",
    element: <BookDetails />,
  },
  {
    path: "/book-category/:id",
    element: <BookCategory />,
  },
  {
    path: "*",
    element: <div>About</div>,
  }
];
