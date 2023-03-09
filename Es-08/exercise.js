

function multiplyByTwo(a) {
  let number = 2;
  function inner () {
    console.log(number * 4);
  }
  inner();
}

multiplyByTwo();

