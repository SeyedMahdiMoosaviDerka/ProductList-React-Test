import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Style from "./Menu.module.css";

function Menu() {
  return (
    <Fragment>
      <div className={Style.Menu}>
        <h2>MAHDI{"'"}S Test.</h2>
        <NavLink
          to={"/CarList"}
          className={({ isActive }) =>
            [isActive ? Style.Selected : ""].join(" ")
          }
        >
          CarsList
        </NavLink>
        <NavLink
          to={"/AddCar"}
          className={({ isActive }) =>
            [isActive ? Style.Selected : ""].join(" ")
          }
        >
          AddCar
        </NavLink>
      </div>
    </Fragment>
  );
}

export default Menu;
