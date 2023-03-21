import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
  MDBIcon,
  MDBBtn,
  MDBInput,
  MDBTextArea,
} from "mdb-react-ui-kit";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddOrganizationForm = () => {
  const [logoFile, setLogoFile] = useState(null);
  const [logo, setLogo] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [bio, setBio] = useState(null);
  const [address, setAddress] = useState(null);
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [zipCode, setZipCode] = useState(null);
  const [repName, setRepName] = useState(null);
  const [repContactNo, setRepContactNo] = useState(null);
  const navigate = useNavigate();

  const handleOrgName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleBio = (e) => setBio(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);
  const handleCity = (e) => setCity(e.target.value);
  const handleCountry = (e) => setCountry(e.target.value);
  const handleZipCode = (e) => setZipCode(e.target.value);
  const handleRepName = (e) => setRepName(e.target.value);
  const handleRepContactNo = (e) => setRepContactNo(e.target.value);
  const handleImageChange = (event) => {
    setLogo(URL.createObjectURL(event.target.files[0]));
    setLogoFile(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("logo", logoFile);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("bio", bio);
    formData.append("address", address);
    formData.append("repName", repName);
    formData.append("repContactNo", repContactNo);

    const result = await axios.post(
      "http://localhost:8000/superAdmin/add-organization",
      formData,
      {
        headers: {
          ContentType: "multipart/form-data",
        },
      }
    );
    navigate(-1);
  };

  return (
    <MDBContainer className="shadow-5 rounded-5 my-5 p-3 bg-white">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <MDBRow className="justify-content-between align-items-center border-bottom pb-3">
          <MDBCol sm="12" lg="4" className="text-start">
            <MDBIcon
              fas
              icon="arrow-left btn-back"
              onClick={() => navigate(-1)}
            />
            <MDBTypography
              tag="small"
              className="mx-2 btn-back"
              onClick={() => navigate(-1)}
            >
              Back
            </MDBTypography>
            <MDBTypography tag="small" className="fw-bol fs-5 ms-5">
              Add New Organization
            </MDBTypography>
          </MDBCol>
          <MDBCol sm="12" lg="2" className="">
            <MDBBtn color="danger" className="me-3">
              Cancel
            </MDBBtn>
            <MDBBtn color="success" type="submit">
              Save
            </MDBBtn>
          </MDBCol>
        </MDBRow>

        <MDBRow className="align-items-center py-5 border-bottom">
          <MDBCol sm="12" lg="2">
            <img src={logo} className="rounded-7 profile-img " alt="Profile" />
          </MDBCol>
          <MDBCol sm="12" lg="3" className="text-start">
            <MDBTypography tag="h4">Organization's Logo</MDBTypography>
            <MDBTypography tag="small">
              Upload logo with min resolution (800 * 800)
            </MDBTypography>
          </MDBCol>
          <MDBCol sm="12" lg="2">
            <label
              htmlFor="btn-img-upload"
              className="btn btn-primary rounded-5"
            >
              <MDBIcon fas icon="upload" className="me-2" />
              Upload
            </label>
            <input
              type="file"
              id="btn-img-upload"
              className="img-upload"
              onChange={handleImageChange}
              accept="image/*"
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="p-5 align-items-center border-bottom">
          <MDBCol sm="0" lg="2" className="text-start">
            <MDBTypography tag="small" className="fw-bold">
              Name of Organization
            </MDBTypography>
          </MDBCol>
          <MDBCol sm="12" lg="4" className="rounded-9">
            <MDBInput
              label="Name"
              id="name"
              type="text"
              onChange={handleOrgName}
              required
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="p-5 align-items-center border-bottom">
          <MDBCol sm="0" lg="2" className="text-start">
            <MDBTypography className="fw-bold text-start" tag="small">
              Email Address
            </MDBTypography>
          </MDBCol>
          <MDBCol sm="12" lg="4">
            <MDBInput
              label="E-Mail"
              id="email"
              type="email"
              onChange={handleEmail}
              required
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="p-5 align-items-center">
          <MDBCol sm="0" lg="2" className="text-start">
            <MDBTypography className="fw-bold text-start" tag="small">
              Enter Bio
            </MDBTypography>
          </MDBCol>
          <MDBCol sm="12" lg="4">
            <MDBTextArea
              label="Short Bio"
              id="bio"
              rows={3}
              onChange={handleBio}
              required
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className=" p-5 align-items-center border-bottom">
          <MDBCol sm="0" lg="2" className="text-start">
            <MDBTypography className="fw-bold text-start" tag="small">
              Address
            </MDBTypography>
          </MDBCol>
          <MDBCol sm="12" lg="4">
            <MDBInput
              label="Address"
              id="address"
              type="text"
              className="mb-3"
              onChange={handleAddress}
              required
            />
            <MDBInput
              label="City"
              id="city"
              type="text"
              className="mb-3"
              onChange={handleCity}
              required
            />
            <MDBInput
              label="Country"
              id="country"
              type="text"
              className="mb-3"
              onChange={handleCountry}
              required
            />
            <MDBInput
              label="Zip Code"
              id="zip-code"
              type="number"
              onChange={handleZipCode}
              required
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="p-5 align-items-center border-bottom">
          <MDBCol sm="0" lg="2" className="text-start">
            <MDBTypography tag="small" className="fw-bold">
              Representative Name
            </MDBTypography>
          </MDBCol>
          <MDBCol sm="12" lg="4" className="rounded-9">
            <MDBInput
              label="Rep. Name"
              id="rep_name"
              type="text"
              onChange={handleRepName}
              required
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="p-5 align-items-center border-bottom">
          <MDBCol sm="0" lg="2" className="text-start">
            <MDBTypography tag="small" className="fw-bold">
              Rep. Contact Number
            </MDBTypography>
          </MDBCol>
          <MDBCol sm="12" lg="4" className="rounded-9">
            <MDBInput
              label="Contact "
              id="name"
              type="text"
              onChange={handleRepContactNo}
              required
            />
          </MDBCol>
        </MDBRow>
      </form>
    </MDBContainer>
  );
};

export default AddOrganizationForm;
