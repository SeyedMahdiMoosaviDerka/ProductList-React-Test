import Content_AddCar from "./Components/Content/Content_AddCar";
import Content_CarDetail from "./Components/Content/Content_CarDetail";
import Content_CarList from "./Components/Content/Content_CarList";
import Content_EditCar from "./Components/Content/Content_EditCar";
import Header from "./Components/Header/Header";

import "./index.css";
import { Fragment } from "react";
import { createBrowserRouter, useParams, Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const AddCarPage = () => {
  return <Content_AddCar />;
};

const EditCarPage = () => {
  return <Content_EditCar />;
};

const CarDetailPage = () => {
  const params = useParams();

  return <Content_CarDetail CurrId={params.id} />;
};

const CarListPage = () => {
  const ScrollUpHandeller = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Content_CarList />
      <div className="ScrollUp" onClick={ScrollUpHandeller}>
        ScrollToUp
      </div>
    </>
  );
};

const LayOut = () => {
  return (
    <Fragment>
      <div>
        <Toaster />
      </div>

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
      {
        path: "/EditCar/:id",
        element: <EditCarPage />,
      },
    ],
  },

  {
    path: "*",
    element: <h1>Page not found!</h1>,
  },
]);

export default router;
