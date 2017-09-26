const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const axios = require('axios')

const app = express();

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.set('views', './views');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const data = {
        person: {
            firstName: 'Jason',
            lastName: 'Scott',
        }
    }
    res.render('index', data);
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.post('/thanks', (req, res) => {
    res.render('thanks', { contact: req.body})
});
    //console.log(req.body);
//     axios.put('https://sheets.googleapis.com/v4/spreadsheets/1fQp3TplBvN_hVoQ6BHf9imSDfFh040u6fK7YIkD6g6A/values:batchUpdate', 
//     {
//         "range": "Sheet1!A1:D5",
//         "majorDimension": "ROWS",
//         "values": [
//             ["Item", "Cost", "Stocked", "Ship Date"],
//             ["Wheel", "$20.50", "4", "3/1/2016"],
//             ["Door", "$15", "2", "3/15/2016"],
//             ["Engine", "$100", "1", "30/20/2016"],
//             ["Totals", "=SUM(B2:B4)", "=SUM(C2:C4)", "=MAX(D2:D4)"]
//         ]
//     }).then(function(response){
//         console.log(response)
//         res.send('success')
//     }).catch(function(err){
//         console.log(err)
//         res.send(err.message)
//     })
    
//     //res.render('thanks', { contact: req.body})
// });


app.listen(8080, () => {
    console.log('listening at http://localhost:8080');
});
