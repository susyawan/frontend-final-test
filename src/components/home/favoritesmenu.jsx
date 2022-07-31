import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";

const FavoriteMenu = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container my-lg-0">
          <div className="row row-cols-auto my-lg-5 px-5 justify-content-center justify-content-lg-start align-items-start">
            <div className="col-12">
              <h2 className="text-nowrap">Menu Favorit</h2>
            </div>
            <div className="col-12 my-4 my-lg-0">
                <div className="row row-cols-auto text-center">
                    <div className="col-6 col-lg-3">A</div>
                    <div className="col-6 col-lg-3">B</div>
                    <div className="col-6 col-lg-3">C</div>
                    <div className="col-6 col-lg-3">D</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavoriteMenu;
