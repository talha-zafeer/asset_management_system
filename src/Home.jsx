import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBInput,
  MDBTypography,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("login");
  };
  const handleSuperAdmin = () => {
    navigate("/super-admin/dashboard");
  };
  return (
    <>
      <MDBContainer fluid class=" backGround-img ">
        <MDBRow className="row g-0 justify-content-center vh-100 align-items-center">
          <div class="col-lg-4 mb-5 mb-lg-0">
            <div
              class="card "
              style={{
                background: "hsla(0, 0%, 100%, 0.75)",
                backdropFilter: "blur(30px)",
              }}
            >
              <div class="card-body p-5 shadow-5 text-center">
                <img src="logo.png" height="100" className="mb-5" />
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBInput label="First Name" id="typeText" type="text" />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput label="Last Name" id="typeText" type="text" />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol className="">
                    <MDBInput
                      label="Enter your email "
                      id="typeEmail"
                      type="email"
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBInput
                      label="Enter your password "
                      id="typePassword"
                      type="password"
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-4 align-items-center justify-content-center">
                  <MDBCol size="8">
                    <MDBCheckbox
                      name="flexCheck"
                      id="flexCheckDefault"
                      label="Subscribe to our newsletter"
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-5">
                  <MDBCol>
                    <MDBBtn color="primary" className="w-100">
                      Register Now
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-2">
                  <MDBCol>
                    <MDBTypography tag="body-2">
                      Already have an account ?{" "}
                    </MDBTypography>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBBtn
                      color="success"
                      className="w-100"
                      onClick={handleLogin}
                    >
                      Login Here
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBBtn color="danger" onClick={handleSuperAdmin}>
                      Super Admin
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </div>
            </div>
          </div>
        </MDBRow>
      </MDBContainer>

      <Footer />
    </>
  );
};

export default Home;
