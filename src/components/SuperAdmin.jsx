import Footer from "./Footer";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import { MDBContainer } from "mdb-react-ui-kit";

const SuperAdmin = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default SuperAdmin;
