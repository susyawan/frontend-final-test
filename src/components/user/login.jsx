import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import * as yup from "yup";
import { useFormik } from "formik";
import request from "../../helpers/requests";
import { Input } from "reactstrap";
import { decodeToken } from "react-jwt";

const Login = () => {
  const validationLogin = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationLogin,
    onSubmit: () => handleLogin(),
  });

  async function handleLogin() {
    const respawn = await request
      .post("/user/login", formik.values)
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));

    const goken = decodeToken(respawn.token);

    if (respawn.message === "user not found") {
      alert("user not found, please register");
    } else if (respawn.message === "password error") {
      alert("wrong username or password");
    } else if (respawn.message === "success" && goken.admin === 1) {
      sessionStorage.setItem("token", respawn.token);
      window.location.href = "/admin";
    } else if (respawn.message === "success" && goken.admin === null ) {
      sessionStorage.setItem("token", respawn.token);
      window.location.href = "/";
    }
  }

  function checkLogin() {
    if (formik.values.username === "" || formik.values.password === "") {
      alert("Please enter your username or password.");
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
              <img src="" alt="ilustration-login" className="w-75 end-100" />
            </div>
            <div className="my-5 my-lg-0 col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
              <div className="mb-2">
                <span>
                  don't have account?{" "}
                  <a href="/register" className="text-decoration-none fw-bold">
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
                <Input
                  className="form-control my-1"
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  invalid={
                    formik.touched.username && Boolean(formik.errors.username)
                  }
                />
                <Input
                  className="form-control my-1"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  invalid={
                    formik.touched.username && Boolean(formik.errors.username)
                  }
                />
                <button
                  className="btn btn-primary my-1 fw-bold"
                  onClick={checkLogin}
                >
                  Log In
                </button>
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
