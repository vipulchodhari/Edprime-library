

import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
  
function formatOurData(columnName, semOneMarks, semTwoMarks) {
  return { columnName, semOneMarks, semTwoMarks };
}
  
const SampleData = [
  formatOurData("1", 55, 66),
  formatOurData("2", 44, 94),
  formatOurData("3", 67, 85),
  formatOurData("4", 68, 95),
  
];
  
export  function  BookTransaction() {
  return (
    <div style={{ display: "block", padding: 0 }}>
      <h4></h4>
      <TableContainer component={Paper}>
        <Table
          style={{
            width: 1000,
            height :  300, 
          }}
          size="small"
        >
          <TableHead>
            <TableRow>
              <TableCell>S.No </TableCell>
              <TableCell align="center">
                  Member Name
              </TableCell>
              <TableCell align="center">
                  Book Title
              </TableCell>

              <TableCell align="center">
                    Date of Borrowing
              </TableCell>
              
              <TableCell align="center">
                    Due On 
              </TableCell>
              <TableCell align="center">
                  Status
              </TableCell>
             
            </TableRow>
          </TableHead>
          <TableBody>
            {SampleData.map((row) => (
              <TableRow key={row.columnName}>
                <TableCell component="th" scope="row">
                  {row.columnName}
                </TableCell>
                <TableCell align="center">
                    {row.semOneMarks}
                </TableCell>
                <TableCell align="center">
                    {row.semTwoMarks}
                </TableCell>
                <TableCell align="center">
                    {row.semTwoMarks}
                </TableCell>
                <TableCell align="center">
                    {row.semTwoMarks}
                </TableCell>
                <TableCell align="center">
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