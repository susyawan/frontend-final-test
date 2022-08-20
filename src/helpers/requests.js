import axios from "axios";

// const accessToken = sessionStorage.getItem("access_token");

const request = axios.create({
  baseURL: "https://restaurant-web-heroku.herokuapp.com",
  //   headers: { Authorization: accessToken },
});

request.interceptors.response.use(
  (res) => res.data,
  (err) => {
    // console.log('helper', err);

    if (err.response?.status === 409) {
      console.log(err.response?.status);
    }

    if (err.response?.status === 404) {
      console.log(err.response?.status);
    }

    if (err.response?.status === 403) {
      console.log(err.response?.status);
    }

    if (err.response?.status === 401) {
      console.log(err.response?.status);
    }
  }
);

export default request;
