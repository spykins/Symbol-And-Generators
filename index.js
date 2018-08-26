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

/**
    According to MDN : In JavaScript an iterator is an object which defines a sequence and potentially a return value upon its termination. 
    More specifically an iterator is any object which implements the Iterator protocol by having a next() method which returns an object with 
    two properties: value, the next value in the sequence; and done, which is true if the last value in the sequence has already been consumed. 
    If value is present alongside done, it is the iterator's return value.

    ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators 

    This looks rather vague to me while trying to simplify stuff, they make it more difficult to understand... Unless you are a guru or a 
    super smart computer science jacky first class student, I doubt if you will be able to understand that.. Certaining not for "olodo" like me that 
    struggled through the university.....

    Ok, enough about the ranting... I know Iterator is also in Java, lets see if they have a better explanation

    According to Oracle : An iterator over a collection. Iterator takes the place of Enumeration in the Java Collections Framework. Iterators differ from enumerations in two ways:
      Iterators allow the caller to remove elements from the underlying collection during the iteration with well-defined semantics.
    Method names have been improved. This interface is a member of the Java Collections Framework.

    ref: https://docs.oracle.com/javase/8/docs/api/java/util/Iterator.html 
    
    I think the oracle docs looks more like it... well don't judge me on that but when you copy stuff, you should learn to copy right.... I am a copy! copier myself.... 
    Be original man, for once in your life... haaahaaaa!!!
    
    Ok lets dive into code....


 */

 // Symbol.iterator
 // This is a classic of what javascript has built in es6, I think its pretty cool and you can dive into their documentation here
 // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator
 // I will try to simplify it as simple as I can

 let foodILike = ["Pounded Yam", "eba", "fufu", "parota", "pan cake", "egunsi soup", "cabonara", "rice! rice!! rice!!"];
 // Ok that explains why I am big and strong, I can't bet if they are healthy stuff though
 // ok say we want to loop through what I have... we can do it in so many ways...

 //****** looping through arraay, irrelevant on
 /**
  for (let index =0; index < foodILike.length; index++) {
   console.log(foodILike[index])
 }

 // Used in object, since array is an object, I can use foodIlike[key]
 for (let key in foodILike) {
   console.log(foodILike[key]);
 }

 // The most prefer style for me is to use the functional paradigm of foreach

 foodILike.forEach((value) => console.log(value));

 // bomb! I should like that coming from Java background..... 

  */
  // Totally irrelevant so I will comment them out, you probably no over hundred ways to do that

  //******** back to Iterator


let iteratorOfFoodILike = foodILike[Symbol.iterator];
console.log("7: ", typeof iteratorOfFoodILike); // o/p 7:  function
// This is unsurprisingly a function
// what do you do to a function?..... You execute it right?? with what??? just appending the () after the name

// iteratorOfFoodILike();
// for some reasons, I find out that executing the function this way throws an error, I will be glad if you can
// take a look at it and tell me why it is failing.....
// but I can execute right here
iteratorOfFoodILike = foodILike[Symbol.iterator]();
// Just reassigning the variable... = assignment operator means whatever is on the right to the left.... TIL for you.. haaha
console.log("8: ", typeof iteratorOfFoodILike); //o/p 8:  object
// Now this gives us an object, I think it will be cool to verify what this object contains.... and share with us...

// According to the oracle definition "remove elements from the underlying collection during the iteration with well-defined semantics."
console.log("9: ", iteratorOfFoodILike.next()); // o/p { value: 'Pounded Yam', done: false }
// that returns an object to us... we can call  iteratorOfFoodILike.next().value on it to get the value
// notice the done key as a flag false.... that is to show when it has finished iterating over the collection
//If I want to use Iterator to loop through an object... I would use while true and break out of it when done is true.

console.log("10: ", iteratorOfFoodILike.next().value); // o/p 10:  eba
// I am calling value on it here....
