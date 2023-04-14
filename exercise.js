const user = {
  id: 1,
  name: "John",
  age: 25,
};

const userRecover = localStorage.getItem('person');
const objRecover = JSON.parse(userRecover);
console.log(objRecover);