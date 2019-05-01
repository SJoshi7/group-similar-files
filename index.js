//import path and fs modules
const path = require('path');
const fs = require('fs');

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
    
    var fileExt=[];
    var fileType=[];

    for(var i=0;i<files.length;i++){
        fileExt[i]=path.extname(files[i]);
    }

    fileExt = fileExt.filter(Boolean)

    for(var value of fileExt){
        if(fileType.indexOf(value)===-1){
            
            fileType.push(value);

            try {
                if (!fs.existsSync(value)){
                  fs.mkdirSync(value)
                }
              } catch (err) {
                console.error(err)
            }
        }
    }

   

});




