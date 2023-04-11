const printAsyncName = (callback, name) => {
  

  setInterval(() => {
    callback()
  }, 1000);

    setInterval(() => {
      console.log(name)
    }, 2000);

  };


  function hello() {
    console.log('Hello');
  }


printAsyncName(hello, 'Luca');

