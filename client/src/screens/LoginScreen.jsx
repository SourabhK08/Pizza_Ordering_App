import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
const LoginScreen = () => {
  const data = { email: "", password: "" };

  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log("Logged In");
  }, [flag]);

  const [inputData, setInputData] = useState(data);

  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }
  console.log(inputData);

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputData.email || !inputData.password) {
      toast.error("All Fields Are Mandatory !");
    } else {
      toast.success("Congratulations! Successfully Logged In");
      setFlag(true);
    }
  }

  return (
    <>
      <form
        className="container"
        style={{
          marginTop: "50px",
          justifyContent: "center",
          width: "50%",
          marginLeft: "26%",
          textAlign: "center",
        }}
        onSubmit={handleSubmit}
      >
        <div className="header text-center ">
          <h1>
            <b>Login</b>
          </h1>
        </div>
        <hr />

        <div className="form-input">
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

          <div className="form-btn">
            <button type="submit"> Submit </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginScreen;
