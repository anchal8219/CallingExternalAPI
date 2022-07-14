const request = require('request')

_EXTERNAL_URL = 'https://brl1test.herokuapp.com/';

const callExternalApiUsingRequest = (callback)=>{
    request(_EXTERNAL_URL, {json: true},(err,res,_EXTERNAL_URL)=>{
        if(err){
            return callback(err);
        }
        return callback(res);
    });
}
module.exports.callApi = callExternalApiUsingRequest;
