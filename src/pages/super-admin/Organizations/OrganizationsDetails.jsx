import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTypography,
  MDBInputGroup,
  MDBIcon,
} from "mdb-react-ui-kit";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import Table from "../../../components/Table";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { HashLoader } from "react-spinners";

const OrganizationsDetailsPage = () => {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  const [organizations, setOrganizations] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loaderColor, setLoaderColor] = useState("#14A44D");
  const handleAddOrganization = () => {
    navigate("/super-admin/organizations/add-organization");
  };

  useEffect(() => {
    const fetchOrganizations = async () => {
      setLoading(true);
      const { data } = await axios.get("http://localhost:8000/organizations/");
      data && console.log(data);
      console.log(data);
      setOrganizations(data);
      setLoading(false);
    };

    fetchOrganizations();
  }, []);
  return (
    <MDBContainer className="shadow-5 rounded-5 my-5 p-3 bg-white">
      <MDBRow className="my-3 justify-content-around align-items-center">
        <MDBCol size="8" className="px-0">
          <MDBRow className="align-items-center justify-content-between">
            <MDBCol size="3">
              <MDBTypography tag="h4">Organizations</MDBTypography>
            </MDBCol>
            <MDBCol size="4">
              <MDBInputGroup noBorder textAfter={<MDBIcon fas icon="search" />}>
                <input
                  className="form-control border rounded-5"
                  type="text"
                  placeholder="Search"
                />
              </MDBInputGroup>
            </MDBCol>
            <MDBCol className="text-start">
              <MDBDropdown>
                <MDBDropdownToggle
                  className="rounded-5 border text-capitalize fs-6 px-3"
                  color="transparent"
                >
                  Select Location
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Action</MDBDropdownItem>
                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBCol>
          </MDBRow>
        </MDBCol>
        <MDBCol size="3" className="text-end px-0">
          <MDBBtn
            color="success"
            className="fs-6 rounded-3"
            onClick={handleAddOrganization}
          >
            <MDBIcon className="me-2" fab icon="plus" />
            Add
          </MDBBtn>
        </MDBCol>
      </MDBRow>
      <MDBRow className="my-3">
        {!loading && organizations && (
          <Table tableType="ORG" data={organizations} />
        )}
        {loading && (
          <MDBRow
            className="justify-content-center align-items-center"
            style={{ minHeight: "500px" }}
          >
            <HashLoader
              color={loaderColor}
              loading={loading}
              cssOverride={override}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </MDBRow>
        )}
      </MDBRow>
    </MDBContainer>
  );
};

export default OrganizationsDetailsPage;
