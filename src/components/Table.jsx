import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { tableHeaders, tableDataFields, actionRoute } from "../constants/tableHeaders";
import { useNavigate } from "react-router-dom";

const Table = ({ tableType, data }) => {
  const [tableData, setTableData] = useState();
  const navigate = useNavigate();

  const handleOrganization = (id) => {
    navigate(`details/${id}`);
  };

  useEffect(() => {
    setTableData(data);
  }, []);

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
              <td>{idx + 1}</td>
              {tableType &&
                tableDataFields[tableType].map((value) =>
                  value === "logo" ? (
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={`data:image/jpeg;base64,${data.logo}`}
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
                <MDBBtn
                  color="link"
                  rounded
                  size="sm"
                  onClick={() => handleOrganization(data.id)}
                >
                  View
                </MDBBtn>
              </td>
            </tr>
          ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default Table;
