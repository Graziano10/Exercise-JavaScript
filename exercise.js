const number = 15;

const verify = async () => {
    try {
        if (number > 10) {
            console.log('The constant is greater than 10 : Resolve')
        } else {
            console.log('The constant is not greater than 10 : Reject');
        }
    } catch (error) {
        console.log(error);
    }
};

verify();
