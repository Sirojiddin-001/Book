import Home from "../views/Home";
import BookDetails from "../views/BookDetails";

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
    path: "*",
    element: <div>About</div>,
  }
];
