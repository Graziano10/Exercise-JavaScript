// FORMAT .then .catch
const number = 15;

function prom() {
  return new Promise((resolve, reject) => {
    if (number > 10) {
      resolve(`The constant is greater than 10 : Resolve`);
    } else {
      reject(`The constant is not greater than 10 : reject`);
    }
  });
}

const verify = prom();

verify
  .then((risp) => {
    console.log(risp);
  })
  .catch((err) => {
    console.log(err);
  });


// FORMAT async await 

// const number = 15;

// const verify = async () => {
//     try {
//         if (number > 10) {
//             console.log('The constant is greater than 10 : Resolve')
//         } else {
//             console.log('The constant is not greater than 10 : Reject');
//         }
//     } catch (error) {
//         console.log(error);
//     }
// };

// verify();
