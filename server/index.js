const express = require('express');
const mongoose = require('mongoose');
const Record = require('./model/blog');
const Contact = require('./model/contact');

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');

//mongo db
const dbURI = 'mongodb+srv://sittafrfr:test1234@mongotypeshi.l1ycl.mongodb.net/notes?retryWrites=true&w=majority&appName=MongoTypeShi';
mongoose.connect(dbURI)
    .then((result)=>app.listen(3000))
    .catch((err)=>console.log(err));




//getting diff types of req to access pages
app.get('/',(req,res)=>{
    res.render('home',{title: 'Home page'});
})
app.get('/add',(req,res)=>{
    res.render('add',{title: 'Add Record'});
})
// app.get('/history',(req,res)=>{
//     res.render('history',{title: 'Spending History'});
// })
app.get('/update',(req,res)=>{
    res.render('update',{title: 'Updating Information'});
})
app.get('/contact',(req,res)=>{
    res.render('contact',{title: 'Contact Us'});
})

//getting data from submit btn
app.post('/add',(req, res)=>{
    //console.log(req.body);
    const newRecord = new Record(req.body);
    newRecord.save()
       .then((result)=>{
           res.redirect('/add');
       })
       .catch((err)=>{
           console.log(err);
       })
})
app.post('/contact',(req, res)=>{
    const newContact = new Contact(req.body);
    newContact.save()
       .then((result)=>{
           res.redirect('/contact');
       })
       .catch((err)=>{
           console.log(err);
       })
})


//trial
// app.get('/all',(req,res)=>{
//     Record.find()
//         .then((result)=>{
//             res.send(result);
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
// })
//showing spending history

app.get('/history', (req, res) => {
    Record.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('history', { show: result, title: 'Spending history' });        })
        .catch((err) => {
            console.log(err);
        });
});

app.use((req,res)=>{
    res.status(404).render('404', {title: '404'});
})