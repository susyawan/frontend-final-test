import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./components/css/styles.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Login from "./components/user/login";
import Register from "./components/user/register";
import Contact from "./components/contact";
import Header from "./components/home/header";
import ListMenu from "./components/home/listmenu";
import FavoriteMenu from "./components/home/favoritesmenu";
import NotFound from "./components/notfound";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <FavoriteMenu />
      <Footer />
    </>
  );
};

const MenuPage = () => {
  return (
    <>
      <Navbar />
      <ListMenu />
      <Footer />
    </>
  );
};

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <Login />
      <Footer />
    </>
  );
};

const RegisterPage = () => {
  return (
    <>
      <Navbar />
      <Register />
      <Footer />
    </>
  );
};

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <Contact />
      <Footer />
    </>
  );
}

const NotFoundPage = () => {
  return (
    <>
      <Navbar />
      <NotFound />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
