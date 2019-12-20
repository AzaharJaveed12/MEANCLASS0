const express = require('express')
const app = express()
app.use(express.static('frontend'))
const port = 3000

app.get('/', (req, res) => res.sendFile(__dirname+'/frontend/html/home.html'))
app.get('/login', (req, res) => res.send('Login'))
app.get('/register', (req, res) => res.send('register'))
app.get('/data',(req,res)=>res.json({name:'javeed',age:20}))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))