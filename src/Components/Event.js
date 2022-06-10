import { useEffect } from "react";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import {fetchData} from '../actions/dataActions';



const Event = () => {
    const myState= useSelector((state) => state.data )
    console.log('mystate' , myState)
    const {data} = myState;
    console.log(data)
    const dispatch = useDispatch();
    useEffect(() => {
      const getData = () => {
    fetch("http://wmservices.wavesys.pt:5235/challenge/events")
      .then((res) => res.json())
      .then((data) => dispatch(fetchData(data.data)));    
  }
  getData()
  }, []);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

 
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200   }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Time</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
            <StyledTableCell align="right">Read</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.map((data) => {
              return (
                <StyledTableRow key={data.id}>
                  <StyledTableCell component="th" scope="row">
                    {data.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{data.time}</StyledTableCell>
                  <StyledTableCell align="right">
                    {data.description}
                  </StyledTableCell>
                  <StyledTableCell align="right">{data.read ? 'true' : 'false'}</StyledTableCell>
                </StyledTableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Event;
