const printAsyncName = (callback, name) => {

  setInterval(() => {
    callback()
  }, 1000);

    setInterval(() => {
      name();
    }, 2000);

      function callback() {
        console.log('Hello')
      }

        function name() {
          console.log('Luca')
        } 
};

printAsyncName();
