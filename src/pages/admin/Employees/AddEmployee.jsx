import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
  MDBIcon,
  MDBBtn,
  MDBInput,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownToggle,
  MDBDropdownMenu,
} from "mdb-react-ui-kit";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddEmployee = () => {
  return (
    <MDBContainer className="shadow-5 rounded-5 my-5 p-3 bg-white">
      <form encType="multipart/form-data">
        <MDBRow className="justify-content-between align-items-center border-bottom pb-3">
          <MDBCol sm="12" lg="4" className="text-start">
            <MDBIcon fas icon="arrow-left btn-back" />
            <MDBTypography tag="small" className="mx-2 btn-back">
              Back
            </MDBTypography>
            <MDBTypography tag="small" className="fw-bol fs-5 ms-5">
              Add New Employee
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
          <MDBCol sm="12" lg="2" className="overflow-hidden rounded-7">
            <img src="" className="rounded-7 profile-img " alt="Profile" />
          </MDBCol>
          <MDBCol sm="12" lg="3" className="text-start">
            <MDBTypography tag="h4">Employee's Picture</MDBTypography>
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
              accept="image/*"
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="px-5 pt-5 align-items-center ">
          <MDBCol sm="0" lg="2" className="text-start">
            <MDBTypography tag="small" className="fw-bold">
              Name
            </MDBTypography>
          </MDBCol>
          <MDBCol sm="12" lg="4" className="rounded-9">
            <MDBInput label="Name" id="name" type="text" required />
          </MDBCol>
        </MDBRow>
        <MDBRow className="p-5 align-items-center ">
          <MDBCol sm="0" lg="2" className="text-start">
            <MDBTypography className="fw-bold text-start" tag="small">
              Email Address
            </MDBTypography>
          </MDBCol>
          <MDBCol sm="12" lg="4">
            <MDBInput label="E-Mail" id="email" type="email" required />
          </MDBCol>
        </MDBRow>
        <MDBRow className="px-5 align-items-center ">
          <MDBCol sm="0" lg="2" className="text-start">
            <MDBTypography tag="small" className="fw-bold">
              Contact Number
            </MDBTypography>
          </MDBCol>
          <MDBCol sm="12" lg="4" className="rounded-9">
            <MDBInput
              label="Contact Number"
              id="contact"
              type="text"
              required
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="p-5 align-items-center border-bottom">
          <MDBCol sm="0" lg="2" className="text-start">
            <MDBTypography className="fw-bold text-start" tag="small">
              Department
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
                Select Department
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
          <MDBTypography tag="h4" className="text-start">
            Credentials
          </MDBTypography>
          <MDBTypography tag="small" className="text-start">
            Below are the one timed created credentials. These will be sent to
            the registered email address.
          </MDBTypography>
          <MDBCol sm="0" lg="2" className="text-start my-5">
            <MDBTypography tag="small" className="fw-bold">
              Password
            </MDBTypography>
          </MDBCol>
          <MDBCol sm="12" lg="4" className="rounded-9">
            <MDBInput
              label="Password "
              id="password"
              type="password"
              required
            />
          </MDBCol>
        </MDBRow>
      </form>
    </MDBContainer>
  );
};

export default AddEmployee;
