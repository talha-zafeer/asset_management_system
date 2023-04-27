import axios from "axios";
import {
  MDBContainer,
  MDBTypography,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Table from "../../../components/Table";

const ViewOrganization = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const [admins, setAdmins] = useState();
  const [verticalActive, setVerticalActive] = useState("tab1");

  const handleVerticalClick = (value) => {
    if (value === verticalActive) {
      return;
    }
    setVerticalActive(value);
  };

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    const admins = axios
      .get(`http://localhost:8000/users/org/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setAdmins(response.data);
      });
    admins && console.log(admins);
  }, []);
  return (
    <MDBContainer className="shadow-5 rounded-5 my-5 p-3 bg-white">
      <MDBRow className="justify-content-between align-items-center border-bottom pb-3">
        <MDBCol sm="12" lg="4" className="text-start">
          <MDBIcon
            fas
            icon="arrow-left btn-back"
            onClick={() => navigate(-1)}
          />
          <MDBTypography
            tag="small"
            className="mx-2 btn-back"
            onClick={() => navigate(-1)}
          >
            Back
          </MDBTypography>
        </MDBCol>
        <MDBCol sm="12" lg="2" className="text-end">
          <MDBDropdown>
            <MDBDropdownToggle className="hidden-arrow rounded-5 px-3">
              <MDBIcon fas icon="fas fa-ellipsis-v fa-lg"></MDBIcon>
            </MDBDropdownToggle>
            <MDBDropdownMenu responsive="end">
              <MDBDropdownItem link className="   border-bottom">
                <MDBIcon far icon="edit" className="pe-2 text-primary " />
                <span className="fw-bold fs-6">Edit</span>
              </MDBDropdownItem>
              <MDBDropdownItem link>
                <MDBIcon far icon="trash-alt" className="pe-2 text-danger " />
                <span className="fw-bold fs-6">Delete</span>
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBCol>
      </MDBRow>
      <MDBRow className="my-5">
        <MDBCol size="2">
          <MDBTabs className="flex-column text-center" fill="true">
            <MDBTabsItem>
              <MDBTabsLink
                className={
                  verticalActive === "tab1"
                    ? "bg-primary text-white px-0"
                    : "px-0"
                }
                onClick={() => handleVerticalClick("tab1")}
                active={verticalActive === "tab1"}
              >
                General Information
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink
                className={
                  verticalActive === "tab2"
                    ? "bg-primary text-white px-0 "
                    : "px-0"
                }
                onClick={() => handleVerticalClick("tab2")}
                active={verticalActive === "tab2"}
              >
                Admins
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>
        </MDBCol>
        <MDBCol size="10">
          <MDBTabsContent>
            {admins && (
              <MDBTabsPane
                className="border-start"
                show={verticalActive === "tab1"}
              >
                <MDBRow className="border-bottom align-items-center justify-content-start">
                  <MDBCol sm="6" lg="2">
                    <img
                      src={admins[0].logo}
                      className="rounded-7 profile-img "
                      alt="Profile"
                    />
                  </MDBCol>
                  <MDBCol sm="6" lg="2">
                    <MDBTypography tag="h4">{admins[0].orgName}</MDBTypography>
                    <MDBTypography tag="small">
                      {admins[0].repName}
                    </MDBTypography>
                  </MDBCol>
                </MDBRow>
              </MDBTabsPane>
            )}
            <MDBTabsPane show={verticalActive === "tab2"}>
              {admins && <Table tableType="ORG_ADMINS" data={admins} />}
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ViewOrganization;
