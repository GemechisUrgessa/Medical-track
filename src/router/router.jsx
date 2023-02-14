import React from "react";
import Add from "../pages/add";
import SignUp from "../pages/signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/main-page";
import ProfileUpdate from "../pages/profileUpdate";
import Landing from "../pages/landing";
import About from "../pages/about";
import Login from "../pages/login";
import Business from "../pages/business";
import Professionals from "../pages/professionals";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import NotFound from "../pages/404";
import FaqPage from "../pages/faq-page";

const PageRouter = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/add" element={<Add />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProfileUpdate />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/business" element={<Business />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/professionals" element={<Professionals />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default PageRouter;