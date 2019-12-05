// Read about

// map
// forEach
// filter
// some
// every
// reduce
// reverse


const inputArray = [2, 5, 9, 20, 15, 10, 19, 20, 44, 21];

function square(input){}
function odd(input){}
function output(input){}
function transform(input){}
function sortIncr(input){}
function sortDesc(input){}

const output = square(inputArray);
const oddNumbers = odd(inputArray);

output(inputArray);

const status = output(inputArray);

// status = {odd: [], event: []}

// [2, 25, 81, 400]
// [5, 9]

const square = inputArray.map(function(val, index){
    return {key:index, value:val*val};
});

console.log('squareRoot: ', square);


