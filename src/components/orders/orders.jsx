import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import ListMenu from "../home/listmenu";
import request from "../../helpers/requests";
import { decodeToken } from "react-jwt";
import { Modal, ModalHeader, ModalBody, ModalTitle } from "react-bootstrap";
import { Button, Form, FormGroup } from "react-bootstrap";
import Login from "../user/login";

const Orders = () => {
  // const [loading, setLoading] = useState([]);
  const [listOrder, setListOrder] = useState([]);
  const [addressUser, setAddressUser] = useState();
  // const [totalPriceOrder, setTotalPriceOrder] = useState(0);
  const isStorage = sessionStorage.getItem("token");
  const dataStore = decodeToken(isStorage);
  const [formVisible, setFormVisible] = useState(false);
  const [updateAddress, setUpdateAddress] = useState("");
  const [foodStore, setFoodStore] = useState([]);

  async function fetchUser() {
    if (isStorage) {
      await request
        .post("/api/user/address", { user_name: dataStore.user_name })
        .then((res) => {
          sessionStorage.setItem("getAddress", res.token);
        })
        .catch((err) => console.log(err));

      const token = sessionStorage.getItem("getAddress");
      const getAddress = decodeToken(token);
      setAddressUser(getAddress.user_address);
    }
  }

  async function fetchOrder() {
    if (isStorage) {
      await request
        .get("/api/food/")
        .then(({ data }) => {
          setFoodStore(data);
        })
        .catch((err) => console.log(err));

      await request
        .get("/api/order")
        .then(({ data }) => {
          setListOrder(data);
        })
        .catch((err) => console.log(err));
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    // const interval = setInterval(() => {
    //   fetchOrder();
    // }, 1000);
    // return () => clearInterval(interval);
    fetchOrder();
  }, []);

  async function handleMinus(data) {
    await request
      .put(
        `/api/order/update/${data.food_id}`,
        { food_id: data.food_id, quantity: data.quantity - 1 },
        { params: data.food_id }
      )
      .then(() => fetchOrder())
      .catch((err) => console.log(err));
  }

  async function handlePlus(data) {
    await request
      .put(
        `/api/order/update/${data.food_id}`,
        { food_id: data.food_id, quantity: data.quantity + 1 },
        { params: data.food_id }
      )
      .then(() => fetchOrder())
      .catch((err) => console.log(err));
  }

  async function handleDelete(data) {
    await request
      .delete(
        `/api/order/delete/${data.food_id}`,
        { data },
        {
          params: data.food_id,
        }
      )
      .then(() => fetchOrder())
      .catch((err) => console.log(err));
    window.location.reload();
  }

  function handleShowChangeAddress() {
    setFormVisible(!formVisible);
  }

  async function handleChangeAddress() {
    await request
      .put(
        `/api/user/${dataStore.user_name}`,
        {
          user_name: dataStore.user_name,
          user_address: updateAddress,
        },
        { params: dataStore.user_name }
      )
      .then(() => fetchUser())
      .catch((err) => console.log(err));

    setFormVisible(!formVisible);
    window.location.reload();
  }

  function totalPrice() {
    let total = 0;

    for (let i = 0; i < listOrder.length; i++) {
      total = total + listOrder[i].price * listOrder[i].quantity;
    }

    return total;
  }

  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <ListMenu />
            </div>
            {isStorage ? (
              <>
                <div className="col-12 col-lg-4 my-5">
                  <div className="d-flex justify-content-between">
                    <h1>Order</h1>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between flex-column">
                    <h6>Address</h6>
                    <span className="my-3">{addressUser}</span>
                    <div>
                      <span
                        onClick={() => handleShowChangeAddress()}
                        style={{
                          fontSize: "12px",
                          cursor: "pointer",
                          color: "slateblue",
                        }}
                      >
                        Change Address
                      </span>
                    </div>
                  </div>
                  <hr />
                  <div>
                    {listOrder.map((item, index) => (
                      <div key={index} className="my-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <h4>{foodStore[item.food_id - 1].food_name}</h4>
                          <button
                            className="btn btn-warning btn-sm"
                            onClick={() => handleDelete(item)}
                          >
                            Remove
                          </button>
                        </div>
                        <div className="d-flex justify-content-between align-items-center gap-3">
                          <div className="d-flex align-items-center gap-3">
                            <button
                              onClick={() =>
                                handleMinus({
                                  food_id: item.food_id,
                                  quantity: item.quantity,
                                })
                              }
                              className={`btn btn-warning btn-sm ${
                                item.quantity === 1 ? "disabled" : null
                              }`}
                            >
                              -
                            </button>
                            <span>
                              <b>{item.quantity}</b>
                            </span>
                            <button
                              onClick={() =>
                                handlePlus({
                                  food_id: item.food_id,
                                  quantity: item.quantity,
                                })
                              }
                              className="btn btn-warning btn-sm"
                            >
                              +
                            </button>
                            <div>@Rp.{foodStore[item.food_id - 1].food_price}</div>
                          </div>
                          <div>
                            Cost: <b>Rp.{foodStore[item.food_id - 1].food_price * item.quantity}</b>
                          </div>
                        </div>
                      </div>
                    ))}
                    <Modal
                      show={formVisible}
                      onHide={() => setFormVisible(!formVisible)}
                    >
                      <ModalHeader>
                        <ModalTitle>Change Address</ModalTitle>
                      </ModalHeader>
                      <ModalBody>
                        <Form>
                          <FormGroup>
                            <div className="input-group py-2">
                              <div className="input-group-text w-25 justify-content-end">
                                Address :
                              </div>
                              <input
                                value={updateAddress}
                                placeholder="Address"
                                onChange={(e) =>
                                  setUpdateAddress(e.target.value)
                                }
                              />
                            </div>
                          </FormGroup>
                          <Button onClick={() => setFormVisible(!formVisible)}>
                            Discard
                          </Button>
                          <Button onClick={handleChangeAddress}>Change</Button>
                        </Form>
                      </ModalBody>
                    </Modal>
                  </div>
                  <hr />
                  <div className="d-flex flex-column">
                    <h3>Total Orders:</h3>
                    <h3 className="text-end">Rp.{totalPrice()}</h3>
                  </div>
                  <hr />
                  <div className="d-flex flex-column">
                    <button className="btn btn-danger fw-bold">CHECKOUT</button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="col-12 col-lg-4 my-5">
                  <Login />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;

// const interval = setInterval(() => {
//   fetchUser();
// }, 10000);
// return () => clearInterval(interval);
