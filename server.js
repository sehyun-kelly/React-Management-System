const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
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
          }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));