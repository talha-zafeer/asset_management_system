import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import EmployeeProfile from "./EmployeeProfile";
import Table from "./Table";

const EmployeeDashboard = () => {
  return (
    <MDBContainer fluid className="rounded-5 shadow-5 my-5 p-3 bg-white w-80">
      <MDBRow>
        <EmployeeProfile />
      </MDBRow>
      <MDBRow>
        <Table />
      </MDBRow>
    </MDBContainer>
  );
};

export default EmployeeDashboard;
