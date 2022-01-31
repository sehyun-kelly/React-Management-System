import './App.css';
import * as React from 'react';
import { Component } from 'react';
import Customer from './components/Customer'
import CusomterAdd from './components/CustomerAdd'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      custoemrs: '',
      completed: 0
    }
  }

  stateRefresh = () => {
    this.setState({
      customers: '',
      completed: 0
    });
    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));
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
      <div>
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
              <Customer id={c.id} src={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/ >
            )
          }) : ""
          }
          </TableBody>
        </Table>
      </Paper>
      <CusomterAdd stateRefresh={this.stateRefresh}/>
      </div>
    );
  }
    }

export default App;