let count = 0;

// The function is specific to settimout
const handleSetTimeout = () =>{
    setTimeout(()=>{
        alert("SetTimeout is Clicked");
        document.getElementById("setTimeout_result").innerText = "SetTimeout function is triggered after 5 seconds"
    }, 5000)
}

// The function is specific to setinterval
const handleSetInterval = () =>{
    setInterval(()=>{
        intervalCallback()
    }, 1000)
}

const intervalCallback = () =>{
    if (count <10)
    count = count+1;
    document.getElementById("setInterval_result").innerText = 
    `My Count is ${count}`
}


// Function to add the Elements in an array
const addElements = (array) =>{
    let sum  = 0;
    array.forEach((element, index) => {
        sum = sum + element;
    });
    console.log(sum);
}

const addArrayElements = (array) =>{
    const sum = array.reduce((accumulator, element) => accumulator+element);
    console.log(sum);
}


const useTryCatch = () =>{
    try{
        const a = 10;
        console.log("Babloo Mishra", a);
    }catch(error){
        console.log("error", error);
    }finally{
        console.log("Finally executed");
    }
    // The code will move to try and finally block as finally block executes each time 
}

()=>{

}

const useCallback = (array) =>{
    const result = array.map((item)=>callbackFunction(item));
    setTimeout(()=>callback2("Babloo"), 1000);
    console.log(">>>>>", result)
    return result;
}

const callbackFunction = (item) => item*10;

const callback2 = (item) => {
    console.log("iteiitieitie", item);
}

const useClosure = (array) =>{
    const updatedArray = [ ...arary ];
    const childFunction  = () =>{
        return updatedArray.map((item) => item*10);
    }
    return childFunction;
}
























