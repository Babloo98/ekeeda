// Functions to add two number 
// num1 and num2 should be in integer format
export const addTwoNumber = (num1, num2) =>{
    const result = num1+num2;
    return result;
}

// Functions to sort the data
// data should be in flat array function 
export const sort = (data) =>{
    return data.sort((a, b)=>{return a-b})
}

//Fucntions having default parameters 
const add = (a = 100, b = 100) =>{
    console.log(a+b);
}