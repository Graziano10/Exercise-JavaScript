

const x = () => console.log('Hello'); 

const repeatHello = (callback) => {

    setInterval(() => {
        callback()
    }, 1000); 

};

repeatHello(x);

// Le Arrow function essendo funzioni anomime possono essere passate facilmete come parametri.