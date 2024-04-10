import { createBrowserRouter } from "react-router-dom";
import Content from "~/components/content";
import Collection from "~/views/collection";
import Home from "~/views/home";
import Search from "~/views/search";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Content />,
    children: [
      {
        path: "true",
        element: <Home />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "collections",
        element: <Collection />,
      },
    ],
  },
]);

export default routes;
