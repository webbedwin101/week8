const fs = require('fs'); 
const path = require('path'); 

fs.access('./myNewFolder', fs.constants.F_OK, (err)=>{
    if (err) {
        console.log(err); 
        //create the folder 
        fs.mkdir('myNewFolder', (err) => {
            if (err) {
                console.log('error during creation ' + err)
            }
        })
    }
})

fs.writeFile('./myNewFolder/hello.txt', 'Hello World!', (err) => {
    if (err) {
        console.log(err); 
    }
})

fs.readFile('./myNewFolder/hello.txt', 'utf-8', (err,data) => {
    if (err){
        console.log(err)
    }
    console.log(data); 
})
// fs function code blocks must be run individually to complete the task. 