import { MDBContainer, MDBRow, MDBTypography, MDBCol } from "mdb-react-ui-kit";

import DashboardHeaders from "../../../components/DashboardHeaders";

import Charts from "../../../components/Chart";
import Table from "../../../components/Table";
const AdminDashboard = () => {
  const orgData = [
    ["Category", "Assigned", "Remaining"],
    ["Electronics", 43, 12],
    ["Furniture", 12, 3],
    ["Stationary", 32, 33],
  ];
  const adminData = [
    ["Month", "Pending", "Resolved"],
    ["Jan", 32, 12],
    ["Feb", 50, 32],
    ["March", 72, 54],
    ["April", 200, 23],
    ["May", 732, 22],
    ["June", 322, 421],
    ["July", 567, 31],
    ["August", 222, 231],
    ["Sept", 156, 321],
    ["October", 555, 23],
    ["Nov", 324, 32],
    ["Dec", 888, 123],
  ];
  const headerStats = [
    {
      name: "Employees",
      total: 5000,
      currentMonth: 400,
    },
    {
      name: "Inventory Items",
      total: 10000,
      currentMonth: 400,
    },
    {
      name: "Vendors",
      total: 200,
      currentMonth: 175,
    },

    {
      name: "Categories",
      total: 15000,
      currentMonth: 500,
    },
  ];
  return (
    <MDBContainer fluid className="rounded-5 shadow-5 my-5 p-3 bg-white w-90">
      <MDBTypography tag="h3" className="text-start">
        Dashboard
      </MDBTypography>
      <MDBRow className="justify-content-around border-bottom py-5 align-items-center border-bottom">
        {headerStats.map((stats) => (
          <DashboardHeaders stats={stats} />
        ))}
      </MDBRow>
      <MDBRow className="my-5">
        <MDBCol>
          <Charts data={orgData} />
        </MDBCol>
        <MDBCol>
          <Charts data={adminData} />
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <Table tableType="RECENT_COMPLAINTS" />
      </MDBRow>
    </MDBContainer>
  );
};

export default AdminDashboard;
