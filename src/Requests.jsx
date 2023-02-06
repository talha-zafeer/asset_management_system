import {
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBTypography,
  MDBContainer,
} from "mdb-react-ui-kit";
import Table from "./Table";
const Requests = () => {
  return (
    <MDBContainer fluid className="rounded-6 shadow-5 my-5 p-3 bg-white w-80">
      <MDBRow className="mb-4">
        <MDBCol className="text-start">
          <MDBTypography tag="h4">Requests</MDBTypography>
        </MDBCol>
        <MDBCol className="text-end">
          <MDBBtn color="success" className="px-3">
            <MDBIcon fas icon="plus" className="me-2" />
            Create Request
          </MDBBtn>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <Table />
      </MDBRow>
    </MDBContainer>
  );
};

export default Requests;
