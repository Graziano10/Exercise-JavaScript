// const sum = function (a, b) {
//   return  a + b;
// }

const sum = (a, b) => a + b

// const sum02 = function (a, b) {
//   return  a + b;
// }

const sum02 = (a, b) => a + b

// const subtract = function (a, b) {
//   return a - b;
// }

const subtract = (a, b) => a - b

// const multiply = function (a, b) {
//   return a * b;
// }

const multiply = (a, b) => a * b

// const divide = function (a, b) {
//   return a / b;
// }

const divide = (a, b) => a / b

const result = () => {
    console.log(divide(subtract(sum(2, 4) * sum02(5, 2), 2), 5));
    return
}

result();