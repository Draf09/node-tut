//Globals NO WINDOW
//__dirname - path to the current directory
//__filename - filename
//require - function to use modules
//module - info about current module (CommonJS)
//process - info about env where the program is being executed


// const amount = 6

// if(amount < 10) {
//     console.log('small number');
// } 
// else {
//     console.log('large number');
// }
// console.log(`my first node app `)

//---------------------------------------
// console.log(__dirname)
// setInterval(() => {
//     console.log('hello world')
// }, 1000)
//---------------------------------------
//modules 



// const names = require('./4-names')
// const sayHi = require('./5-utils')
// const data = require('./6-alternative-flavor')
// require('./7-mind-grenade')
//console.log(data)
// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)

//-------------------------------------

// --------------------------  OS --------------------------




// const http =require('http')

// const server = http.createServer((req,res)=>{
//     if (req.url === '/') {
//         res.end('Welcome to our page')
//     }
//     // console.log(req)
//     // res.write()
//     if (req.url === '/about') {
//         for (let i = 0; i < 1000; i++) {
//             for (let j = 0; j < 1000; j++) {
//                 console.log(`${i} ${j}`)
//         }
//         res.end('This is our history')
//     }
// })

// server.listen(5000)

// const getText = (path) => {
//     return new Promise((resolve, reject)) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data 
//             }
//         })
//     })
// }



http
    .createServer(function (req, res){
        const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
        fileStream.on('open', ()=>{
            fileStream.pipe(res)
        })
        fileStream.on('error',(err)=>{
            res.end(err)
        })
    })
    .listen(5000)

