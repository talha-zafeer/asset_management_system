import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBNavbarToggler,
} from "mdb-react-ui-kit";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { navBar } from "../constants/nav-links";

const NavBar = ({ navType }) => {
  // const [basicActive, setBasicActive] = useState("dashboard");
  // const [showBasic, setShowBasic] = useState(false);

  // const navigate = useNavigate();
  // const handleBasicClick = (value) => {
  //   if (value === basicActive) {
  //     return;
  //   }
  //   navigate(value);
  //   setBasicActive(value);
  // };
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      {/* <MDBNavbar expand="lg" sticky="top" className="p-0">
        <MDBContainer
          fluid
          className=" p-0 "
          style={{ backgroundColor: "white" }}
        >
          <MDBNavbarBrand className="p-2">
            <a href="http://localhost:3000" className="border-end ps-5 pe-3">
              <img src="/logo.png" height="50" alt="Giga Labs" loading="lazy" />
            </a>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className=" mr-auto mb-lg-0">
              <MDBTabs>
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleBasicClick("dashboard")}
                    active={basicActive === "dashboard"}
                    className="fs-6 text-capitalize  p-3"
                  >
                    Dashboard
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleBasicClick("organizations")}
                    active={basicActive === "organizations"}
                    className="fs-6 text-capitalize  p-3"
                  >
                    Organizations
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleBasicClick("admins")}
                    active={basicActive === "admins"}
                    className="fs-6 text-capitalize p-3"
                  >
                    Admins
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleBasicClick("complaints")}
                    active={basicActive === "complaints"}
                    className="fs-6 text-capitalize  p-3"
                  >
                    Complaints
                  </MDBTabsLink>
                </MDBTabsItem>
              </MDBTabs>
            </MDBNavbarNav>
          </MDBCollapse>

          <MDBDropdown className="my-auto me-5">
            <MDBDropdownToggle
              tag="a"
              className="nav-link fs-6 text-reset"
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
      </MDBNavbar> */}
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand className="p-2">
            <a href="http://localhost:3000" className="border-end ps-5 pe-3">
              <img src="/logo.png" height="50" alt="Giga Labs" loading="lazy" />
            </a>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNav(!showNav)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNav}>
            <MDBNavbarNav>
              {navType &&
                navBar[navType].map((navItem) => (
                  <MDBNavbarItem>
                    <Link to={navItem.toLowerCase()}>
                      <MDBNavbarLink>{navItem}</MDBNavbarLink>
                    </Link>
                  </MDBNavbarItem>
                ))}
            </MDBNavbarNav>
          </MDBCollapse>
          <MDBDropdown className="my-auto me-5">
            <MDBDropdownToggle
              tag="a"
              className="nav-link fs-6 text-reset"
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
