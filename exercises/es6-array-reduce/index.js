// #1
function total(arr) {
    function sum(total, num) {
        return total + num;
    }
    return arr.reduce(sum)
}

console.log(total([1, 2, 3])) // 6  

function stringstringConcat(arr) {
    return arr.join(",");
}

const result = stringstringConcat([1, 2, 3]);

console.log(result);
// "123"  

// #3
function totalVotes(arr) {

}
var voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];

const reducedVoters = voters.reduce();

function totalVoters(voters) {
    if (reducedVoters.voted === true) {
        return reducedVoters.voted.length;
    }
    console.log(totalVoters());
};

totalVoters(voters);

// #4
// var wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ];
// function shoppingSpree(arr) {

// }

// console.log(shoppingSpree(wishlist));
// 227005  

// #5


// #6


// Extra Credit 