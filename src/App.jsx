import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Login from "./components/user/login";
import "./components/css/styles.css";
import Register from "./components/user/register";
import Contact from "./components/contact";
import Header from "./components/home/header";

// export const userContext = createContext();

function App() {
  // const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      {/* <userContext.Provider value={{ state, dispatch }}> */}
      <Navbar />
      <Header />
      <Login />
      <Register />
      <Contact />
      <Footer />
      {/* </userContext.Provider> */}
    </>
  );
}

export default App;
