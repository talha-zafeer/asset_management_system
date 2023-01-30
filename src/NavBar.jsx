import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MDBTabs, MDBTabsItem, MDBTabsLink } from "mdb-react-ui-kit";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-react-ui-kit";

const NavBar = ({ to }) => {
  const [basicActive, setBasicActive] = useState("dashboard");
  const navigate = useNavigate();
  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    navigate(value);
    setBasicActive(value);
  };
  return (
    <>
      <MDBNavbar expand="lg" sticky="top" light bgColor="light" className="p-0">
        <MDBContainer
          fluid
          className="justify-content-start p-0 align-items-end "
          style={{ backgroundColor: "white" }}
        >
          <MDBNavbarBrand className="p-2">
            <Link to="login" className="border-end ps-5 pe-3">
              <img src="/logo.png" height="50" alt="Giga Labs" loading="lazy" />
            </Link>
          </MDBNavbarBrand>
          <MDBNavbarNav className="mr-auto">
            <MDBTabs className="check">
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleBasicClick("dashboard")}
                  active={basicActive === "dashboard"}
                  className="fs-5 text-capitalize fw-bold p-3"
                >
                  Dashboard
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleBasicClick("organizations")}
                  active={basicActive === "organizations"}
                  className="fs-5 text-capitalize fw-bold p-3"
                >
                  Organizations
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleBasicClick("admins")}
                  active={basicActive === "admins"}
                  className="fs-5 text-capitalize fw-bold p-3"
                >
                  Admins
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleBasicClick("complaints")}
                  active={basicActive === "complaints"}
                  className="fs-5 text-capitalize fw-bold p-3"
                >
                  Complaints
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>
          </MDBNavbarNav>

          <MDBDropdown className="my-auto me-5">
            <MDBDropdownToggle
              tag="a"
              className="nav-link fs-5 text-reset fw-bold"
              role="button"
            >
              <img
                src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                alt=""
                style={{ width: "50px", height: "50px" }}
                className="rounded-circle mx-2"
              />
              Super Admin
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem link className="fs-5">
                View Profile
              </MDBDropdownItem>
              <MDBDropdownItem link className=" fs-5">
                Settings
              </MDBDropdownItem>
              <MDBDropdownItem link className="fs-5">
                Something else here
              </MDBDropdownItem>
              <MDBDropdownItem link className="btn-success fs-5">
                Sign Out
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default NavBar;
