import * as React from 'react';
import '../App.css';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {dataSet} from "./Dataset";

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
  '&:nth-of-type(odd)': {
    backgroundColor: 'none',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function Lists() {

  const[appState, changeState] = useState({
    activeObject: null,
    read: false,
    dataSet: dataSet
  });

  const toggleActive=(index)=> {

  changeState({...appState, activeObject: appState.dataSet[index] , read: !appState.read});
  
  }

  const toggleActiveStyles = (index) => {
    if((appState.dataSet[index] === appState.activeObject && appState.read )){
      return 'active'
    }
  }

  return (
    <>
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell align="right">Player 1</StyledTableCell>
            <StyledTableCell align="right">Player 2</StyledTableCell>
            <StyledTableCell align="right">Result</StyledTableCell>
            <StyledTableCell align="right">Over</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appState.dataSet.map((data, index) => (
            <StyledTableRow color='red' className={toggleActiveStyles(index)} key={data.id} onClick={() => toggleActive(index)}>
              <StyledTableCell component="th" scope="row">
                {data.date}
              </StyledTableCell>
              <StyledTableCell align="right">{data.player_1}</StyledTableCell>
              <StyledTableCell align="right">{data.player_2}</StyledTableCell>
              <StyledTableCell align="right">{data.result}</StyledTableCell>
              <StyledTableCell align="right">{data.over}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
