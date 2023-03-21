import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { tableHeaders, tableDataFields } from "../constants/tableHeaders";

const Table = ({ tableType, data }) => {
  const [tableData, setTableData] = useState(null);

  useEffect(() => {
    data && setTableData(data);
  }, [data]);

  return (
    <MDBTable
      responsive
      striped
      borderless
      hover
      align="middle"
      className="text-start"
    >
      <MDBTableHead className="fs-6 bg-primary text-white">
        <tr>
          {tableType &&
            tableHeaders[tableType].map((header) => (
              <th scope="col">{header}</th>
            ))}
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {tableData &&
          tableData.map((data, idx) => (
            <tr>
              <td>{idx}</td>
              {tableType &&
                tableDataFields[tableType].map((value) =>
                  value == "logo" ? (
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={data[value]}
                          alt={data.name}
                          style={{ width: "45px", height: "45px" }}
                          className="rounded-5"
                        />
                      </div>
                    </td>
                  ) : (
                    <td>{data[value]}</td>
                  )
                )}
              <td>
                <MDBBtn color="link" rounded size="sm">
                  View
                </MDBBtn>
              </td>
              {/* <td>{idx}</td>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src={data.logo}
                    alt={data.name}
                    style={{ width: "45px", height: "45px" }}
                    className="rounded-5"
                  />
                </div>
              </td>
              <td>{data.name}</td>
              <td>{data.address}</td>
              <td>{data.repContactNo}</td>
              <td>
                <MDBBtn color="link" rounded size="sm">
                  View
                </MDBBtn>
              </td> */}
            </tr>
          ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default Table;
