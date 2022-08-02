import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import axios from "axios";

const Posts = ({ berry, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div className="container">
        <ul className="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 p-0">
          {berry.map((item, index) => (
            <li key={index} className="list-unstyled col mb-0 p-2">
              <div
                className="card text-bg-light"
                style={{ width: "100%", height: "100%" }}
              >
                <div className="card-body">
                  <img src={item.url} alt="" className="card-img-top" />
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text text-truncate">{item.title}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const Paging = ({ numberCall, paginate, currentPage }) => {
  const [arrNumberPage, setArrNumberPage] = useState([]);

  useEffect(() => {
    let tempNumberPage = [...numberCall];

    if (numberCall.length > 11) {
      if (currentPage >= 1 && currentPage < 7) {
        tempNumberPage = [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          "...",
          numberCall.length - 2,
          numberCall.length - 1,
          numberCall.length,
        ];
      } else if (currentPage >= 7 && currentPage <= numberCall.length - 5) {
        let numberOne = numberCall.slice(currentPage - 4, currentPage);
        let numberTwo = numberCall.slice(currentPage, currentPage + 3);
        tempNumberPage = [
          1,
          "... ",
          ...numberOne,
          ...numberTwo,
          " ...",
          numberCall.length,
        ];
      } else if (currentPage >= numberCall.length - 5) {
        let numberThree = numberCall.slice(
          numberCall.length - 6,
          numberCall.length
        );
        tempNumberPage = [1, 2, 3, "...", ...numberThree];
      } else {
        tempNumberPage = [...numberCall];
      }
    }

    setArrNumberPage(tempNumberPage);
  }, [paginate]);

  return (
    <>
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <span
              className="page-link"
              onClick={() =>
                paginate(currentPage === 1 ? currentPage : currentPage - 1)
              }
              style={{ fontSize: "10px" }}
            >
              &laquo;
            </span>
          </li>
          {arrNumberPage.map((number) => (
            <li
              key={number}
              className={`page-item ${currentPage === number ? "active" : ""}`}
            >
              <span
                className={`page-link ${isNaN(number) ? "disabled" : ""}`}
                onClick={() => paginate(number)}
                style={{ fontSize: "10px" }}
              >
                {number}
              </span>
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === numberCall.length ? "disabled" : ""
            }`}
          >
            <span
              className="page-link"
              onClick={() =>
                paginate(
                  currentPage === numberCall.length
                    ? currentPage
                    : currentPage + 1
                )
              }
              style={{ fontSize: "10px" }}
            >
              &raquo;
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
};

const ListMenu = () => {
  const [berry, setBerry] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPage] = useState(10);

  // https://jsonplaceholder.typicode.com/photos
  // https://jsonplaceholder.typicode.com/posts
  // https://pokeapi.co/api/v2/berry/

  useEffect(() => {
    const getBerry = async () => {
      setLoading(true);
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setBerry(result.data);
      setLoading(false);
    };
    getBerry();
  }, []);

  // currentPage
  const indexLastBerry = currentPage * postPage;
  const indexFirstBerry = indexLastBerry - postPage;
  const currentBerry = berry.slice(indexFirstBerry, indexLastBerry);

  // paginate
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // count number
  const numberCall = [];
  for (let i = 1; i <= Math.ceil(berry.length / postPage); i++) {
    numberCall.push(i);
  }

  return (
    <>
      {/* <div className="py-5" id="services"></div> */}
      <div className="container-fluid my-4">
        <div className="container">
          <div className="d-flex justify-content-between">
            <h3 className="mb-4 ms-2">Menu</h3>
            <a href="/orders">
              <button
                className="btn btn-warning fw-bold"
                style={{ color: "red" }}
              >
                ORDER
              </button>
            </a>
          </div>
          <div style={{ height: "auto" }}>
            <Paging
              numberCall={numberCall}
              paginate={paginate}
              currentPage={currentPage}
            />
            <Posts berry={currentBerry} loading={loading} />
            <Paging
              numberCall={numberCall}
              paginate={paginate}
              currentPage={currentPage}
            />
            {/* <div className="d-flex justify-content-center flex-wrap gap-2">
              
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListMenu;
