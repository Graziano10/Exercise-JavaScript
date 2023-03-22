function sum(...numbers) {
    const x = numbers.reduce((acc, curr) => acc + curr, 0);
    return x;
}

console.log(sum(1, 2, 3, 4, 5));