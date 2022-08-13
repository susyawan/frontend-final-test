import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import request from "../../helpers/requests";
import * as yup from "yup";
import { useFormik } from "formik";
import { Input } from "reactstrap";

const Register = () => {
  const [confirmPassword, setConfirmPassword] = useState("");

  const validationRegister = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    address: yup.string().required(),
    password: yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      address: "",
      password: "",
    },
    validationSchema: validationRegister,
    onSubmit: () => handleRegister(),
  });

  async function handleRegister() {
    await request
      .post(`/user/register`, formik.values)
      .then((data) => alert("Register Successfully"))
      .catch((err) => alert(err));

    window.location.href = "/";
  }

  function checkCP() {
    if (confirmPassword === "") {
      return false;
    } else if (confirmPassword === formik.values.password) {
      return false;
    } else {
      return true;
    }
  }

  function lastCheckRegister() {
    if (confirmPassword !== formik.values.password) {
      alert("confirm password not match");
    } else {
      formik.handleSubmit();
    }
  }

  return (
    <>
      <div className="container-fluid my-5">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row row-cols-auto">
            <div className="col-6 d-none d-lg-block col-lg-6 d-flex justify-content-center align-items-center">
              <img src="" alt="ilustration-register" className="w-75 end-100" />
            </div>
            <div className="my-5 my-lg-0 col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
              <div className="line-up mb-1">
                <span style={{ background: "#fff", padding: "0 10px" }}>
                  Register
                </span>
              </div>

              <div className="d-flex flex-column text-center">
                <form onSubmit={lastCheckRegister}>
                  <Input
                    className="form-control my-1"
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    invalid={
                      formik.touched.username && Boolean(formik.errors.username)
                    }
                  />
                  <Input
                    className="form-control my-1"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    invalid={
                      formik.touched.email && Boolean(formik.errors.email)
                    }
                  />
                  <Input
                    className="form-control my-1"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    invalid={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                  />
                  <Input
                    className="form-control my-1"
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    invalid={checkCP()}
                  />
                  <Input
                    className="form-control my-1"
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    invalid={
                      formik.touched.address && Boolean(formik.errors.address)
                    }
                  />
                </form>
                <button
                  className="btn btn-primary my-1 fw-bold"
                  onClick={lastCheckRegister}
                >
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
