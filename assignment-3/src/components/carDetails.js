import { React, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import LoadingSpinner from "./LoadingSpinner";
import { carData } from "../data/cars";

export default function Car() {
  const [loading, setLoading] = useState(true);
  const [car, setCar] = useState(null);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    // checks if the given id param is a number
    // if not, redirect to 404
    if (Number.isNaN(Number(id)) === false) {
      setTimeout(() => {
        // find car with the giver id
        const selectedCar = carData.find((car) => car.id.toString() === id);
        // if no car found with the given id
        if (selectedCar) {
          setCar(selectedCar);
          setLoading(false);
        } else {
          history.push("/page-not-found");
        }
      }, 2000);
    } else {
      history.push("/page-not-found");
    }
  }, [id, history]);

  return (
    <>
      {loading === true ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <div className="card my-5 w-75">
          <div
            className="card-img-top bg-secondary h2 d-flex justify-content-center align-items-center"
            style={{ height: "18rem" }}
          >
            Image Here
          </div>
          <div className="card-body">
            <h2>
              <span className="h2 text-danger">{car.carModel}</span> by{" "}
              {car.carMake}
            </h2>
            <h5 className="ml-auto fw-bold mb-4">$ {car.carPrice}</h5>
            <p className="card-text">{car.carDetail}</p>
          </div>
        </div>
      )}
    </>
  );
}
