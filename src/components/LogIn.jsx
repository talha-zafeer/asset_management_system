import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBInput,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useState } from "react";

const LogIn = () => {
  return (
    <MDBContainer>
      <MDBRow className="align-items-center justify-content-center vh-100">
        <MDBCol className="col-lg-5  d-flex flex-column justify-content-center align-items-center">
          <img src="logo.png" alt="Not found" width={150} className="mb-5" />
          <form className="shadow-5 p-3 my-3 w-100 rounded-9">
            <div className="text-center mb-5">
              <MDBTypography tag="h3" className="fw-bold ">
                Welcome Back!
              </MDBTypography>
              <MDBTypography>
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
                Forgot your password ?{" "}
                <Link to="/reset-password">Reset Password</Link>
              </MDBTypography>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default LogIn;
