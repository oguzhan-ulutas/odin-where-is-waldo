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
    

    // const sortedLeaders = leaders.sort((a, b)=>a.seconds-b.seconds)
    console.log(rows)
  

  return (
    <div className="leader-board">
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.rank}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    
  );
}

export default LeaderBoard

