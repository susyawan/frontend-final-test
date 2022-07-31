import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/css/styles.css";
import { usePopper } from "react-popper";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
  });

  const handlePopperLogin = () => {
    setIsOpen(!isOpen);
  };

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

          <div>
            <ul className="navbar-nav flex-row align-items-center">
              <li className="nav-item mx-2 mx-lg-0">
                <a href="/menu" className="nav-link">
                  Menu
                </a>
              </li>
              <li className="nav-item mx-2 mx-lg-0">
                <a href="/" className="nav-link">
                  Order
                </a>
              </li>
              <li className="nav-item mx-2 mx-lg-0">
                {/* <a href="/login" className="nav-link"> */}
                <button
                  className="btn btn-light fw-bold nav-link"
                  ref={setReferenceElement}
                  onClick={handlePopperLogin}
                  data-bs-toggle={handlePopperLogin}
                >
                  Log In
                </button>
                <div
                  className={`${isOpen ? "popper-visible" : "popper-none"}`}
                  ref={setPopperElement} style={styles.popper} {...attributes.popper}
                >
                  <div className="d-flex flex-column text-center p-3 bg-light rounded-4 mt-2 shadow-lg">
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
                    <button className="btn btn-primary my-1 fw-bold">
                      Log In
                    </button>
                    <a href="/" className="text-decoration-none my-1">
                      Forgotten Password?
                    </a>
                  </div>
                  <div ref={setArrowElement} style={styles.arrow} />
                </div>
                {/* </a> */}
              </li>
              <li className="nav-item mx-2 mx-lg-0">
                <a href="/register" className="nav-link">
                  <button className="btn btn-info text-white fw-bold register">
                    Register
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
