import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";
// import TableContainer from "@material-ui/core/TableContainer";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
// import TableHead from "@material-ui/core/TableHead";
// import TableCell from "@material-ui/core/TableCell";

function formatOurData(columnName, semOneMarks, semTwoMarks, semThreeMarks) {
    return { columnName, semOneMarks, semTwoMarks, semThreeMarks};
}

const SampleData = [
    formatOurData("1", 55, "25-05-2022", "Due"),
    formatOurData("2", 44, "25-05-2022", "Panding"),
    formatOurData("3", 67, "25-05-2022", "Over Due"),
    formatOurData("4", 68, "25-05-2022", "Over Due"),

];

export function BookTransaction() {
    return (
        <div style={{ display: "block", padding: 0 }}>
            <h4></h4>
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
                            <TableCell className="book-item-thead">S.No </TableCell>
                            <TableCell align="center" className="book-item-thead">
                                Member Name
                            </TableCell>
                            <TableCell align="center" className="book-item-thead">
                                Book Title
                            </TableCell>

                            <TableCell align="center" className="book-item-thead">
                                Date of Borrowing
                            </TableCell>

                            <TableCell align="center" className="book-item-thead">
                                Due On
                            </TableCell>
                            <TableCell align="center" className="book-item-thead">
                                Status
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
                                    <strong>{row.semTwoMarks}</strong>
                                </TableCell>
                                <TableCell align="center" className="book-item-tbody">
                                    <strong>{row.semTwoMarks}</strong>
                                </TableCell>
                                <TableCell align="center" className="book-item-tbody">
                                    <strong>{row.semTwoMarks}</strong>
                                </TableCell>
                                <TableCell align="center">
                                        <div className={
                                                row.semThreeMarks==="Due"?"item-due"
                                                :row.semThreeMarks==="Panding"?"item-panding"
                                                :"item-over-due"
                                            }>
                                            {row.semThreeMarks}
                                        </div>        
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}