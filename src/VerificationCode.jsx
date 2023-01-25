import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBInput,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";

const VerificationCode = () => {
  return (
    <MDBContainer>
      <MDBRow className="align-items-center justify-content-center vh-100">
        <MDBCol className="col-md-4  d-flex flex-column justify-content-center align-items-center">
          <img src="logo.png" alt="Not found" width={150} className="mb-5" />
          <form className="shadow-5 p-3 my-3 w-100 rounded-9">
            <div className="text-center my-4">
              <MDBTypography tag="h5" className="fw-bold ">
                Verification Code
              </MDBTypography>
              <MDBTypography className="lh-sm mt-3">
                <small>
                  Enter the verification code sent to your email address
                </small>
              </MDBTypography>
            </div>
            <MDBInput
              label="Verification Code"
              id="verification-code"
              type="text"
              className="mb-4"
            />
            <MDBBtn className="w-100 rounded-5" color="success">
              Continue
            </MDBBtn>
            <div className="text-center my-3">
              <MDBTypography tag="small"> Resend Code (25sec)</MDBTypography>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default VerificationCode;
