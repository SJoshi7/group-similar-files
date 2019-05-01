//import path and fs modules
const path = require('path');
const fs = require('fs');

//get the current working directory
var dirPath = process.cwd();

//reading dir 
fs.readdir(dirPath,function(err,files){
    //handling error
    if(err){
        return console.log('Unable to scan directory: ', err);
    }
});


