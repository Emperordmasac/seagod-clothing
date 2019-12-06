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





const inputArray = [2, 5, 9, 20, 15, 10, 19, 20, 44, 21];

const square = inputArray.map((val) => {
    return {value:val*val};
});

console.log('squareRoot: ', square);


const sqr = inputArray.map((num) => {
    return Math.sqrt(num)
});

console.log("NEW SQUARE: ", sqr);

const oddNumber = inputArray.map((val) => {
    if (val % 2 !==0 ) {
        return val
    } else {
        return null
    }
    
});

console.log('oddNumbers' , oddNumber);


const odd = oddNumber.filter(val => {
    return val

});

console.log("the odd numbers:" , odd);

const sortInsc = inputArray.sort((a,b) =>  {
    return a-b
});

console.log('increasing order: ', sortInsc);


const sortDesc = inputArray.sort((a,b) =>  {
    return b-a
});

console.log('decreasing order: ', sortDesc);

const reverse = sortInsc.sort((val) => {
   val = sortInsc.reverse()
    return val
}); 

console.log('reverse order: ', reverse);


