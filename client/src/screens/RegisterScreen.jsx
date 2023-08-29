import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

export default function Form() {
  const data = { name: "", phone: "", email: "", password: "" };

  const [inputData, setInputData] = useState(data);

  const [flag, setFlag] = useState(false);

  useEffect(() => {
    toast.success("Registered");
    console.log("Registered");
  }, [flag]);

  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }
  console.log(inputData);

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !inputData.name ||
      !inputData.phone ||
      !inputData.email ||
      !inputData.password
    ) {
      toast.error("All Fields Are Mandatory !");
    } else {
      setFlag(true);
    }
  }

  return (
    <>
      <pre>
        {" "}
        {flag ? (
          <h2 className="ui-define">
            Hello {inputData.name}, you've registered successfully{" "}
          </h2>
        ) : (
          ""
        )}{" "}
      </pre>

      <form
        className="container"
        onSubmit={handleSubmit}
        style={{
          marginTop: "50px",
          justifyContent: "center",
          width: "50%",
          marginLeft: "26%",
          textAlign: "center",
        }}
      >
        <div className="header text-center ">
          <h1>
            {" "}
            <b> Registration Form</b>
          </h1>
        </div>
        <hr />
        <div className="form-input">
          <div>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              value={inputData.name}
              onChange={handleData}
            />
          </div>

          <div>
            <input
              type="number"
              placeholder="Enter Your Number"
              name="phone"
              value={inputData.number}
              onChange={handleData}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={inputData.email}
              onChange={handleData}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              value={inputData.password}
              onChange={handleData}
            />
          </div>
        </div>
        <div className="form-btn ">
          <button type="submit"> Submit </button>
        </div>
      </form>
    </>
  );
}
