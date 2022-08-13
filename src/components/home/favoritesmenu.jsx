import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import request from "../../helpers/requests";

const FavoriteMenu = () => {
  const [favList, setFavList] = useState([]);

  const fetchData = async () => {
    await request
      .get("/menus")
      .then(({ data }) => setFavList(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

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
                {favList.map((favour, index) => (
                  <div key={index} className="col-6 col-lg-3">
                    <h1>{favour.menuname}</h1>
                    <p>{favour.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavoriteMenu;
