import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import request from "../../helpers/requests";
import { decodeToken } from "react-jwt";

const ListMenu = () => {
  const [listMenu, setListMenu] = useState([]);
  // const [loading, setLoading] = useState([]);
  const isStorage = sessionStorage.getItem("token");
  const dataStore = decodeToken(isStorage);

  async function handleAdd(item) {
    const { menuname, price } = item;
    const urlpath = window.location.pathname;

    await request
      .post("/order/add/", {
        username: dataStore.username,
        menuname: menuname,
        price: price,
        quantity: 1,
      })
      .then(() => fetchData())
      .catch((err) => console.log(err));
    if (urlpath !== "/menu") {
      // alert(`${menuname} has been added to Order List`);
      // window.location.reload();
    } else {
      alert(`${menuname} has been added to Order List`);
    }
  }

  // const handleAdd = (item) => {
  //   loading.push({ ...item, quantity: 1 });
  //   // let result = [...loading, { ...item, quantity: 1 }];
  //   localStorage.setItem("order", JSON.stringify(loading));
  // };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (JSON.parse(window.localStorage.getItem("order")) === null) {
  //       setLoading([]);
  //     } else {
  //       setLoading(JSON.parse(window.localStorage.getItem("order")));
  //     }
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [loading]);

  async function fetchData() {
    await request
      .get("/menus")
      .then(({ data }) => {
        setListMenu(data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchData();
  }, [listMenu]);

  return (
    <>
      <div className="container-fluid my-5">
        <div className="container">
          <div className="row">
            {listMenu.map((item, index) => (
              <div key={index} className="col-6 col-lg-3 my-3">
                <div className="d-flex flex-column">
                  <h3>{item.menuname}</h3>
                  <p>Price: {item.price}</p>
                </div>
                {isStorage ? (
                  <>
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() =>
                        handleAdd({
                          id: item.id,
                          menuname: item.menuname,
                          price: item.price,
                        })
                      }
                    >
                      Add
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => (window.location.href = "/login")}
                    >
                      Order
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListMenu;
