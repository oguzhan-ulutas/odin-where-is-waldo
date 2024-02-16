import { useContext } from "react"
import { AppContext } from "../AppContext"
import "./LeaderBoard.css"

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(rank, name, time) {
  return { rank, name, time };
}



const LeaderBoard = ()=>{
    const {leaders, setLeaders} = useContext(AppContext)

    const rows = leaders.map((leader, index)=>{
   return createData(index+1, leader.name, leader.time)
  })

  return (
    <div className="leader-board">
      <h1>Leader Board</h1>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow key="header">
            <TableCell>Rank</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row._id}
              
            >
              <TableCell  >
                {row.rank}
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    
  );
}

export default LeaderBoard

