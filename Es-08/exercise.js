

let number = 2;

function multiplyByTwo(a) {
  console.log(number);
    function inner () {
      console.log(number * a);
    }
    return inner;
}

multiplyByTwo(4)();