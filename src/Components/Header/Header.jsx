import React from "react";
import Menu from "../Menu/Menu";

function Header() {
  return (
    <React.Fragment>
      <div className="Header">
        <img
          onClick={() =>
            window.open("https://github.com/SeyedMahdiMoosaviDerka")
          }
          src="./image/Profile.jpg"
          alt="image"
        />
        <Menu />
      </div>
    </React.Fragment>
  );
}

export default Header;
