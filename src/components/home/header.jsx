import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";

const Header = () => {
  return (
    <>
      <div className="container-fluid my-5 h-100">
        <div className="container" style={{ height: "25rem" }}>
          <div className="row row-cols-auto h-100 my-lg-5">
            <div className="col-12 col-lg-6 d-flex ps-lg-5 flex-column justify-content-center">
              <h1>We Made Delicious Food</h1>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                beatae cumque voluptates pariatur nulla accusamus dicta, hic
                tenetur facere odio magni doloribus quo quis sequi a ea quam
                ratione labore.
              </span>
              <button className="btn btn-danger my-1 fw-bold w-25 my-3">
                Menu
              </button>
            </div>
            <div className="col-lg-6 d-lg-block d-none"></div>
            <div className="col-12 d-flex justify-content-center align-items-center">
              <ul className="list-group list-group-horizontal">
                <li className="list-group-item">A</li>
                <li className="list-group-item">B</li>
                <li className="list-group-item">C</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid my-5 h-100">
        <div className="container my-5 my-lg-0" style={{ height: "25rem" }}>
          <div className="row row-cols-auto h-100 my-lg-5 px-5 justify-content-center justify-content-lg-start align-items-start">
            <div className="col-12 col-lg-2 d-none d-lg-block"></div>
            <div
              className="col-12 col-lg-5 my-4 my-lg-0 shadow-lg"
              style={{ width: "300px", height: "300px" }}
            ></div>
            <div className="col-12 col-lg-5 my-4 d-flex ps-lg-5 flex-column justify-content-center">
              <h1>We Made Delicious Food</h1>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                beatae cumque voluptates pariatur nulla accusamus dicta, hic
                tenetur facere odio magni doloribus quo quis sequi a ea quam
                ratione labore.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
