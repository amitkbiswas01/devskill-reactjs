import { useState } from "react";
import MyComponent from "./MyComponent";

function App() {
  const [message, setMessage] = useState("");

  const handleClick = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="container vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex mb-5">
        <button
          className="btn btn-danger me-1"
          onClick={() => {
            handleClick("Home");
          }}
        >
          Home
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            handleClick("Contact");
          }}
        >
          Contact
        </button>
      </div>
      <MyComponent message={message}></MyComponent>
    </div>
  );
}

export default App;
