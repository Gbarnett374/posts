const getRandomNumber = () => {
    return Math.floor((Math.random() * 10) + 1);
};

const factorial = (n) => {
    if (n === 0) {
        return 1;
    }

    return n * factorial(n-1);
};

const generateFactorial = () => {
    const randomNumber = getRandomNumber();
    return factorial(randomNumber);
}

export default generateFactorial;
