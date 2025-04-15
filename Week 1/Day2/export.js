export const sum = (numbers) => {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

export const max = (numbers) => {
    return numbers.reduce((accumulator, currentValue) => {
        return currentValue > accumulator ? currentValue : accumulator;
    }, numbers[0]);
};



// module.exports = { sum, max };
// // CommonJS module syntax (older Node.js versions)