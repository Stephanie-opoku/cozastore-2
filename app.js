const express = require('express');
const app = express();
const port = 3505;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/Public'));

app.get('/', (req, res) =>{
    res.render('index');
})

app.get('/home-02', (req, res) =>{
    res.render('home-02');
})

app.get('/home-03', (req, res) =>{
    res.render('home-03');
})

app.get('/about', (req, res)=>{
    res.render('about');
})

app.get('/contact', (req, res)=>{
    res.render('contact')
})

app.get('/blog', (req, res)=>{
    res.render('blog')
})

app.get('/product', (req, res)=>{
    res.render('shop')
})

app.get('/shoping-cart', (req, res)=>{
    res.render('features')
})

app.listen(port,()=>{
    console.log(`listening on port http://localhost:${port}`);
});