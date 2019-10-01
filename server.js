require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const bodyParser =require('body-parser');
// const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 3000;

const publicPath = (path.join(__dirname, '/public'));
const srcPath = (path.join(__dirname, '/src'));
// const viewsPath = (path.join(__dirname, '/views'));

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
// app.set('views', viewsPath);


app.use(express.static(publicPath));
app.use(express.static(srcPath));
//app.use(express.static(viewsPath));
app.use(bodyParser.json());

// mongoose
//     .connect(process.env.MONGO_URI, {useNewUrlParser: true})
//     .then(() => console.log('MongoDb connected...'))
//     .catch(err => console.log(err))

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(PORT, () => { console.log('Server is running...')});

