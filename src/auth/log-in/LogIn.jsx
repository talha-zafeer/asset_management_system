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
import { apiEndPoints, apiHeaders, apiMethods } from "../../constants";

const LogIn = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [pending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await fetch(apiEndPoints.LOGIN, {
        method: apiMethods.POST,
        body: JSON.stringify({ email, password }),
        headers: apiHeaders.LOGIN_HEADERS,
        credentials: "include",
      });
      const data = await result.json();
      if (data.errors) {
        console.log(data.errors);
      }
      if (data.accessToken) {
        setIsPending(true);
        console.log(data);
        localStorage.setItem("jwt", data.accessToken);
        data.role === 1 && navigate("/super-admin/dashboard");
        data.role === 2 && navigate("/admin/dashboard");
        data.role === 3 && navigate("/employee/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <MDBContainer>
      <MDBRow className="align-items-center justify-content-center vh-100">
        <MDBCol className="col-lg-5  d-flex flex-column justify-content-center align-items-center">
          <img src="logo.png" alt="Not found" width={150} className="mb-5" />
          <form
            className="shadow-5 p-3 my-3 w-100 rounded-9"
            onSubmit={handleLogin}
          >
            <div className="text-center mb-5">
              <MDBTypography tag="h3" className="fw-bold ">
                Welcome Back!
              </MDBTypography>
              <MDBTypography>
                Enter your credentials to access your account
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
            <MDBInput
              label="Password"
              id="password"
              type="password"
              className="mb-4"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <MDBBtn
              className="w-100 rounded-5 mb-4"
              color="success"
              type="submit"
            >
              Sign In
            </MDBBtn>
            Welcome Back!
            <div className="text-center my-3">
              <MDBTypography tag="small">
                Forgot your password ?
                <Link to="/forgot-password">Reset Password</Link>
              </MDBTypography>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default LogIn;
