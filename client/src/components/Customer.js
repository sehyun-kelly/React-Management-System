import '../App.css';
import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import CustomerDelete from './CustomerDelete';

function Customer(props){
    return (
        <TableRow>
            <TableCell>{props.id}</TableCell>
            <TableCell><img className="image" src={props.src} alt="profile"/></TableCell>
            <TableCell>{props.name}</TableCell>
            <TableCell>{props.birthday}</TableCell>
            <TableCell>{props.gender}</TableCell>
            <TableCell>{props.job}</TableCell>
            <TableCell><CustomerDelete stateRefresh={props.stateRefresh} id={props.id}/></TableCell>
        </TableRow>
    )
}

export default Customer;
