'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true; // incorrect name of variable

// if (hasDriversLicense) console.log('I can drive!');

// const private = 534; // reserved word



// function logger() {
//     console.log('my name is Vova');
// }
// // calling / running // invoking the function
// logger();
// logger();
// logger(); 

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges!`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// function declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);

// // function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);

// console.log(age1, age2);



// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement}`;
// }

// console.log(yearsUntilRetirement(1991, 'Sarah'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange!`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));



// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0){
//         console.log(`${firstName} retires in ${retirement}`);
//         return retirement;
//     } else {
//         return -1;
//     }

    
    
// }

// console.log(yearsUntilRetirement(1991, 'Vova'));
// console.log(yearsUntilRetirement(1950, 'Mike'));


// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Smith',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Reter', 'Steven']
// };
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log('first' + nameKey);
// console.log('last' + nameKey);

// const interestedIn = prompt('What do you want tot know about Jonas? Choose between firstName, lastName, age, job and friends');

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonassmith';

// console.log(jonas);

// console.log(`${jonas.firstName} has ${jonas.friends.length}, and his best friend is called ${jonas.friends[0]}`)

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Smith',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Reter', 'Steven'],
//     hasDriversLicense: true,

//     // calcAge: function() { 
//     //     return 2037 - this.birthYear;
//     // }

//     calcAge: function() { 
//         this.age = 2037 - this.birthYear;
//         return this.age; 
//     },

//     getSummary: function() {
//         this.summary = `${this.firstName} is a ${this.calcAge}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a': 'no'} driver's license.`;
//         return this.summary;
//     }
// };

// console.log(jonas.calcAge());
// console.log(jonas.getSummary());

// const jonas = ['Jonas',
//     'Smith', 
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Reter', 'Steven']
// ];

// for(let i = 0; i < jonas.length; i++) {
//     console.log(jonas[i]);
// }

// const jonasTypes = [];

// console.log('---ONLY STRINGS---')

// for (let i = 0; i < jonas.length; i++){
//     if (typeof jonas[i] !== 'string') continue;
//     console.log(jonas[i], typeof jonas[i]);
// };

// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`-----Starting exercise ${exercise}`);
//     for (let repetition = 1; repetition <= 5; repetition++) {
//         console.log(`Lifting weight repetition ${repetition}`);
//     }
// }