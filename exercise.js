// Promise01

const isLogged = true;

function fn1() {
  return new Promise((resolve, reject) => {
    if (isLogged === true) {
      resolve("Is true: Resove");
    } else {
      reject("Is false: Reject");
    }
  });
}

const promise1 = fn1();

setTimeout(() => {
  promise1
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log('Error 1001');
    })
    .finally(() => {
      console.log('Promise 01 completed');
  });
}, 1000);

// Promise02

const number = 100;

function fn2() {
  return new Promise((resolve, reject) => {
    if (number > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      reject(`Error : Reject`);
    }
  });
}

const promise2 = fn2();

setTimeout(() => {
  promise2
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log('Error 1002');
    })
    .finally(() => {
      console.log('Experimets completed');
  });
}, 2000);