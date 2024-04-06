/* eslint-disable react/prop-types */
import { Fragment } from "react";
import Style from "./CarsList.module.css";
import { NavLink, Link } from "react-router-dom";

function Cars({ CarObj, Delete }) {
  /*     this is for number formating:        */
  const CarPriceFormat =
    "$ " +
    Intl.NumberFormat({
      maximumSignificantDigits: 3,
    }).format(CarObj?.CarPrice[0]);

  const CarPricePayFormat =
    "From $ " +
    Intl.NumberFormat({
      maximumSignificantDigits: 3,
    }).format(CarObj?.CarPrice[0]) +
    "/m";

  const DeleteHandeller = (e) => {
    Delete(CarObj.id);
  };

  return (
    <Fragment>
      <div className={Style.Cars}>
        <img src={CarObj?.CarImg} alt="image" />
        <NavLink to={"/CarDetail/" + CarObj.id}></NavLink>

        <h3 className={Style.CarName}>
          {CarObj?.CarName}
          <NavLink to={"/CarDetail/" + CarObj?.id}></NavLink>
        </h3>

        <p className={Style.CarDetail}>
          {CarObj?.CarDetail[0] +
            " . " +
            CarObj?.CarDetail[1] +
            " . " +
            CarObj?.CarDetail[2] +
            " . " +
            CarObj.CarDetail[3]}
        </p>

        <input
          id={`${Style.CarLike + "_" + CarObj.id}`}
          type="checkbox"
        ></input>
        <label
          htmlFor={`${Style.CarLike + "_" + CarObj.id}`}
          className={Style.CarLike}
        ></label>

        <div className={Style.Price}>
          <h3>{CarPriceFormat} </h3>
          <h4>{CarPricePayFormat}</h4>
        </div>

        <span className={Style.CarLocation}>{CarObj.CarLocation}</span>

        <input id={`${Style.CarDelete + "_" + CarObj.id}`} type="text"></input>
        <div>
          Are You Sure ?{" "}
          <button onClick={(e) => DeleteHandeller(e.target)}>Yes</button>
        </div>
        <label
          htmlFor={`${Style.CarDelete + "_" + CarObj.id}`}
          className={Style.CarDelete}
        ></label>

        <Link to={"/EditCar/" + CarObj.id} className={Style.CarEdit} />
      </div>
    </Fragment>
  );
}

export default Cars;
