// const express=require('express')
const apiCallFromRequest = require('./Request')
const apiCallFromNode = require('./NodeJsCall')
const http= require('http')
// const app = express()
const schedule=require('node-schedule')

// app.get('/',(req,res)=>{
//     const url = 'https://brl1test.herokuapp.com/';
//     https.get(url,(response)=>{
//         console.log(response);
// })

http.createServer((req, res) => {
    if(req.url === "/request"){
        apiCallFromRequest.callApi(function(response){
            res.write(JSON.stringify(response));
            res.end();
            schedule.scheduleJob('* * * * * *',(req,res)=>{
            console.log(response);

        });
    })
    }
    else if(req.url === "/node"){
        apiCallFromNode.callApi(function(response){
            res.write(response);
            res.end();
        });
    }
    // res.end();
}).listen(4000);

console.log("service running on 4000 port....");


// app.get('/request',(req,res)=>{
//     const url = 'https://brl1test.herokuapp.com/';
//     http.get(url,(response)=>{
//         schedule.scheduleJob('* * * * * *',()=>{
//         console.log(response);
// })
//     })
// })


// schedule.scheduleJob('* * * * * *',(req,res)=>{
    // console.log('I ran...')
    // if(req.url === "/request"){
    //     apiCallFromRequest.callApi(function(response){
    //         console.log(response);
    //     //     res.write(JSON.stringify(response));
    //     //     res.end();
    //     });
    // }
    // schedule.cancelJob('m-job');
// })

//    OR-
// const mJob = schedule.scheduleJob('m-job','*/2 * * * * *',()=>{
//     console.log('I ran...')
//     mJob.cancel()
// })



// app.listen(3000,()=>{
//     console.log("running ");
// })