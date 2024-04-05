import Content_AddCar from "./Components/Content/Content_AddCar";
import Content_CarDetail from "./Components/Content/Content_CarDetail";
import Content_CarList from "./Components/Content/Content_CarList";
import Header from "./Components/Header/Header";

import "./index.css";
import { Fragment } from "react";
import { createBrowserRouter, useParams, Outlet } from "react-router-dom";

const AddCarPage = () => {
  return <Content_AddCar />;
};

const CarDetailPage = () => {
  const params = useParams();

  console.log(params.id);

  return <Content_CarDetail />;
};

const CarListPage = () => {
  return <Content_CarList />;
};

const LayOut = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
};

const router = new createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "/CarList",
        element: <CarListPage />,
      },
      {
        path: "/AddCar",
        element: <AddCarPage />,
      },
      {
        path: "/CarDetail/:id",
        element: <CarDetailPage />,
      },
    ],
  },

  {
    path: "*",
    element: <h1>Page not found!</h1>,
  },
]);

export default router;
