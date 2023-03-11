

let number = 2;

function multiplyByTwo(a) {
  console.log(number);
    function inner () {
      console.log(number * a);
    }
    inner();
}

multiplyByTwo(4);