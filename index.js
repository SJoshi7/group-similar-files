//import path, fs and shelljs modules
const path = require('path');
const fs = require('fs');
const shell = require('shelljs');

//get the current working directory
var dirPath = process.cwd();

//array to store the extension names
var fileType = [];

//reading dir 
fs.readdir(dirPath,function(err,files){
    //handling error
    if(err){
        return console.log('Unable to scan directory: ', err);
    }
    //array for storing extensions 
    var fileExt=[]; //contains duplicate elements too
    var fileType=[]; //only contains unique elements

    //copying extname in fileExt
    for(var i=0;i<files.length;i++){
        fileExt[i]=path.extname(files[i]);
    }

    //removing empty string from array
    fileExt = fileExt.filter(Boolean)

    //pushing unique values in fileType and creating folders for unique extensions    
    for(var value of fileExt){
        if(fileType.indexOf(value)===-1){
            fileType.push(value);
            try {
                if (!fs.existsSync("All_"+value)){
                  fs.mkdirSync("All_"+value);
                }
              } catch (err) {
                console.error(err)
            }
        }
    }

    //move files into their respective folder 
    for(var value of fileType){
        for(var val of files){
            if(value==path.extname(val)){
                shell.mv(val,"All_"+value);
            }
        }
    }


   

});




