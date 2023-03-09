

function printName() {
    const helloName = 'Hello Jhon';

    function inner() {
        console.log(helloName);
    }
    inner();
}

const time = setTimeout(printName, 1000);



