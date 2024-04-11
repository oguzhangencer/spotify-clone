import { createBrowserRouter } from "react-router-dom";
import App from "~/App";
import Collection from "~/views/collection";
import Home from "~/views/home";
import Search from "~/views/search";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        path: "collection",
        element: <Collection />,
      },
    ],
  },
]);

export default routes;
