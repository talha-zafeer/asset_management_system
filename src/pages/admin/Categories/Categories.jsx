import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInputGroup,
  MDBIcon,
  MDBDropdownToggle,
  MDBDropdown,
  MDBTypography,
  MDBBtn,
  MDBDropdownItem,
  MDBDropdownMenu,
} from "mdb-react-ui-kit";
const Categories = () => {
  return (
    <MDBContainer className="shadow-5 rounded-5 my-5 p-3 bg-white">
      <MDBRow className="my-3 justify-content-around align-items-center">
        <MDBCol className="px-0">
          <MDBRow className="align-items-center justify-content-start">
            <MDBCol size={2}>
              <MDBTypography tag="h4" className="text-start px-3">
                Categories
              </MDBTypography>
            </MDBCol>
            <MDBCol size={3}>
              <MDBInputGroup noBorder textAfter={<MDBIcon fas icon="search" />}>
                <input
                  className="form-control border rounded-5"
                  type="text"
                  placeholder="Search"
                />
              </MDBInputGroup>
            </MDBCol>
          </MDBRow>
        </MDBCol>
        <MDBCol size={3} className="text-end pe-3">
          <MDBBtn color="success" className="fs-6 rounded-3">
            <MDBIcon className="me-2" fab icon="plus" />
            Add Category
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Categories;
