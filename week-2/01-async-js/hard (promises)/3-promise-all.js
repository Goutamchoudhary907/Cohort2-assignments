/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
 return new Promise((resolve)=>{
  setTimeout(()=>{
    // console.log("Resolved after 2 sec");
    resolve()
  },2000)
 })
}

function wait2(t) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
        //   console.log("Resolved after 4 sec");
          resolve()
        },4000)
    })      
}

function wait3(t) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
        //   console.log("Resolved after 6 sec");
          resolve()
        },6000)
    }) 
}

function calculateTime(t1, t2, t3) {
  const start=Date.now();  
 return Promise.all([t1(),t2(),t3()]).then(()=>{
    const end=Date.now();
    return end-start;
 })
}

calculateTime(wait1,wait2,wait3).then((time)=>{
    console.log(`Time taken ${time} ms`);
    
})
module.exports = calculateTime;
