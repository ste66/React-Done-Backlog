
let friends = [
    {name : "Jose", age=99},
    {name : "Ahmad", age=98},
    {name : "Ashik", age=97},
    {name : "Aslan", age=96},
    {name : "Brujo", age=95},
    {name : "Dries", age=94},
]

// ! Long way : ========================================

let myFriends = [];

for ( let i= 0; i<friends.length;i++){

    if(friends[i].age > 96){
        myFriends.push(friends[i]);
    }

}

// ! Filter Method with classic Function : ==================


let myFriends = friends.filter(
    function (e){
        return e.age > 96; 
    }
);

// ! Filter Method with less syntax (Arrow Func) : ==================

let myFriends = friends.filter( e => e.age > 96)



// !====================================================================

// ! ARRAY SPREAD OPERATOR

let numbers1 = [1,2,3,4,5];

let numbers3 = [...numbers1]; // [1,2,3,4,5]

let numbers2 = [ ...numbers1,1,2,6,7,8];

console.log(numbers2); // [1,2,3,4,5,1,2,6,7,8]


// =======================================

// ! OBJECT SPREAD OPERATOR

let person = {
    name : "alper",
    job : "teacher",
    age: 99
}


let newperson = {
    ...person,
    fullname : "alper ece",
    company : "DCI"
}

console.log(newperson); 

/* 
let newperson = {
    name : "alper",
    job : "teacher",
    age: 99,
    fullname : "alper ece",
    company : "DCI"
}


*/



let mylist = [1,2,3,4,5];


let newlist = [...mylist,6]; // => [1,2,3,4,5,6]

