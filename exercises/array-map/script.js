// // 1)
// function doubleNumbers(arr){
//     console.log(arr.map(i => i *2));
// }

// doubleNumbers([2, 5, 100]);

// // 2)
// function stringItUp (arr) {
//     console.log(arr.map(arr => arr.toString()))
// }

// stringItUp([2, 5, 100]);

// 3)
// function capitalizeNames(arr) {
//         console.log(arr.map(arr => arr.charAt(0).toUpperCase() + arr.slice(1).toLowerCase()))
//     }

// capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

// 4)
// function namesOnly(arr){
//     console.log(arr.map(arr => arr.name));
// }

// namesOnly([  
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]) 
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// 5)
// function makeStrings(arr) {
//     return arr.map(arr => {
//         if (arr.age >= 18) {
//             return (arr.name + " can go to The Matrix.");
//         } else {
//             return (arr.name + " is under age!");
//         }
//     })
// }

// console.log(makeStrings([{
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));
// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]

// 6)

function tags(arr) {
    return arr.map(arr => {
        if (arr.name === arr.name && arr.age === arr.age) {
            return ("<h1>" + arr.name + "</h1>" + "<h2>" + arr.age + "</h2>");
        }
    })
}

console.log(tags([{
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));

// ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// "<h1>Eric Jones</h1><h2>2</h2>", 
// "<h1>Paris Hilton</h1><h2>5</h2>", 
// "<h1>Kayne West</h1><h2>16</h2>", 
// "<h1>Bob Ziroll</h1><h2>100</h2>"]