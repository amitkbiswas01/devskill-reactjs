import { React, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import LoadingSpinner from "./LoadingSpinner";
import { carData } from "../data/cars";

export default function CarList() {
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleClick = (id) => {
    // go to car details page on click
    history.push(`/all-cars/${id}`);
  };

  return (
    <div className="w-75">
      {loading === true ? (
        <div>
          <LoadingSpinner></LoadingSpinner>
        </div>
      ) : (
        <div>
          <h2 className="my-4">Cars</h2>
          {carData.map((car, index) => {
            return (
              <div
                key={index}
                className="card mb-4 mw-100"
                onClick={() => handleClick(car.id)}
              >
                <div className="row g-0">
                  <div className="col-md-4 mb-0 bg-secondary h4 d-flex justify-content-center align-items-center">
                    Image
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        <button className="bg-transparent border-0 stretched-link">
                          {car.carModel} by {car.carMake}
                        </button>
                      </h5>
                      <div className="w-100 card-text d-flex justify-content-end align-items-center">
                        <h5 className="ml-auto fw-bold">$ {car.carPrice}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
