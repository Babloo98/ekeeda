// Extension : Better comment

//!Critical comment
//* highlighted comment
//Todo comment  
//? Question comment
// This is my normal comment

/* This function sorts a given array and 
 takes a array as an argument of the function*/
const sorting = (arr = []) => {
  return arr.sort((a, b) => {
    return a - b;
  });
};
