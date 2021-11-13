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

const emojiMap = emojis.map((the_element, the_index, the_array) => {
    return `${the_element} - ${the_index} - ${the_array}`
})
//  [
//    '😬 - 0 - 😬,✅,😬,📋,🍸,🌟,🍺',
//    '✅ - 1 - 😬,✅,😬,📋,🍸,🌟,🍺',
//    '😬 - 2 - 😬,✅,😬,📋,🍸,🌟,🍺',
//    '📋 - 3 - 😬,✅,😬,📋,🍸,🌟,🍺',
//    '🍸 - 4 - 😬,✅,😬,📋,🍸,🌟,🍺',
//    '🌟 - 5 - 😬,✅,😬,📋,🍸,🌟,🍺',
//    '🍺 - 6 - 😬,✅,😬,📋,🍸,🌟,🍺',
//  ]
//
// console.log(emojiMap)

// The original array does not change. map returns a copy of the original
// console.log(emojis) // ["😬", "✅", "😬", "📋", "🍸", "🌟", "🍺"]

//// Reduce ////////////////////////////////////////////
const arrayToReduce = [1, 2, 3, 4]
const reducerFunction = (previousValue, currentValue) => {
    // console.log(`${previousValue} previousValue / ${currentValue} currentValue`)
    return previousValue + currentValue
}
const accumulator = 0

const reducedResult = arrayToReduce.reduce(reducerFunction, accumulator); // expected 10
// console.log(reducedResult)

// console.log([1, 2, 3, 4].reduce((previousValue, currentValue) => previousValue + currentValue));
// --> previousValue = 0 / currentValue = 1
//     0 previousValue + 1 currentValue = 1 <- new previousValue
//     1 previousValue + 2 currentValue = 3 <- new previousValue
//     3 previousValue + 3 currentValue = 6 <- new previousValue
//     6 previousValue + 4 currentValue = 10 <- return



//// Spread operator ... ////////////////////////////////////////////

    // 1- Merging Arrays
    const mergedArray = [ ...[1, 2, 3], ...[4, 5, 6] ]; // [ 1, 2, 3, 4, 5, 6 ]

    // 2- Clone Arrays
    const original = ['zero', 'one'];
    const newArray = [...original]; // [ 'zero', 'one' ]

    // 3- String to Array
    const string = 'hi';
    const array = [...string]; // [ 'h' , 'i' ]

    // 4- Set to Array
    const set = new Set([1, 2, 3, 1, 3]); // Set(3) {1, 2, 3}
    const arrayFromSet = [...set];  // array(3) [1, 2, 3]

    // 5- Arguments to Array
    function names() {
        const argumentsArray = [...arguments];

        argumentsArray.map(name => console.log(`Hola ${name}`))
    }

    // names('Jak', 'Sami', 'Yunlong'); 
    // 'Hola Jak'
    // 'Hola Sami'
    // 'Hola Yunlong'


// Destructuring ////////////////////////////////////////////
const address = [221, 'Baker Street', 'London'];

const [ houseNo1, street1 , city1 ] = address;
// console.log(houseNo1, street1, city1) // 221 'Baker Street' 'London'

const [ houseNo2, , city2 ] = address; // notice the white space between comas!
// console.log(houseNo2, city2) // 221 'London'

const [ , street3, ] = address; // notice the white space between comas!
// console.log(street3) // Baker Street