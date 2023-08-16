import React from "react"
import './Layout.css'
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";


const Layout = () => {
  return (
    <div className="layout-wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
};

export default Layout;
