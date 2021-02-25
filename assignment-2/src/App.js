import { useState } from "react";
import Product from "./Product";
import ProductDetails from "./ProductDetails";

function App() {
  const [product, setProduct] = useState("");
  const [productList, setProductList] = useState([
    {
      name: "Product One",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eum impedit consequatur fugit ab architecto asperiores, dicta corrupti animi. Obcaecati enim, odit molestiae suscipit itaque aspernatur omnis atque cumque. Ullam.",
      price: 35,
      category: "General",
    },
    {
      name: "Product Two",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit cupiditate rem quas consequuntur, sequi odit dolore impedit esse a sapiente dolorem temporibus amet commodi quaerat nostrum error dicta illo voluptatem.",
      price: 45,
      category: "Gardening",
    },
    {
      name: "Product Three",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus maxime, laudantium molestias vitae, odit nemo saepe sunt deserunt praesentium tenetur fugiat quam velit nisi qui magni optio fugit neque accusamus?",
      price: 55,
      category: "Appliance",
    },
  ]);

  const handleClick = (productName) => {
    let product = "";
    // if product is not empty, find product in productList
    if (productName !== "") {
      product = productList.find((elem) => elem.name === productName);
    }
    // after click, set current product in state
    setProduct(product);
  };

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          {product !== "" ? (
            <button
              onClick={() => handleClick("")}
              className="navbar-brand mb-0 h1 bg-transparent border-0"
            >
              Go to Homepage
            </button>
          ) : (
            <h2 className="navbar-brand mb-0">Welcome to our Product page</h2>
          )}
        </div>
      </nav>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        {product === "" ? (
          <Product
            productList={productList}
            handleClick={handleClick}
          ></Product>
        ) : (
          <ProductDetails product={product}></ProductDetails>
        )}
      </div>
    </>
  );
}

export default App;
