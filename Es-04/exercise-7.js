const sumUntil = (maxValue) => {
    let i;
    let sum = 0;

    for(i = 0; i <= maxValue; i++)
    {
      sum = sum + i;
     }
     return sum;
  }
  
  console.log(sumUntil(5));