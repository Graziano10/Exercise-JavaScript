// function sortPeopleByAge(arr) {
//   console.log(people.sort());
// }



const people = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

people.sort((a, b) => a.age - b.age);
console.log(people);

//const sortingByAge = sortPeopleByAge(people);
//console.log(sortingByAge);


// prova
// const x = [5, 8, 1, 6, 2, 3];

// function ordine() {
//   console.log(x.sort());
// }

// ordine();