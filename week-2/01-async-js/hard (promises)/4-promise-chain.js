/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise((resolve) => {
        setTimeout(() => {
          console.log(`Resolved after ${t} seconds`);
          resolve();
        }, t * 1000);
      });
}

function wait2(t) {
    return new Promise((resolve) => {
        setTimeout(() => {
          console.log(`Resolved after ${t} seconds`);
          resolve();
        }, t * 1000);
      });
}

function wait3(t) {
    return new Promise((resolve) => {
        setTimeout(() => {
          console.log(`Resolved after ${t} seconds`);
          resolve();
        }, t * 1000);
      });
}

function calculateTime(t1, t2, t3) {
 const start=Date.now()

 return t1()
 .then(() => t2())
 .then(() => t3())
 .then(() =>{
    const end=Date.now()
    return end-start;
 })
}

calculateTime(() => wait1(2), () => wait2(4), ()=> wait3(6)) .then((time) =>{
    console.log(`Total time taken ${time} ms `);
})

module.exports = calculateTime;
