import React from "react";
import CarList from "../CarList/CarList";

function Content_CarList() {
  return (
    <React.Fragment>
      <div className="Content">
        <h1>BMW Cars</h1>
        <CarList />
      </div>
    </React.Fragment>
  );
}

export default Content_CarList;
