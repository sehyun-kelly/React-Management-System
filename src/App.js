import './App.css';
import Customer from './components/Customer'

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

function App() {
  return ( 
    <div>
      {
        customers.map(c => {
          return (
            <Customer
            id={c.id}
            src={c.src}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
            / >
          )
        })
      }
    </div>
  );
}

export default App;