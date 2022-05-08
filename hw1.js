function promise1() {
    return new Promise((resolve,reject)=> {
        resolve(); 
    })
}; 

promise1()
.then(()=>console.log('success'))
.catch(()=>console.log('there was an error'))

function promise2(errorBoolean) {
    return new Promise((resolve,reject) => {
        if (errorBoolean) {
            reject('There was an error'); 
        } else {
            resolve('Your data you asked for.'); 
        }
    })
}

promise2(true)
//Promise {<fulfilled>: 'Your data you asked for.'}
.then(data => console.log(data))
.catch(error => console.log(error))
promise2(false)
//VM80:4 Uncaught (in promise) There was an error
.then(data => console.log(data))
.catch(error => console.log(error)) 

const promise3 = new Promise((resolve,reject) => {
    resolve('promise 3 complete')
}); 
promise3
//Promise {<fulfilled>: 'promise 3 complete'}
.then(data => console.log(data))
.catch(error => console.log(error)); 

const promise4 = new Promise ((resolve, reject) => {
    // reject('There was an error w/ promise4')
    resolve('Promise 4 complete')
}); 
promise4
//Uncaught (in promise) There was an error w/ promise4
.then(data => console.log(data))
.catch(error => console.log(error))


const promise5 = new Promise((resolve, reject) => {
    resolve('Promise 5 complete')
})
.then(data => console.log(data))
.catch(error => console.log(error))
promise5; 

//Now lets wait for all of our promises to complete then do something. 

Promise.all([promise3, promise4, promise5]) // Promise.all() takes an array of promises
.then(data => console.log(data))
.catch(error => console.log(error))

// let xhttp = new XMLHttpRequest(); 
// xhttp.open('GET', 'http://api.icndb.com/jokes/15', true);
// xhttp.onload = function () {
//     console.log(this.responseText); 
//     const joke = JSON.parse(this.responseText).value.joke; 
//     console.log(joke); 
// };
// xhttp.send(); 

let xhr = new XMLHttpRequest();

xhr.open('GET', 'http://api.icndb.com/jokes/15', true);

xhr.onload = function () {
	console.log(JSON.parse(this.responseText).value.joke);
};

xhr.send();
