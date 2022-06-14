const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    console.log('user hit the resource')
    res.status(200).send('Home Page')
})

app.get('/about', (req,res)=>{
    console.log('user hit the resource')
    res.status(200).send('About Page')
})


app.all('*', (req,res)=>{
    console.log('user hit the resource')
    res.status(400).send('<h1>resource not found</h1>')
})
app.listen(5000, () => {
    console.log('server is listten on port 5000...')
})

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen

