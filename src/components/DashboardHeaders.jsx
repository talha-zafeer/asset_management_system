import { MDBCol, MDBTypography } from "mdb-react-ui-kit";
import { MDBIcon } from "mdb-react-ui-kit";

const DashboardHeaders = ({ stats }) => {
  const status = stats.total / 2 > stats.currentMonth;
  const style = status ? "green" : "red";
  return (
    <>
      <MDBCol>
        <MDBTypography className="" tag="h5">
          {stats.name}
        </MDBTypography>
        <MDBTypography tag="h1" className="my-3">
          {stats.total}
          {status && (
            <MDBIcon fas icon="caret-up" color="success" className="px-3" />
          )}
          {!status && (
            <MDBIcon fas icon="caret-down" color="danger" className="px-3" />
          )}
        </MDBTypography>
        <MDBTypography tag="small" style={{ color: style }}>
          {stats.currentMonth} {stats.name} this month
        </MDBTypography>
      </MDBCol>
    </>
  );
};

export default DashboardHeaders;
