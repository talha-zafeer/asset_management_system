import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import EmployeeProfile from "./EmployeeProfile";
import Table from "./Table";

const EmployeeDashboard = () => {
  return (
    <MDBContainer className="rounded-5 shadow-5 my-5 p-3 bg-white">
      <MDBRow>
        <EmployeeProfile />
      </MDBRow>
      <MDBRow>
        <Table tableType="RECENT_REQUESTS" />
      </MDBRow>
      <MDBRow>{/* <Table tableType="RECENT_COMPLAINTS" /> */}</MDBRow>
    </MDBContainer>
  );
};

export default EmployeeDashboard;
