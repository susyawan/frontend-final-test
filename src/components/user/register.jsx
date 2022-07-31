import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";

const Register = () => {
  return (
    <>
      <div className="container-fluid my-5">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row row-cols-auto">
            <div className="col-6 d-none d-lg-block col-lg-6 d-flex justify-content-center align-items-center">
              <img
                src="https://graphic-mama.s3.eu-west-1.amazonaws.com/resources/toons/food-and-kitchen/9234/siteBigImages/162-item-27%28items%29.jpg?response-content-disposition=&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIQKMABPAE5PPBT2A%2F20220731%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20220731T015556Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Signature=4ff982968a02f68248eb1e941e6f5104af2b5e554e0e631cfb6f4160f229baa9"
                alt="ilustration-register"
                className="w-75 end-100"
              />
            </div>
            <div className="my-5 my-lg-0 col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
              <div className="line-up mb-1">
                <span style={{ background: "#fff", padding: "0 10px" }}>
                  Register
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
                  type="email"
                  name=""
                  id=""
                  placeholder="Email"
                />
                <input
                  className="form-control my-1"
                  type="password"
                  name=""
                  id=""
                  placeholder="Password"
                />
                <input
                  className="form-control my-1"
                  type="password"
                  name=""
                  id=""
                  placeholder="Confirm Password"
                />
                <button className="btn btn-primary my-1 fw-bold">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
