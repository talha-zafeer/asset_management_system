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
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [pending, isPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("jwt");
      const resetPassword = axios.post(
        "http://localhost:8000/users/reset",
        {
          password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const response = await resetPassword.data;
      console.log(response);
      response && navigate("/login");
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
            className="shadow-5 p-3 my-2 w-100 rounded-9 "
            onSubmit={handleSubmit}
          >
            <div className="text-center mb-5">
              <MDBTypography tag="h5" className="fw-bold ">
                Reset Password
              </MDBTypography>
              <MDBTypography tag="small">Enter your new password</MDBTypography>
            </div>
            <MDBInput
              label="Password"
              id="password"
              type="password"
              className="mb-4"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <MDBInput
              label="Confirm Password"
              id="confirm-password"
              type="password"
              className="mb-4"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <MDBBtn className="w-100 rounded-5 mb-3" color="success">
              Reset Password
            </MDBBtn>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ResetPassword;
