const fs = require('fs'); 
const path = require('path'); 

// try{
//     fs.mkdirSync('myNewFolder'); 
//     console.log('myNewFolder directory created'); 
// } catch(err){
//     console.log(err); 
// }

// fs.access('./myNewFolder', fs.constants.F_OK,(err) => {
//     if (err) { //folder does not exist
//         fs.mkdir('myNewFolder', (err)=>{
//             if (err) {
//                 console.log('errors during creation' + err)
//             }
//         })
//     }
//     else { console.log('folder created or already exists')
//     }
// });

// fs.mkdirSync('myNewFolder'); 
// console.log('myNewFolder directory created');
// if (fs.access('./myNewFolder', fs.constants.F_OK, (err)=> {
//     if (err) 
//         {console.log(err);} 
// })) 
//     {console.log('file already exists, do nothing')}
// else {
//     fs.mkdir('myNewFolder', (err)=>{
//         if(err) {console.log('errors during creation:' + err)}
//     });
// }

// function makeFolder() {
//     if (fs.access('./myNewFolder', fs.constants.F_OK, (err)=> console.log(err))) {
//         console.log('the folder already exists')
//     } else {
//         fs.mkdirSync('myNewFolder'); 
//         console.log('myNewFolder directory created');
//     }
// }
// makeFolder(); 
// Notice that if you execute file.js with node again an error occurs. To fix this lets wrap our mkdir() method with fs.access() to check if the folder already exists. HINT: fs.constants.F_OK checks to see if the file is accessible/exists. In your error callback you can simply do the same as above and console.log an error IF there is one, the else block of the if statement should contain the fs.mkdir() command from above. i.e. if is accessible do nothing console.log() the error, if it is unaccessible (doesn't exist) create the directory.
// fs.access('./myNewFolder', fs.constants.F_OK, (err) => {
//     console.log('checking if folder exists'); 
//     if (err) {
//         console.log(err);
//     }else {
//         fs.mkdirSync('myNewFolder'); 
//         console.log('myNewFolder directory created'); 
//     }
// } )


    // fs.access('./myNewFolder', fs.constants.F_OK, (err) => {
    //     console.log('checking if folder exists'); 
    //     if (!err) {
    //         fs.mkdirSync('myNewFolder'); 
    //         console.log('myNewFolder directory created'); 
    //     } else {
    //         console.log(err); 
    //     }
    // }) 

    // fs.writeFileSync('./myNewFolder/hello.txt', 'hello world!', (err)=> {
    //     if (err) {
    //         console.log(err)
    //     }
    // })
    // fs.readFile('./myNewFolder/hello.txt', 'utf-8', (err) => {
    //     if (err){
    //         console.log(err)
    //     }
    // })
