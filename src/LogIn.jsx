import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBInput,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";

const LogIn = () => {
  return (
    <MDBContainer>
      <MDBRow className="align-items-center justify-content-center vh-100">
        <MDBCol className="col-md-4  d-flex flex-column justify-content-center align-items-center">
          <img src="logo.png" alt="Not found" width={150} className="mb-5" />
          <form className="shadow-5 p-3 my-3 w-100 rounded-9">
            <div className="text-center mb-5">
              <MDBTypography tag="h5" className="fw-bold ">
                Welcome Back!
              </MDBTypography>
              <MDBTypography tag="small">
                Enter your credentials to access your account
              </MDBTypography>
            </div>
            <MDBInput label="Email" id="email" type="email" className="mb-4" />
            <MDBInput
              label="Password"
              id="password"
              type="password"
              className="mb-4"
            />
            <MDBBtn className="w-100 rounded-5" color="success">
              Sign In
            </MDBBtn>
            <div className="text-center my-3">
              <MDBTypography tag="small">
                Forgot your password ? <a href="#">Reset Password</a>
              </MDBTypography>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default LogIn;
