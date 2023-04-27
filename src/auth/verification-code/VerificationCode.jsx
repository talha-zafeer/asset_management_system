import axios from "axios";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBInput,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";

const VerificationCode = () => {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  const navigate = useNavigate();

  const [otp, setOtp] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loaderColor, setLoaderColor] = useState("#14A44D");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("jwt");
      setLoading(true);

      const verifyOtp = await axios.post(
        "http://localhost:8000/password-reset/verification-code",
        { otp },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const response = await verifyOtp.data;

      setLoading(false);

      localStorage.setItem("jwt", response);

      response && navigate("/reset-password");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <MDBContainer>
      <MDBRow className="align-items-center justify-content-center vh-100">
        <MDBCol className="col-md-4  d-flex flex-column justify-content-center align-items-center">
          <img src="logo.png" alt="Not found" width={150} className="mb-5" />
          <form
            className="shadow-5 p-3 my-3 w-100 rounded-9"
            onSubmit={handleSubmit}
          >
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
              onChange={(e) => setOtp(e.target.value)}
              required
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
      {loading && (
        <MDBRow className="vh-100 justify-content-center align-items-center">
          <HashLoader
            color={loaderColor}
            loading={loading}
            cssOverride={override}
            size={70}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </MDBRow>
      )}
    </MDBContainer>
  );
};

export default VerificationCode;
