import {
  MDBCol,
  MDBRow,
  MDBTabs,
  MDBTypography,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBContainer,
} from "mdb-react-ui-kit";
import { useState } from "react";
import Table from "./Table";
import Chart from "./Chart";
import DashboardHeaders from "./DashboardHeaders";

const Dashboard = () => {
  const [basicActive, setBasicActive] = useState("organizations");
  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };
  const orgData = [
    ["Month", "Sales"],
    ["Jan", 300],
    ["Feb", 50],
    ["March", 350],
    ["April", 246],
    ["May", 732],
    ["June", 664],
    ["July", 821],
    ["August", 297],
    ["Sept", 550],
    ["October", 1000],
    ["Nov", 623],
    ["Dec", 888],
  ];
  const adminData = [
    ["Month", "Sales"],
    ["Jan", 32],
    ["Feb", 50],
    ["March", 72],
    ["April", 200],
    ["May", 732],
    ["June", 322],
    ["July", 567],
    ["August", 222],
    ["Sept", 156],
    ["October", 555],
    ["Nov", 324],
    ["Dec", 888],
  ];
  const headerStats = [
    {
      name: "Organizations",
      total: 5000,
      currentMonth: 400,
    },
    {
      name: "Admins",
      total: 10000,
      currentMonth: 400,
    },
    {
      name: "Pending Complaints",
      total: 200,
      currentMonth: 175,
    },

    {
      name: "Resolved Complaints",
      total: 15000,
      currentMonth: 500,
    },
  ];
  return (
    <>
      <MDBContainer fluid className="rounded-5 shadow-5 my-5 p-3 bg-white w-90">
        <MDBTypography tag="h3" className="text-start">
          Dashboard
        </MDBTypography>
        <MDBRow className="justify-content-around border-bottom py-5 align-items-center ">
          {headerStats.map((stats) => (
            <DashboardHeaders stats={stats} />
          ))}
        </MDBRow>
        <MDBRow className="align-items-center my-5">
          <MDBCol>
            <MDBTypography tag="h6" className="fw-bold text-start">
              Analytics
            </MDBTypography>
          </MDBCol>
          <MDBCol>
            <MDBTabs className="justify-content-end check">
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleBasicClick("organizations")}
                  active={basicActive === "organizations"}
                  className="text-capitalize fw-bold p-2"
                >
                  Organizations
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleBasicClick("admins")}
                  active={basicActive === "admins"}
                  className="text-capitalize fw-bold p-2"
                >
                  Admins
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBTabsContent>
            <MDBTabsPane show={basicActive === "organizations"}>
              <Chart data={orgData} />
            </MDBTabsPane>
            <MDBTabsPane show={basicActive === "admins"}>
              <Chart data={adminData} />
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBRow>
        <MDBRow className="align-items-center mt-5">
          <MDBCol>
            <MDBTypography tag="h6" className="fw-bold text-start">
              Recent Complaints
            </MDBTypography>
          </MDBCol>
          <MDBCol>
            <MDBTypography className="text-end">See All</MDBTypography>
          </MDBCol>
        </MDBRow>
        <MDBRow className=" rounded-5 ">
          <Table />
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Dashboard;
