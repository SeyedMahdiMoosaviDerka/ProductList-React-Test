import { Fragment, useState } from "react";
import Style from "./CarsList.module.css";
import Cars from "./Cars";

function CarList() {
  const [CarsList, SetCarsList] = useState([
    {
      Id: 1,
      CarImg: "./image/Car01.png",
      CarName: "BMW X5",
      CarDetail: ["10K km", "Petrol", "Manual", "165hp"],
      CarPrice: [35000, 3000],
      CarLocation: "Dhanmondi, Dhaka",
    },
    {
      Id: 2,
      CarImg: "./image/Car03.png",
      CarName: "BMW M3 Touring",
      CarDetail: ["25K km", "Petrol", "Automatic", "165hp"],
      CarPrice: [225000, 18899],
      CarLocation: "Dhanmondi, Dhaka",
    },
    {
      Id: 3,
      CarImg: "./image/Car02.png",
      CarName: "BMW i4 M50",
      CarDetail: ["7K km", "Petrol", "Manual", "175hp"],
      CarPrice: [75000, 8000],
      CarLocation: "Gushan, Dhaka",
    },
    {
      Id: 4,
      CarImg: "./image/Car01.png",
      CarName: "BMW X5",
      CarDetail: ["10K km", "Petrol", "Manual", "165hp"],
      CarPrice: [35000, 3000],
      CarLocation: "Dhanmondi, Dhaka",
    },
    {
      Id: 5,
      CarImg: "./image/Car03.png",
      CarName: "BMW M3 Touring",
      CarDetail: ["25K km", "Petrol", "Automatic", "165hp"],
      CarPrice: [225000, 18899],
      CarLocation: "Dhanmondi, Dhaka",
    },
    {
      Id: 6,
      CarImg: "./image/Car02.png",
      CarName: "BMW i4 M50",
      CarDetail: ["7K km", "Petrol", "Manual", "175hp"],
      CarPrice: [75000, 8000],
      CarLocation: "Gushan, Dhaka",
    },
  ]);

  const HandleDelete = (DeletID) => {
    SetCarsList(CarsList.filter((x) => x.Id !== DeletID));
  };

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
          <h1> There is No car Yet! </h1>
        )}
      </div>
    </Fragment>
  );
}

export default CarList;
