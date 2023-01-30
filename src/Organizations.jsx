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

const Organizations = () => {
  return (
    <MDBContainer className="shadow-5 rounded-5 my-5 p-3 bg-white">
      <MDBRow className="my-3 justify-content-between align-items-center">
        <MDBCol size="9" className="px-0">
          <MDBRow className="align-items-center justify-content-start">
            <MDBCol size="2">
              <MDBTypography tag="h3" className="fw-bold">
                Organizations
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
            <MDBCol>
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
          <MDBBtn color="success" className="fs-6 rounded-6">
            <MDBIcon className="me-3" fab icon="plus" />
            Add
          </MDBBtn>
        </MDBCol>
      </MDBRow>
      <MDBRow className="my-3">
        <Table />
      </MDBRow>
    </MDBContainer>
  );
};

export default Organizations;
