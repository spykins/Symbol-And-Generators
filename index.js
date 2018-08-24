/**
    According to MDN, The Symbol() function returns a value of type symbol, has static properties 
    that expose several members of built-in objects, has static methods that expose the global symbol 
    registry, and resembles a built-in object class but is incomplete as a constructor because it does 
    not support the syntax "new Symbol()".

    ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
 */


const MY_FIRST_NAME = "Waleola";
// I want to create a Symbol
const myFirstNameSymbolWithoutReference = Symbol(MY_FIRST_NAME);
console.log("1: ", typeof myFirstNameSymbolWithoutReference);  // o/p  1:  symbol 
//This returns a new type Symbol

const myFirstNameSymbolWithoutReferenceWithSameName = Symbol(MY_FIRST_NAME);
// I have the same name, will myFirstNameSymbolWithoutReference be equal to myFirstNameSymbolWithoutReferenceWithSameName?
console.log("2: ", myFirstNameSymbolWithoutReference === myFirstNameSymbolWithoutReferenceWithSameName); // o/p 2:  false
// This is because Symbol generates a unique identifier that you don't have access to
// How do we create a Symbol that we can reference without knowing the unique identifier that is abstracted away from us

// Use the Symbol.for("keyYouWantTOUSE")

const myFirstNameSymbolThatICanReference = Symbol.for(MY_FIRST_NAME);
console.log("3: ", typeof myFirstNameSymbolThatICanReference); //o/p 3:  symbol
// This still gives the output type to be a symbol...
// Why is this useful?  Ok, we will create another variable and then see if both is equal
const myFirstNameSymbolThatICanReferenceToTest = Symbol.for(MY_FIRST_NAME);

// checking if the two variables are equal
console.log("4: ", myFirstNameSymbolThatICanReference === myFirstNameSymbolThatICanReferenceToTest); // o/p 4:  true

// I think the best way to use a symbol is to use the Symbol.for 

/**
 * This coding series will cover how to use private instance variable in javascript Object to attain real abstraction
 * How to use Iterators
 * How to use generators in javascript
 */