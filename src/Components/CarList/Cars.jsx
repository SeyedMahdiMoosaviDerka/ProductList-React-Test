/* eslint-disable react/prop-types */
import { Fragment } from "react";
import Style from "./CarsList.module.css";
import { NavLink } from "react-router-dom";

function Cars({ CarObj, Delete }) {
  /*     this is for number formating:        */
  const CarPriceFormat =
    "$ " +
    Intl.NumberFormat({
      maximumSignificantDigits: 3,
    }).format(CarObj.CarPrice[0]);

  const CarPricePayFormat =
    "From $ " +
    Intl.NumberFormat({
      maximumSignificantDigits: 3,
    }).format(CarObj.CarPrice[0]) +
    "/m";

  return (
    <Fragment>
      <div className={Style.Cars}>
        <img src={CarObj.CarImg} alt="image" />
        <NavLink to={"/CarDetail/" + CarObj.Id}></NavLink>

        <h3 className={Style.CarName}>
          {CarObj.CarName}
          <NavLink to={"/CarDetail/" + CarObj.Id}></NavLink>
        </h3>

        <p className={Style.CarDetail}>
          {CarObj.CarDetail[0] +
            " . " +
            CarObj.CarDetail[1] +
            " . " +
            CarObj.CarDetail[2] +
            " . " +
            CarObj.CarDetail[3]}
        </p>

        <input
          id={`${Style.CarLike + "_" + CarObj.Id}`}
          type="checkbox"
        ></input>
        <label
          htmlFor={`${Style.CarLike + "_" + CarObj.Id}`}
          className={Style.CarLike}
        ></label>

        <div className={Style.Price}>
          <h3>{CarPriceFormat} </h3>
          <h4>{CarPricePayFormat}</h4>
        </div>

        <span className={Style.CarLocation}>{CarObj.CarLocation}</span>

        <input id={`${Style.CarDelete + "_" + CarObj.Id}`} type="text"></input>
        <div>
          Are You Sure ? <button onClick={() => Delete(CarObj.Id)}>Yes</button>
        </div>

        <label
          htmlFor={`${Style.CarDelete + "_" + CarObj.Id}`}
          className={Style.CarDelete}
        ></label>
      </div>
    </Fragment>
  );
}

export default Cars;
