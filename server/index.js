const express = require('express');
const mongoose = require('mongoose');
const Record = require('./model/blog');
const Contact = require('./model/contact');
require('dotenv').config(); // Import and configure dotenv

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Use the environment variable for the MongoDB connection
const dbURI = process.env.MONGO_LINK;

mongoose.connect(dbURI)
    .then((result) => app.listen(3000, () => console.log('Server is running on port 3000')))
    .catch((err) => console.log(err));

// Routes
app.get('/', async (req, res) => {
    try {
        const latestRecord = await Record.findOne().sort({ createdAt: -1 });
        const totalSpending = await Record.aggregate([{ $group: { _id: null, total: { $sum: "$amount" } } }]);
        const categoryTotals = await Record.aggregate([{ $group: { _id: "$cat", total: { $sum: "$amount" } } }]);

        res.render('home', {
            title: 'Home page',
            record: latestRecord,
            totalSpending: totalSpending[0] ? totalSpending[0].total : 0,
            categoryTotals
        });
    } catch (err) {
        console.log(err);
    }
});

app.get('/add', (req, res) => {
    res.render('add', { title: 'Add Record' });
});

app.get('/connect', (req, res) => {
    res.render('connect', { title: 'Connect with Us' });
});

app.post('/add', (req, res) => {
    const newRecord = new Record(req.body);
    newRecord.save()
        .then((result) => {
            res.redirect('/add');
        })
        .catch((err) => {
            console.log(err);
        });
});

app.post('/connect', (req, res) => {
    const newContact = new Contact(req.body);
    newContact.save()
        .then((result) => {
            res.redirect('/connect');
        })
        .catch((err) => {
            console.log(err);
        });
});

app.delete('/blogs/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await Record.findByIdAndDelete(id);
        res.json({ redirect: '/history' });
    } catch (err) {
        console.log(err);
        res.status(500).send("Error deleting record");
    }
});

app.get('/history', (req, res) => {
    Record.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('history', { show: result, title: 'Spending history' });
        })
        .catch((err) => {
            console.log(err);
        });
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});