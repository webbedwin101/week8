// const { Console } = require('console');
const path = require('path'); 
let myPath = path.join('Users', 'edwinwebb', 'Desktop', 'week8', 'path', 'hello.txt')
console.log(myPath); 
// /Users/edwinwebb/Desktop/week8/path/hello.txt
let pathObject = path.parse(myPath); 
console.log(pathObject); 
// {
//     root: '',
//     dir: 'Users/edwinwebb/Desktop/week8/path',
//     base: 'hello.txt',
//     ext: '.txt',
//     name: 'hello'
//   }
