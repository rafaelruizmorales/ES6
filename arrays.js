const emojis = ["😬", "✅", "😬", "📋", "🍸", "🌟", "🍺"]

//// Show ////////////////////////////////////////////

    // For Loop ////////////////////////////////////////////
    for (let i=0; i < emojis.length; i++) {
    // console.log(emojis[i])
    }

    // Foreach ////////////////////////////////////////////
    emojis.forEach(emoji => {
    // console.log(emoji)
    });


//// Find ////////////////////////////////////////////
const foundWhenSingle = emojis.find(emoji => emoji === "✅")
// console.log(foundWhenSingle) // expected ✅

const foundWhenMultiple = emojis.find(emoji => emoji === "😬")
// console.log(foundWhenMultiple) // expected 😬

const notFound = emojis.find(emoji => emoji === "💩")
// console.log(notFound) // expected undefined


//// Some ////////////////////////////////////////////
const resultSome1 = emojis.some(emoji => emoji === "✅")
// console.log(resultSome1) // expected true

const resultSome2 = emojis.some(emoji => emoji === "💩")
// console.log(resultSome2) // expected false


//// Every ////////////////////////////////////////////
const resultEvery = emojis.every(emoji => emoji === "💩")
// console.log(resultEvery) // expected false


//// Filter ////////////////////////////////////////////
// ✅ is filtered
const filteredEmojisSingle = emojis.filter(emoji => emoji !== "✅")
// console.log(filteredEmojisSingle) // ["😬", "😬", "📋", "🍸", "🌟", "🍺"]

// ALL 😬 are filtered
const filteredEmojisMultiple = emojis.filter(emoji => emoji !== "😬")
// console.log(filteredEmojisMultiple) // ["✅", "📋", "🍸", "🌟", "🍺"]

// The original array does not change. filter returns a copy of the original
// console.log(emojis) // ["😬", "✅", "😬", "📋", "🍸", "🌟", "🍺"]


//// Map ////////////////////////////////////////////
const mappedEmojis = emojis.map((emoji, index) => {
    return `${index} - ${emoji}`
})
// ["0 - 😬", "1 - ✅", "2 - 😬", "3 - 📋", "4 - 🍸", "5 - 🌟", "6 - 🍺"]
// console.log(mappedEmojis); 

// The original array does not change. map returns a copy of the original
// console.log(emojis) // ["😬", "✅", "😬", "📋", "🍸", "🌟", "🍺"]


//// Reduce ////////////////////////////////////////////
const arr = [1, 2, 3, 4]

// 1 + 2 + 3 + 4
// console.log(arr.reduce((acc, currentValue) => acc + currentValue)); // expected 10


//// Spread operator ... ////////////////////////////////////////////

    // 1- Merging Arrays
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];

    const mergedArray = [
        ...array1,
        ...array2
    ]; // [ 1, 2, 3, 4, 5, 6 ]

    // 2- Clone Arrays
    const original = ['zero', 'one'];
    const newArray = [...original];

    // 3- String to Array
    const string = 'hi';
    const array = [...string]; // [ 'h' , 'i' ]

    // 4- Set to Array
    const set = new Set([1, 2, 3]); // Set(3) {1, 2, 3}
    const arrayFromSet = [...set];  // array(3) [1, 2, 3]

    // 5- Arguments to Array
    function names() {
        const argumentsArray = [...arguments];

        argumentsArray.map(name => console.log(`Hola ${name}`))
    }

    // names('Jak', 'Sami'); 
    // 'Hola Jak'
    // 'Hola Sami'


// Destructuring ////////////////////////////////////////////
const address = [221, 'Baker Street', 'London'];
const [ houseNo, , city ] = address;

// console.log(houseNo, city) // 221 'London'