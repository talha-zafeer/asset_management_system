import {
  MDBBtn,
  MDBCol,
  MDBTypography,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";

const EmployeeProfile = () => {
  return (
    <>
      <MDBRow className="mb-4">
        <MDBCol className="text-start">
          <MDBTypography tag="h4">Dashboard</MDBTypography>
        </MDBCol>
        <MDBCol className="text-end">
          <MDBBtn color="success" className="px-3">
            <MDBIcon fas icon="pen" className="me-2" />
            Edit Profile
          </MDBBtn>
        </MDBCol>
      </MDBRow>
      <MDBRow className="mb-4 align-items-center justify-content-between ">
        <MDBCol md="12" lg="auto" className=" mb-4 ">
          <div className="employee-img rounded-7">
            <img src="/profile.jpeg" alt="Profile" className="rounded-7" />
          </div>
        </MDBCol>
        <MDBCol md="6" sm="12" lg="auto" className="text-start">
          <MDBRow className="mb-4">
            <MDBTypography tag="small">Full Name</MDBTypography>
            <MDBTypography tag="h6">Talha Zafeer Saadi</MDBTypography>
          </MDBRow>
          <MDBRow>
            <MDBTypography tag="small">Email Address</MDBTypography>
            <MDBTypography tag="h6">talha.zafeer@gmail.com</MDBTypography>
          </MDBRow>
        </MDBCol>
        <MDBCol md="6" sm="12" lg="auto" className="text-start">
          <MDBRow className="mb-4">
            <MDBTypography tag="small">Designation</MDBTypography>
            <MDBTypography tag="h6">Jr. Software Engineer</MDBTypography>
          </MDBRow>
          <MDBRow>
            <MDBTypography tag="small">Department</MDBTypography>
            <MDBTypography tag="h6">Development</MDBTypography>
          </MDBRow>
        </MDBCol>
        <MDBCol md="6" sm="12" lg="2" className="text-start">
          <MDBRow className="mb-4">
            <MDBTypography tag="small">Contact Number</MDBTypography>
            <MDBTypography tag="h6">+92 336 248 6167</MDBTypography>
          </MDBRow>
          <MDBRow>
            <MDBTypography tag="small">Education</MDBTypography>
            <MDBTypography tag="h6">BS - Software </MDBTypography>
          </MDBRow>
        </MDBCol>
        <MDBCol md="6" sm="12" lg="2" className="text-start">
          <MDBRow className="mb-4">
            <MDBTypography tag="small">Company Experience</MDBTypography>
            <MDBTypography tag="h6">3 Months</MDBTypography>
          </MDBRow>
          <MDBRow>
            <MDBTypography tag="small">Total Experience</MDBTypography>
            <MDBTypography tag="h6">6 Months</MDBTypography>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </>
  );
};

export default EmployeeProfile;
