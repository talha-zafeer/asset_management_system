import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
  MDBIcon,
  MDBBtn,
  MDBInput,
  MDBTextArea,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownToggle,
  MDBDropdownMenu,
} from "mdb-react-ui-kit";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddInventory = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("logo", logoFile);

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

        <MDBRow className="p-5 align-items-center border-bottom">
          <MDBCol sm="0" lg="2" className="text-start">
            <MDBTypography tag="small" className="fw-bold">
              Item Name
            </MDBTypography>
          </MDBCol>
          <MDBCol sm="12" lg="4" className="rounded-9">
            <MDBInput label="Name" id="name" type="text" required />
          </MDBCol>
        </MDBRow>
        <MDBRow className="p-5 align-items-center border-bottom">
          <MDBCol sm="0" lg="2" className="text-start">
            <MDBTypography className="fw-bold text-start" tag="small">
              Serial Number
            </MDBTypography>
          </MDBCol>
          <MDBCol sm="12" lg="4">
            <MDBInput label="Serial Number" id="serial" type="text" required />
          </MDBCol>
        </MDBRow>
        <MDBRow className="p-5 align-items-center border-bottom">
          <MDBCol sm="0" lg="2" className="text-start">
            <MDBTypography className="fw-bold text-start" tag="small">
              Description
            </MDBTypography>
          </MDBCol>
          <MDBCol sm="12" lg="4">
            <MDBTextArea
              label="Enter Description Here ..."
              id="description"
              rows={3}
              required
            />
          </MDBCol>
        </MDBRow>

        <MDBRow className="p-5 align-items-center border-bottom">
          <MDBCol sm="0" lg="2" className="text-start">
            <MDBTypography className="fw-bold text-start" tag="small">
              Category
            </MDBTypography>
          </MDBCol>
          <MDBCol sm="12" lg="4">
            <MDBDropdown>
              <MDBDropdownToggle
                className="rounded-5 border text-capitalize fs-6"
                color="transparent"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                Select Location
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem link>Action</MDBDropdownItem>
                <MDBDropdownItem link>Another action</MDBDropdownItem>
                <MDBDropdownItem link>Something else here</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBCol>
        </MDBRow>
        <MDBRow className="p-5 align-items-center border-bottom">
          <MDBCol sm="0" lg="2" className="text-start">
            <MDBTypography className="fw-bold text-start" tag="small">
              Sub Category
            </MDBTypography>
          </MDBCol>
          <MDBCol sm="12" lg="4">
            <MDBDropdown>
              <MDBDropdownToggle
                className="rounded-5 border text-capitalize fs-6"
                color="transparent"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                Select Sub-Category
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem link>Action</MDBDropdownItem>
                <MDBDropdownItem link>Another action</MDBDropdownItem>
                <MDBDropdownItem link>Something else here</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBCol>
        </MDBRow>

        <MDBRow className="p-5 align-items-center border-bottom">
          <MDBCol sm="0" lg="2" className="text-start">
            <MDBTypography tag="small" className="fw-bold">
              Price
            </MDBTypography>
          </MDBCol>
          <MDBCol sm="12" lg="4" className="rounded-9">
            <MDBInput label="Unit Price" id="price" type="text" required />
          </MDBCol>
        </MDBRow>
        <MDBRow className="p-5 align-items-center border-bottom">
          <MDBCol sm="0" lg="2" className="text-start">
            <MDBTypography className="fw-bold text-start" tag="small">
              Select Vendor
            </MDBTypography>
          </MDBCol>
          <MDBCol sm="12" lg="4">
            <MDBDropdown>
              <MDBDropdownToggle
                className="rounded-5 border text-capitalize fs-6"
                color="transparent"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                Select Vendor
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem link>Action</MDBDropdownItem>
                <MDBDropdownItem link>Another action</MDBDropdownItem>
                <MDBDropdownItem link>Something else here</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBCol>
        </MDBRow>
      </form>
    </MDBContainer>
  );
};

export default AddInventory;
