/**
    According to MDN, The Symbol() function returns a value of type symbol, has static properties 
    that expose several members of built-in objects, has static methods that expose the global symbol 
    registry, and resembles a built-in object class but is incomplete as a constructor because it does 
    not support the syntax "new Symbol()".

    ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

    About me: I am a baby programmer and I am just playing around with Javascript, I am not an authority and
    I don't have any experience as a javascript programmer, I have never built a website before nor work with 
    javascript professionaly... My years of experience has been in Android development writing Java... ohhhh Java!!

    Diving into javascript and I think its a cool language amidst its flaws, js is awesome.... I just want to share 
    my knowledge with you, please feel free to comment, change stuff and give feedback so I can learn from you too..

    Thanks...
 */

 
 
 /********** Introduction: How to create Symbols */

const FIRST_NAME = "spykins";
// The line of code after this comment: creates a Symbol
const firstNameSymbolWithoutReference = Symbol(FIRST_NAME);
console.log("1: ", typeof firstNameSymbolWithoutReference);  // o/p  1:  symbol 

//The line of code after this comment: creates another  Symbol with the same name
const firstNameSymbolWithoutReferenceButWithSameName = Symbol(FIRST_NAME);

// Do you expect the two symbols created above to be the same??? 
// I mean both has the same string passed into Symbol function that created it
// I think it should be the same, I expect it to be the same 
// Let's test it though...
console.log("2: ", firstNameSymbolWithoutReference === firstNameSymbolWithoutReferenceButWithSameName); // o/p 2:  false
// They are not the same.. sorry, to burst your bubble
//This is because Symbol generates a unique identifier that you don't have access to when you create it


// How do you create a Symbol that we can reference without knowing the unique identifier that is abstracted away from us
// Booooooom!!!!!!! Use the Symbol.for("keyYouWantToUse")
// example

const firstNameSymbolThatICanReference = Symbol.for(FIRST_NAME);
console.log("3: ", typeof firstNameSymbolThatICanReference); //o/p 3:  symbol
// Hey (symbol) haters, offcourse this is still a valid symbol...
// Why is this useful?  Ok, let's create another variable and then see if they are the same
let firstNameSymbolThatICanReferenceToTest = Symbol.for(FIRST_NAME);

// checking if the two variables are equal
console.log("4: ", firstNameSymbolThatICanReference === firstNameSymbolThatICanReferenceToTest); // o/p 4:  true

// I think the best way to use a symbol is to use the Symbol.for, we can use this to make stuff private in our class... True OOP power
// As against using the _variablename convention, will talk about that later, keep reading... 
// We can also get the key used to create Symbols that we created with Symbol.for("key").. We can't get the name in Symbol();

console.log("5: ",Symbol.keyFor(firstNameSymbolWithoutReference));  // o/p 5:  undefined
console.log("6: ",Symbol.keyFor(firstNameSymbolThatICanReference)); // o/p 6:  Wale




/***********  Iterator:    Using Symbol has Iterator*/