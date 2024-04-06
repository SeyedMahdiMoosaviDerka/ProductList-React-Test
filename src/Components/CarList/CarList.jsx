import { Fragment, useEffect, useState } from "react";
import Style from "./CarsList.module.css";
import Cars from "./Cars";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import toast from "react-hot-toast";

function CarList() {
  const [CarsList, SetCarsList] = useState([]);
  const [SkeletonList] = useState([
    { Skeleton: "" },
    { Skeleton: "" },
    { Skeleton: "" },
    { Skeleton: "" },
    { Skeleton: "" },
    { Skeleton: "" },
    { Skeleton: "" },
    { Skeleton: "" },
  ]);

  const HandleDelete = (DeleteID) => {
    try {
      axios.delete(
        "https://66115f7695fdb62f24ed0ab4.mockapi.io/CarList/Cars/" + DeleteID
      );

      console.log("Delete succesfully / id:" + DeleteID);

      SetCarsList(CarsList.filter((x) => x.id !== DeleteID));

      toast.success("Successfully Removed");
    } catch (error) {
      alert(error);
    }
  };

  const GetCarList = async () => {
    let res = await fetch(
      "https://66115f7695fdb62f24ed0ab4.mockapi.io/CarList/Cars",
      {
        method: "GET",
      }
    );

    res = await res.json();

    //console.log(res);
    SetCarsList(res);
  };

  const SkeletonWrapper = () => {
    return SkeletonList.map((a, key) => (
      <div key={key} className={Style.Skeleton}>
        <Skeleton height={"200px"} duration={0.5} />
        <Skeleton height={"40px"} width={"150px"} duration={0.5} />
        <Skeleton height={"20px"} width={"250px"} duration={0.5} />
        <Skeleton height={"20px"} width={"300px"} duration={0.5} />
      </div>
    ));
  };

  useEffect(() => {
    GetCarList();
  }, []);

  return (
    <Fragment>
      <h3>{CarsList.length} resualt</h3>
      <h4>Newest ad</h4>
      <div className={Style.CarsListHolder}>
        {CarsList.length > 0 ? (
          CarsList.map((car, key) => (
            <Cars CarObj={car} key={key} Delete={(e) => HandleDelete(e)} />
          ))
        ) : (
          <SkeletonWrapper />
        )}
      </div>
    </Fragment>
  );
}

export default CarList;
