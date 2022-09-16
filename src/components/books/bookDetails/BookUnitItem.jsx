import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";
  
function formatOurData(columnName, semOneMarks, semTwoMarks) {
  return { columnName, semOneMarks, semTwoMarks };
}
  
const SampleData = [
  formatOurData("1", 55, 66),
  formatOurData("2", 44, 94),
  formatOurData("3", 67, 85),
  formatOurData("4", 68, 95),
  formatOurData("5", 56, 85),
];
  
export  function BookUnitItem() {
  return (
    <div style={{ display: "block", padding: 0 }}>
      <TableContainer component={Paper}>
        <Table
          style={{
            // width: 1000,
            // height :  400, 
          }}
          size="small"
        >
          <TableHead>
            <TableRow>
              <TableCell className="book-item-thead">S.No</TableCell>
              <TableCell align="center" className="book-item-thead">
                Book Unit item identifier
              </TableCell>
              <TableCell align="center" className="book-item-thead">
                  Location identifier
              </TableCell>

              <TableCell align="center" className="book-item-thead">
                  Health Condition
              </TableCell>
              <TableCell align="center" className="book-item-thead">
                  No of Issue 
              </TableCell>
            

            </TableRow>
          </TableHead>
          <TableBody>
            {SampleData.map((row) => (
              <TableRow key={row.columnName}>
                <TableCell component="th" scope="row" className="book-item-tbody">
                  {row.columnName}
                </TableCell>
                <TableCell align="center" className="book-item-tbody">
                    <strong>{row.semOneMarks}</strong>
                </TableCell>
                <TableCell align="center" className="book-item-tbody">
                    <strong>{row.semOneMarks}</strong>
                </TableCell>
                <TableCell align="center" className="book-item-tbody">
                    <strong>{row.semOneMarks}</strong>
                </TableCell>
                <TableCell align="center"className="book-item-tbody">
                    {row.semTwoMarks}
                </TableCell>
               
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}