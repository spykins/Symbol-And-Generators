/**
    According to MDN, The Symbol() function returns a value of type symbol, has static properties 
    that expose several members of built-in objects, has static methods that expose the global symbol 
    registry, and resembles a built-in object class but is incomplete as a constructor because it does 
    not support the syntax "new Symbol()".

    ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
 */


const FIRST_NAME = "Wale";
// I want to create a Symbol
const firstNameSymbolWithoutReference = Symbol(FIRST_NAME);
console.log("1: ", typeof firstNameSymbolWithoutReference);  // o/p  1:  symbol 
//This returns a new type Symbol

const firstNameSymbolWithoutReferenceWithSameName = Symbol(FIRST_NAME);
// I have the same name, will myFirstNameSymbolWithoutReference be equal to myFirstNameSymbolWithoutReferenceWithSameName?
console.log("2: ", firstNameSymbolWithoutReference === firstNameSymbolWithoutReferenceWithSameName); // o/p 2:  false
// This is because Symbol generates a unique identifier that you don't have access to
// How do we create a Symbol that we can reference without knowing the unique identifier that is abstracted away from us

// Use the Symbol.for("keyYouWantTOUSE")

const firstNameSymbolThatICanReference = Symbol.for(FIRST_NAME);
console.log("3: ", typeof firstNameSymbolThatICanReference); //o/p 3:  symbol
// This still gives the output type to be a symbol...
// Why is this useful?  Ok, we will create another variable and then see if both is equal
let firstNameSymbolThatICanReferenceToTest = Symbol.for(FIRST_NAME);

// checking if the two variables are equal
console.log("4: ", firstNameSymbolThatICanReference === firstNameSymbolThatICanReferenceToTest); // o/p 4:  true

// I think the best way to use a symbol is to use the Symbol.for 

// We can also get the key used to create Symbols that we created with Symbol.for("key").. We can't get the name in Symbol();

console.log("5: ",Symbol.keyFor(firstNameSymbolWithoutReference));  // o/p 5:  undefined
console.log("6: ",Symbol.keyFor(firstNameSymbolThatICanReference)); // o/p 6:  Wale

/**
 * This coding series will cover how to use private instance variable in javascript Object to attain real abstraction
 * How to use Iterators
 * How to use generators in javascript
 */