import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import ListMenu from "../home/listmenu";

const PostOrder = () => {
  const OrderList = [
    {
      id: 1,
      name: "First Order",
      quantity: 1,
      price: 40000,
    },
    {
      id: 2,
      name: "Second Order",
      quantity: 2,
      price: 30000,
    },
    {
      id: 3,
      name: "Third Order",
      quantity: 3,
      price: 25000,
    },
  ];

  return (
    <>
      <div>
        {OrderList.map((item, index) => (
          <div key={index}>
            <div className="d-flex align-items-center gap-2">
              <span className="fs-3">{item.name}</span>
              <button className="btn btn-danger btn-sm">Remove</button>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-2">
                <div className="d-flex align-items-center gap-2">
                  <button className="btn btn-warning btn-sm">-</button>
                  <span>{item.quantity}</span>
                  <button className="btn btn-warning btn-sm">+</button>
                </div>
                <div>
                  <span className="">Rp.{item.price},-</span>
                </div>
              </div>
              <div>
                <span className="fw-bold">
                  Rp.{item.quantity * item.price},-
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const Orders = () => {
  return (
    <>
      <div className="container-fluid mb-5">
        <div className="container">
          <div className="row row-cols-auto">
            <div className="col-12 col-lg-8">
              <ListMenu />
            </div>
            <div className="col-12 col-lg-4">
              <div className="my-4">
                <h3>Order</h3>
              </div>
              <div>
                <h6>Delivery To:</h6>
              </div>
              <hr />
              <div>
                <span>Indonesia</span>
              </div>
              <hr />
              <div>
                <h6>Order List:</h6>
              </div>
              <hr />
              <div>
                <div>
                  <PostOrder />
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <h3>Total:</h3>
                <div className="d-flex">
                  <h3>Rp.</h3>
                  <h3>200.000,-</h3>
                </div>
              </div>
              <hr />
              <div>
                <button className="btn btn-info fw-bold w-100">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
