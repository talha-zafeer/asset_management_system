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
import Table from "../../../components/Table";
import { useNavigate } from "react-router-dom";
const InventoryDetailsPage = () => {
  const navigate = useNavigate();
  const handleAddInvenotry = () => {
    navigate("add-inventory");
  };

  return (
    <MDBContainer className="shadow-5 rounded-5 my-5 p-3 bg-white">
      <MDBRow className="my-3 justify-content-around align-items-center">
        <MDBCol className="px-0">
          <MDBRow className="align-items-center justify-content-around">
            <MDBCol size={2}>
              <MDBTypography tag="h4" className="text-start px-3">
                Inventory
              </MDBTypography>
            </MDBCol>
            <MDBCol>
              <MDBInputGroup noBorder textAfter={<MDBIcon fas icon="search" />}>
                <input
                  className="form-control border rounded-5"
                  type="text"
                  placeholder="Search"
                />
              </MDBInputGroup>
            </MDBCol>
            <MDBCol className="text-start" size={2}>
              <MDBDropdown>
                <MDBDropdownToggle
                  className="rounded-5 border text-capitalize fs-6 px-3"
                  color="transparent"
                >
                  Select Category
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Action</MDBDropdownItem>
                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBCol>
            <MDBCol className="text-start">
              <MDBDropdown>
                <MDBDropdownToggle
                  className="rounded-5 border text-capitalize fs-6 px-3"
                  color="transparent"
                >
                  Select Sub-Category
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
        <MDBCol size="2" className="text-end pe-3">
          <MDBBtn
            color="success"
            className="fs-6 rounded-3"
            onClick={handleAddInvenotry}
          >
            <MDBIcon className="me-2" fab icon="plus" />
            Add Item
          </MDBBtn>
        </MDBCol>
      </MDBRow>
      <MDBRow className="my-5">
        <Table tableType="INVENTORY" />
      </MDBRow>
    </MDBContainer>
  );
};

export default InventoryDetailsPage;
