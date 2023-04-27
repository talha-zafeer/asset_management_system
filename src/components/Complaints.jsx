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
import Table from "./Table";
import { useEffect, useState } from "react";
import axios from "axios";

const Complaints = () => {
  const [complaints, setComplaints] = useState();

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    axios
      .get("http://localhost:8000/complaints", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setComplaints(response.data);
      });
  }, []);

  return (
    <MDBContainer className="shadow-5 rounded-5 my-5 p-3 bg-white">
      <MDBRow className="my-3 justify-content-around align-items-center">
        <MDBCol size="9" className="px-0">
          <MDBRow className="align-items-center justify-content-start">
            <MDBCol size="2">
              <MDBTypography tag="h3" className="fw-bold">
                Complaints
              </MDBTypography>
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
            <MDBCol size="2">
              <MDBDropdown>
                <MDBDropdownToggle
                  color="transparent"
                  className="rounded-5 border text-capitalize fs-6 px-3"
                >
                  Select Organization
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Action</MDBDropdownItem>
                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBCol>
            <MDBCol size="3">
              <MDBDropdown>
                <MDBDropdownToggle
                  color="transparent"
                  className="rounded-5 border text-capitalize fs-6 px-3"
                >
                  Select Status
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
          <MDBBtn color="success" className="fs-6 rounded-6">
            <MDBIcon className="me-3" fab icon="plus" />
            Add
          </MDBBtn>
        </MDBCol>
      </MDBRow>
      <MDBRow className="my-3">
        {complaints && <Table tableType="COMPLAINTS" data={complaints} />}
      </MDBRow>
    </MDBContainer>
  );
};

export default Complaints;
