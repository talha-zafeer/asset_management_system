import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Admin = () => {
  return (
    <>
      <NavBar navType="ADMIN" />
      <Outlet />
      <Footer />
    </>
  );
};

export default Admin;
