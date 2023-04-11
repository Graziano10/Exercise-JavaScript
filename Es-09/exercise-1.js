

const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

for(const value in person){
  console.log(value + " : " + person[value])
};
