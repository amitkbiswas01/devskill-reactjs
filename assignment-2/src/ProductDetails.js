import { React, useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

export default function ProductDetails({ product }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // added the timeout to mimic loading time
    // as here the loading time is small
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
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
            <h2>{product.name}</h2>
            <p className="card-text">{product.description}</p>
            <div className="w-100 card-text d-flex justify-content-between align-items-center">
              <h5 className="badge bg-danger">{product.category}</h5>
              <h5 className="ml-auto fw-bold">&#2547; {product.price}</h5>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
