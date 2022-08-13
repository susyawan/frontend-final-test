import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/css/styles.css";
import * as yup from "yup";
import { useFormik } from "formik";
import request from "../helpers/requests";
import { Input } from "reactstrap";
import { decodeToken } from "react-jwt";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const dataStore = sessionStorage.getItem("token");
  const dataAdmin = decodeToken(dataStore);

  const handlePopperLogin = () => {
    setIsOpen(!isOpen);
  };

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
    } else if (respawn.message === "success" && goken.admin === "1") {
      sessionStorage.setItem("token", respawn.token);
      window.location.href = "/admin";
    } else if (respawn.message === "success" && !goken.admin) {
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

  function logout() {
    sessionStorage.removeItem("token");
    window.location.href = "/";
  }

  return (
    <>
      <nav className="container-fluid bg-light shadow">
        <div className="navbar container navbar-expand-lg bg-light px-3">
          <button
            className="btn btn-light d-block d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a href="/" className="navbar-brand">
            Logo
          </a>

          <div className="offcanvas offcanvas-start" id="offcanvasExample">
            <div className="offcanvas-header">
              <h4 className="offcanvas-title">Logo</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <ul className="offcanvas-body navbar-nav justify-content-lg-end">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <span className="d-none d-lg-block fs-4 text-muted pb-1">|</span>
          <div>
            <ul className="navbar-nav flex-row align-items-center">
              {dataStore && dataAdmin.admin === "1" ? (
                <li className="nav-item mx-2 mx-lg-0">
                  <a href="/admin" className="nav-link">
                    Admin
                  </a>
                </li>
              ) : (
                <></>
              )}
              <li className="nav-item mx-2 mx-lg-0">
                <a href="/menu" className="nav-link">
                  Menu
                </a>
              </li>
              <li className="nav-item mx-2 mx-lg-0">
                <a href="/orders" className="nav-link">
                  Order
                </a>
              </li>
              {dataStore ? (
                <>
                  <li className="nav-item mx-2 mx-lg-0">
                    <span className="mx-2">{dataAdmin.username}</span>
                  </li>
                  <li className="nav-item mx-2 mx-lg-0">
                    <button
                      className="btn btn-danger text-white fw-bold register py-0"
                      onClick={logout}
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item mx-2 mx-lg-0">
                    <button
                      className="btn btn-light fw-bold nav-link px-2 py-0"
                      onClick={handlePopperLogin}
                    >
                      Log In
                    </button>
                    <div
                      className={`${
                        isOpen ? "popper-visible" : "popper-none"
                      } position-absolute`}
                      style={{ marginLeft: "-100px" }}
                    >
                      <div className="d-flex flex-column text-center p-3 bg-light rounded-4 mt-2 shadow-lg">
                        <Input
                          className="form-control my-1"
                          type="text"
                          name="username"
                          placeholder="Username"
                          value={formik.values.username}
                          onChange={formik.handleChange}
                          invalid={
                            formik.touched.username &&
                            Boolean(formik.errors.username)
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
                            formik.touched.username &&
                            Boolean(formik.errors.username)
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
                  </li>
                  <li className="nav-item mx-2 mx-lg-0">
                    <a href="/register" className="nav-link">
                      <button className="btn btn-info text-white fw-bold register py-0">
                        Register
                      </button>
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
