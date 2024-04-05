import { Fragment, useState } from "react";
import Style from "./AddCar.module.css";
import { Formik, Form, Field } from "formik";

function AddCar() {
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

  return (
    <Fragment>
      <div className={Style.AddCarHolder}>
        <Formik
          initialValues={{
            CarImg: "",
            CarName: "",
            CarDetail: ["", "", "", ""],
            CarPrice: [0, 0],
            CarLocation: "",
          }}
        >
          <Form>
            <h2>CarName:</h2>
            <Field type="text" name="CarName" id="CarName" />

            <h2>CarImg:</h2>
            <select name="CarImg" id="CarImg">
              <option value="./image/Car01.png">Car 1</option>
              <option value="./image/Car02.png">Car 2</option>
              <option value="./image/Car03.png">Car 3</option>
            </select>

            <h2>Car Distance:</h2>
            <Field type="text" name="CarDetail[0]" />

            <h2>Car Fuel:</h2>
            <select name="CarDetail[1]">
              <option value="Petrol">Petrol</option>
              <option value="Hybrid">Hybrid</option>
            </select>

            <h2>Car Mode:</h2>
            <select name="CarDetail[2]">
              <option value="Manaul">Manaul</option>
              <option value="AutoMatic">AutoMatic</option>
            </select>

            <h2>Car Motor:</h2>
            <Field type="text" name="CarDetail[3]" />

            <h2>Car Price:</h2>
            <Field type="text" name="CarPrice[0]" />

            <h2>Car PricePayMent:</h2>
            <Field type="text" name="CarPrice[1]" />

            <h2>Car CarLocation:</h2>
            <Field type="text" name="CarLocation" />
          </Form>
        </Formik>
      </div>
    </Fragment>
  );
}

export default AddCar;
