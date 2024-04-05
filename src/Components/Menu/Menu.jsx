import { Fragment } from "react";
import Style from "./Menu.module.css";

function Menu() {
  return (
    <Fragment>
      <div className={Style.Menu}>
        <h2>MAHDI{"'"}S Test.</h2>
        <h2 className={Style.Selected}>CarsList</h2>
        <h2>AddCar</h2>
      </div>
    </Fragment>
  );
}

export default Menu;
