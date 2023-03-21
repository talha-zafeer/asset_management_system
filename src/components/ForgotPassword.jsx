import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBInput,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <MDBContainer>
      <MDBRow className="align-items-center justify-content-center vh-100">
        <MDBCol className="col-md-4  d-flex flex-column justify-content-center align-items-center">
          <img src="logo.png" alt="Not found" width={150} className="mb-5" />
          <form className="shadow-5 p-3 my-3 w-100 rounded-9">
            <div className="text-center mb-5">
              <MDBTypography tag="h5" className="fw-bold ">
                Forgot Password ?
              </MDBTypography>
              <MDBTypography className="lh-sm mt-4">
                <small>
                  Don't Worry, Enter your email address below and a verification
                  code will be sent to you
                </small>
              </MDBTypography>
            </div>
            <MDBInput label="Email" id="email" type="email" className="mb-4" />
            <MDBBtn className="w-100 rounded-5" color="success">
              Send Verification Code
            </MDBBtn>
            <div className="text-center my-3">
              <MDBTypography tag="small">
                Entered wrong credentials ? Go Back to{" "}
                <Link to="/login">Login</Link>
              </MDBTypography>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ForgotPassword;
