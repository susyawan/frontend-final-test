import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";

const Login = () => {
  return (
    <>
      <div className="container-fluid my-5">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row row-cols-auto">
            <div className="col-6 d-none d-lg-block col-lg-6 d-flex justify-content-center align-items-center">
              <img
                src="https://i.pinimg.com/originals/8f/d8/eb/8fd8eb59bb027e607c6d14cdff1812eb.png"
                alt="ilustration-login"
                className="w-100 end-100"
              />
            </div>
            <div className="my-5 my-lg-0 col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
              <div className="mb-2">
                <span>
                  don't have account?{" "}
                  <a href="/" className="text-decoration-none fw-bold">
                    Register
                  </a>
                </span>
              </div>

              <div className="line-up mb-1">
                <span style={{ background: "#fff", padding: "0 10px" }}>
                  Log In
                </span>
              </div>

              <div className="d-flex flex-column text-center">
                <input
                  className="form-control my-1"
                  type="text"
                  name=""
                  id=""
                  placeholder="Username"
                />
                <input
                  className="form-control my-1"
                  type="password"
                  name=""
                  id=""
                  placeholder="Password"
                />
                <button className="btn btn-primary my-1 fw-bold">Log In</button>
                <a href="/" className="text-decoration-none my-1">
                  Forgotten Password?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
