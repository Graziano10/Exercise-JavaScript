// FORMAT .then .catch

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
      console.log(err);
    });
}, 1000);

// Promise02

const number = 100;

function fn2() {
  return new Promise((resolve, reject) => {
    if (number > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      reject(`Reject`);
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
      console.log(err);
    });
}, 2000);



// FORMAT async await

// const isLogged = true;

// const verify = async () => {
//   try {
//     if (isLogged === true) {
//       const numRandom = Math.floor(Math.random() * 100);
//       console.log(numRandom);
//     } else {
//       console.log("Not is true");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// const x = 10;

// const name = async () => {
//   try {
//     if (x > 0.5) {
//       console.log(`{name: "John", age: 24}`);
//     } else {
//       console.log("Reject");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// const init = async () => {
//     setTimeout(() => verify(), 1000);
//     setTimeout(() => name(), 3000);
// };

// init();
