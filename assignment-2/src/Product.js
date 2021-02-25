import { React, useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

function Product({ productList, handleClick }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // added the timeout to mimic loading time
    // as here the loading time is small
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="w-75">
      {loading === true ? (
        <div>
          <LoadingSpinner></LoadingSpinner>
        </div>
      ) : (
        <div>
          <h2 className="my-4">Products</h2>
          {productList.map((product, index) => {
            return (
              <div key={index} className="card mb-4 mw-100">
                <div className="row g-0">
                  <div className="col-md-4 mb-0 bg-secondary h4 d-flex justify-content-center align-items-center">
                    Image
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        <button
                          onClick={() => handleClick(product.name)}
                          className="bg-transparent border-0 stretched-link"
                        >
                          {product.name}
                        </button>
                      </h5>
                      <div className="w-100 card-text d-flex justify-content-between align-items-center">
                        <small className="badge bg-danger">
                          {product.category}
                        </small>
                        <h5 className="ml-auto fw-bold">
                          &#2547; {product.price}
                        </h5>
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

export default Product;
