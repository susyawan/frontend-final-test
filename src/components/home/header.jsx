import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import {BiRocket} from 'react-icons/bi'
import {IoLeafOutline} from 'react-icons/io5'

const Header = () => {
  return (
    <>
      <div className="container-fluid h-100">
        <div className="container" style={{ height: "40rem" }}>
          <div className="row row-cols-auto h-100 my-5">
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
                <li className="list-group-item d-flex flex-column justify-content-center align-items-center borderless">
                  <span><BiRocket size='3em'/></span>
                  <span>Fast Delivery</span>
                </li>
                <li className="list-group-item d-flex flex-column justify-content-center align-items-center borderless">
                  <span><IoLeafOutline size='3em'/></span>
                  <span>Fresh Food</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
