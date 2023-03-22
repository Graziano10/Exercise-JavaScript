function sum(...int) {
  const x = int.reduce((acc, curr) => acc + curr, 0);
  return x;
}

const numbers = [1, 2, 3];
console.log(sum(numbers[0], numbers[1], numbers[2]));