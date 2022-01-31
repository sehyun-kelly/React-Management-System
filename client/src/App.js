import './App.css';
import * as React from 'react';
import { Component } from 'react';
import Customer from './components/Customer'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';


class App extends Component {
  state = {
    customers: "",
  }

  componentDidMount(){    
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }
 
  callApi = async() => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  render(){
    const { classes } = this.props;
    return ( 
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Occupation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {
          this.state.customers ? 
          this.state.customers.map(c => {
            return (
              <Customer id={c.id} src={c.image} name={c.name} birthday={c.bitrhday} gender={c.gender} job={c.job}/ >
            )
          }) : ""
          }
          </TableBody>
        </Table>
      </Paper>
    );
  }
    }

export default App;