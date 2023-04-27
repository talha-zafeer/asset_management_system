import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBInput,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { HashLoader } from "react-spinners";
import axios from "axios";

const ForgotPassword = () => {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loaderColor, setLoaderColor] = useState("#14A44D");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const sendOtp = await axios.post("http://localhost:8000/password-reset", {
        email,
      });
      const response = await sendOtp.data;

      setLoading(false);

      localStorage.setItem("jwt", response);
      navigate("/verification");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <MDBContainer>
      {!loading && (
        <MDBRow className="align-items-center justify-content-center vh-100">
          <MDBCol className="col-md-4  d-flex flex-column justify-content-center align-items-center">
            <img src="logo.png" alt="Not found" width={150} className="mb-5" />
            <form
              className="shadow-5 px-3 py-4 my-3 w-100 rounded-9"
              onSubmit={handleSubmit}
            >
              <div className="text-center mb-4">
                <MDBTypography tag="h5" className="fw-bold mt-2">
                  Forgot Password ?
                </MDBTypography>
                <MDBTypography className="lh-sm m-2">
                  <small>
                    Don't Worry, Enter your email address below and a
                    verification code will be sent to you
                  </small>
                </MDBTypography>
              </div>
              <MDBInput
                label="Email"
                id="email"
                type="email"
                className="mb-4"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <MDBBtn className="w-100 rounded-5" color="success">
                Send Verification Code
              </MDBBtn>
              <div className="text-center py-3">
                <MDBTypography tag="small">
                  Entered wrong credentials ? Go Back to
                  <Link to="/login">Login</Link>
                </MDBTypography>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      )}
      {loading && (
        <MDBRow className="vh-100 justify-content-center align-items-center">
          <HashLoader
            color={loaderColor}
            loading={loading}
            cssOverride={override}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </MDBRow>
      )}
    </MDBContainer>
  );
};

export default ForgotPassword;
