import { Fragment } from "react";
import Style from "./AddCar.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Cars from "../CarList/Cars";
import * as yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";

function AddCar() {
  const validation = yup.object().shape({
    CarName: yup.string().required("Enter CarName"),
    CarLocation: yup.string().required("Enter CarLocation"),
    /* "CarDetail[0]": yup.string().required("Enter CarDistance"),
    "CarDetail[3]": yup.string().required("Enter Motor"),
    "CarPrice[0]": yup.string().required(), */
  });

  const navigate = useNavigate();
  const onSubmit = async (values) => {
    try {
      const res = await axios.post(
        "https://66115f7695fdb62f24ed0ab4.mockapi.io/CarList/Cars",
        values
      );
      console.log(res);
      toast.success("Successfully Added To Car List!");
      setTimeout(() => {
        navigate("/CarList");
      }, 1000);
    } catch (error) {
      alert(error);
    }
  };

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
          onSubmit={onSubmit}
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
                    <option value="../image/Car01.png">Car 1</option>
                    <option value="../image/Car02.png">Car 2</option>
                    <option value="../image/Car03.png">Car 3</option>
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
                  <ErrorMessage
                    name="CarPrice[0]"
                    component={"span"}
                    className={Style.error}
                  />
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
