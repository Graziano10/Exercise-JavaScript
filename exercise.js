

const x = () => console.log('Hello'); 

const repeatHello = (callback) => {

    setInterval(() => {
        callback()
    }, 1000); 

};


setTimeout(() => {
    repeatHello(x)
}, 5000);
