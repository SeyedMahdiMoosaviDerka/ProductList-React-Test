import { Fragment, useState } from "react";
import Style from "./AddCar.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Cars from "../CarList/Cars";
import * as yup from "yup";

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

  const onSubmit = (values) => {
    const IdMaker = CarsList.length + 1;
    values.Id = IdMaker;
    SetCarsList([CarsList.push(values)]);

    console.log(CarsList);
  };

  const validation = yup.object().shape({
    CarName: yup.string().required("Enter CarName"),
    CarLocation: yup.string().required("Enter CarLocation"),
    "CarDetail[0]": yup.string().required("Enter CarDistance"),
    "CarDetail[3]": yup.string().required("Enter Motor"),
  });

  return (
    <Fragment>
      <div className={Style.AddCarHolder}>
        <Formik
          initialValues={{
            CarImg: "./image/Car01.png",
            CarName: "",
            CarDetail: ["", "Petrol", "Manaul", ""],
            CarPrice: [0, 0],
            CarLocation: "",
          }}
          onSubmit={(values) => onSubmit(values)}
          validationSchema={validation}
        >
          {(form) => (
            <>
              <Form>
                <div>
                  <h2>CarName:</h2>
                  <Field type="text" name="CarName" id="CarName" />
                  <ErrorMessage
                    name="CarName"
                    component={"span"}
                    className={Style.error}
                  />
                </div>
                <div>
                  <h2>CarImg:</h2>
                  <Field as="select" name="CarImg" id="CarImg">
                    <option value="./image/Car01.png">Car 1</option>
                    <option value="./image/Car02.png">Car 2</option>
                    <option value="./image/Car03.png">Car 3</option>
                  </Field>
                </div>
                <div>
                  <h2>Car Distance:</h2>
                  <Field
                    placeholder="like 16K km ..."
                    type="text"
                    name="CarDetail[0]"
                  />
                  <ErrorMessage
                    name="CarDetail[0]"
                    component={"span"}
                    className={Style.error}
                  />
                </div>
                <div>
                  <h2>Car Fuel:</h2>
                  <Field as="select" name="CarDetail[1]">
                    <option value="Petrol">Petrol</option>
                    <option value="Hybrid">Hybrid</option>
                  </Field>
                </div>
                <div>
                  <h2>Car Mode:</h2>
                  <Field as="select" name="CarDetail[2]">
                    <option value="Manaul">Manaul</option>
                    <option value="AutoMatic">AutoMatic</option>
                  </Field>
                </div>
                <div>
                  <h2>Car Motor:</h2>
                  <Field
                    placeholder="like 165hp ..."
                    type="text"
                    name="CarDetail[3]"
                  />
                  <ErrorMessage
                    name="CarDetail[3]"
                    component={"span"}
                    className={Style.error}
                  />
                </div>
                <div>
                  <h2>Car Price:</h2>
                  <Field type="number" name="CarPrice[0]" />
                </div>
                <div>
                  <h2>Car PricePayMent:</h2>
                  <Field type="number" name="CarPrice[1]" />
                </div>
                <div>
                  <h2>Car CarLocation:</h2>
                  <Field
                    placeholder="like 'Iran/Mazandaran' "
                    type="text"
                    name="CarLocation"
                  />
                  <ErrorMessage
                    name="CarLocation"
                    component={"span"}
                    className={Style.error}
                  />
                </div>

                <button type="submit">Add</button>
              </Form>

              <div className={Style.CarHolder}>
                <Cars CarObj={form.values} />
              </div>
            </>
          )}
        </Formik>
      </div>
    </Fragment>
  );
}

export default AddCar;
