/* eslint-disable react/prop-types */
import axios from "axios";
import React, { useEffect, useState } from "react";
import Cars from "../CarList/Cars";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import Style from "./CarDetail.module.css";

function Content_AddCard() {
  const [CarList, SetCarObj] = useState({
    Id: 0,
    CarImg: "",
    CarName: "",
    CarDetail: ["", "", "", ""],
    CarPrice: [0, 0],
    CarLocation: "",
  });
  const [Loading, SetLoading] = useState(true);

  const params = useParams();

  const GetCurrentEl = async () => {
    try {
      const res = await axios.get(
        `https://66115f7695fdb62f24ed0ab4.mockapi.io/CarList/Cars/${params.id}`
      );

      SetCarObj(res?.data);
      SetLoading(false);

      console.log(CarList.CarPrice[0]);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    GetCurrentEl();
  }, []);

  return (
    <React.Fragment>
      <div
        className="Content"
        style={{
          position: "absolute",
          left: "550px",
          width: "400px",
          transform: "scale(1.2)",
          backgroundColor: "transparent",
        }}
      >
        {Loading == true ? (
          <div className={Style.Skeleton}>
            <Skeleton height={"200px"} duration={0.5} />
            <Skeleton height={"40px"} width={"150px"} duration={0.5} />
            <Skeleton height={"20px"} width={"250px"} duration={0.5} />
            <Skeleton height={"20px"} width={"300px"} duration={0.5} />
          </div>
        ) : (
          <Cars CarObj={CarList} />
        )}

        {/* <p>{CarList?.CarPrice}</p> */}
      </div>
    </React.Fragment>
  );
}

export default Content_AddCard;
