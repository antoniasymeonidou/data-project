const data = require('./data')

// iterates the array twice
const active8 = data.filter(x => x.active === '8');
const active1 = data.filter(x => x.active === '1'); 
//=================================================

console.log(active8)
console.log("==========================")
console.log(active1)
console.log("==========================")

//iterates the array once

const group = {
    '1': [],
    '8': []
}

data.forEach(value => group[value.active].push(value))