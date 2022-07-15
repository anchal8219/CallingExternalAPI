const apiCallFromRequest = require('./Request')
const apiCallFromNode = require('./NodeJsCall')
const http= require('http')
const schedule=require('node-schedule')

const port= process.env.PORT || 3000;

http.createServer((req, res) => {
    if(req.url === "/request"){
        apiCallFromRequest.callApi(function(response){
            res.write(JSON.stringify(response));
            res.end();
            schedule.scheduleJob('0 * * * *',(req,res)=>{
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
}).listen(port);

console.log("service running on port"+ port);


