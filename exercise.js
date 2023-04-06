const isLogged = true;

const verify = async () => {
  try {
    if (isLogged === true) {
      const numRandom = Math.floor(Math.random() * 100);
      console.log(numRandom);
    } else {
      console.log("Not is true");
    }
  } catch (error) {
    console.log(error);
  }
};

const x = 10;

const name = async () => {
  try {
    if (x > 0.5) {
      console.log(`{name: "John", age: 24}`);
    } else {
      console.log("Reject");
    }
  } catch (error) {
    console.log(error);
  }
};

const init = async () => {
    setTimeout(() => verify(), 1000);
    setTimeout(() => name(), 3000);
};

init();
