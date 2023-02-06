import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
  MDBIcon,
  MDBBtn,
  MDBInput,
  MDBTextArea,
} from "mdb-react-ui-kit";

const AddOrganizationForm = () => {
  return (
    <MDBContainer className="shadow-5 rounded-5 my-5 p-3 bg-white">
      <MDBRow className="justify-content-between align-items-center border-bottom pb-3">
        <MDBCol sm="12" lg="4" className="text-start">
          <MDBIcon fas icon="arrow-left" />
          <MDBTypography tag="small" className="mx-2">
            Back
          </MDBTypography>
          <MDBTypography tag="small" className="fw-bold fs-5 ms-5">
            Add New Organization
          </MDBTypography>
        </MDBCol>
        <MDBCol sm="12" lg="2" className="">
          <MDBBtn color="danger" className="me-3">
            Cancel
          </MDBBtn>
          <MDBBtn color="success">Save</MDBBtn>
        </MDBCol>
      </MDBRow>

      <MDBRow className="align-items-center py-5 border-bottom">
        <MDBCol sm="12" lg="2">
          <img
            src="/logo.png"
            className="rounded-7 profile-img "
            alt="Profile"
          />
        </MDBCol>
        <MDBCol sm="12" lg="3" className="text-start">
          <MDBTypography tag="h4">Organization's Logo</MDBTypography>
          <MDBTypography tag="small">
            Upload logo with min resolution (800 * 800)
          </MDBTypography>
        </MDBCol>
        <MDBCol sm="12" lg="2">
          <MDBBtn className="rounded-5 py-3">
            <MDBIcon fas icon="download" className="me-2" />
            Upload
          </MDBBtn>
        </MDBCol>
      </MDBRow>
      <MDBRow className="my-4 align-items-center">
        <MDBCol sm="0" lg="2" className="text-start">
          <MDBTypography tag="small" className="fw-bold">
            Name of Organization
          </MDBTypography>
        </MDBCol>
        <MDBCol sm="12" lg="4" className="rounded-9">
          <MDBInput label="Name" id="name" type="text" />
        </MDBCol>
      </MDBRow>
      <MDBRow className="my-5 align-items-center">
        <MDBCol sm="0" lg="2" className="text-start">
          <MDBTypography className="fw-bold text-start" tag="small">
            Email Address
          </MDBTypography>
        </MDBCol>
        <MDBCol sm="12" lg="4">
          <MDBInput label="E-Mail" id="email" type="email" />
        </MDBCol>
      </MDBRow>
      <MDBRow className="my-5 align-items-center">
        <MDBCol sm="0" lg="2" className="text-start">
          <MDBTypography className="fw-bold text-start" tag="small">
            Enter Bio
          </MDBTypography>
        </MDBCol>
        <MDBCol sm="12" lg="4">
          <MDBTextArea label="Short Bio" id="bio" rows={3} />
        </MDBCol>
      </MDBRow>
      <MDBRow className="my-5 align-items-center">
        <MDBCol sm="0" lg="2" className="text-start">
          <MDBTypography className="fw-bold text-start" tag="small">
            Address
          </MDBTypography>
        </MDBCol>
        <MDBCol sm="12" lg="4">
          <MDBInput label="Address" id="address" type="text" className="mb-2" />
          <MDBInput label="City" id="city" type="text" className="mb-2" />
          <MDBInput label="Country" id="country" type="text" className="mb-2" />
          <MDBInput label="Zip Code" id="zip-code" type="number" />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AddOrganizationForm;
