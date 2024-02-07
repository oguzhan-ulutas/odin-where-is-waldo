import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./ErrorPage";
import Home from "./Home";

const Router = () => {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
        children: [
        //   { index: true, element: <HomeOutlet /> },
        //   { path: "order", element: <Order /> },
          
        ],
      },
    ]);
    return <RouterProvider router={router} />;
  };
  
  export default Router;