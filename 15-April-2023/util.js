// Global and local scopes :
var i=2; //global scope        
if(i==2){
    let i=3;   //local scope     
    i=4;
    console.log(i); 
}

console.log(i); 


new Date();
//! Sat Apr 15 2023 21:05:23 GMT+0530 (India Standard Time)
new Date().getDate();
//! 15
new Date().getTime();
//! 1681572952112
new Date().getMonth();
//! 3
new Date().getYear();
//! 123
new Date().getFullYear();
//! 2023

typeof(varaiblename)
//* This will tell the type of data variable is storing 

data.at(index);
//? This will return the data/letter at that particular index

data.indexOf("letter/word");
// This operator will give the index of data/letter if not found it will return -1

data.lastIndexOf("letter/word");
// This operator will give the last index of data/letter if not found it will return -1

// concat method : 
// Concat method in Js is used to add two strings togehter
let FullName = firstName + LastName;
firstName.concat(LastName);
