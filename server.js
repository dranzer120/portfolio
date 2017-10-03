const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(express.static(__dirname + '/public'));

app.set('views', './views');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const data = {
        person: {
            firstName: 'Jason',
            lastName: 'Tong',
        }
    }
    res.render('index', data);
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.post('/thanks', (req, res) => {
    res.render('thanks', { contact: req.body})
})

app.listen(process.env.PORT || 8080, () => {
    console.log('listening at http://localhost:8080');
});
