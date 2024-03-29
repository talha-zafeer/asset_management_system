import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Employee = () => {
  return (
    <>
      <NavBar navType="EMPLOYEE" />
      <Outlet />
      <Footer />
    </>
  );
};

export default Employee;
