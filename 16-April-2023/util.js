// Number Methods 

let a = 10;

a.toString();
// "a"

a.toExponential();
// '1e+1'
//Default output of exponential is in string 

a.toPrecision(2);
// '1e+1'
// Argument id the number of digit you want precision to

3.4444 * 10**8

a.toFixed(4);
// "10.0000"

Number("20");
// This will convert the String to number;
// This takes floating nunber also

parseInt("2323.34");
// This will convert the string number into non-decimal integer value 

parseFloat("2323.23");
// This will convert the string number into number value defined 

isNaN()
// is Nan is a function used to check weather a given string is number or not

isFinite()
isFinite(2e308)  
//false
isFinite(3);
//true
// This function is used to check weather a given number 



//Functions : 
const test = () =>{
    return "Babloo Mishra";
}


function Person(first, last, age ){
    //These are the Properties of the function
    this.firstName = first;
    this.lastName = last;
    this.age = age;

    //Method : 
    this.test = () =>{
        return "Babloo mishra"
    }
}


// const newObj = new Person("Babloo", "Mishra", 23);


const add = (num1, num2)=>{
    return num1+num2
}
    
add();


// HOC : Higher order function / closures
function add(a){
    return function(b){
        return a+b;
    }
}

Output : add(3)(4)

// Default parameter : 
const add = (num1, num2 = 0) =>{
    return num1+num2
}


// Immediately invoked funcitons
(()=>{
    console.log("Babloo")
})()


const t=3;
  if(t<2){
    console.log(t);   
  }else{
      console.log("Babloo", t)
  }

//   If my condition is true then 




















