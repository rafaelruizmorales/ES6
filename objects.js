//// Object.keys && Object.values && Object.entries ////////////////////////////////////////////
const object1 = {
    a: 'somestring',
    b: 42
}

console.log(Object.keys(object1))    // ["a", "b"]
console.log(Object.values(object1))  // ["somestring", 42]
console.log(Object.entries(object1)) // [ [ 'a', 'somestring' ], [ 'b', 42 ] ]


//// Spread operator ... ////////////////////////////////////////////
    
    // Copy (with the possibility of modify a property)
    const raf = { name: 'Raf', sex: 'Male' };
    const yun = { ...raf, name: 'Yun' }
    
    // console.log(yun) // { name: "Yun", sex: "Male" }


// Destructuring ////////////////////////////////////////////
const user = { id: 15, name: 'Rafa Ruiz' }
const { id } = user
// console.log(id)   // 15

const details = { firstName: 'Rafael', lastName: 'Ruiz', age: 38 };
const { firstName, age } = details;
// console.log(firstName, age); // Rafael 38