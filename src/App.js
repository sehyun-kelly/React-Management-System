import './App.css';
import Customer from './components/Customer'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const customers = [{
    'id': '1',
    'src': 'https://dummyimage.com/64x64/0da88c/fff.png&text=profile',
    'name': 'Kelly Park',
    'birthday': '920418',
    'gender': 'Female',
    'job': 'Student'
  },
  {
    'id': '2',
    'src': 'https://dummyimage.com/64x64/0da88c/fff.png&text=profile',
    'name': 'Jun Park',
    'birthday': '160322',
    'gender': 'Male',
    'job': 'Student'
  },
  {
    'id': '3',
    'src': 'https://dummyimage.com/64x64/0da88c/fff.png&text=profile',
    'name': 'Aiden Park',
    'birthday': '210710',
    'gender': 'Male',
    'job': 'Baby'
  },
]

function App(props) {
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
        customers.map(c => {
          return (
            <Customer id={c.id} src={c.src} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/ >
          )
        })
      }
        </TableBody>
      </Table>
    </Paper>
  );
}

export default App;