function addTwo(num:number){
    return num + 2;
     // in this case we can return a string value from this function 
    // the type of number is defined as an input parameter to this function, and we can return a value from this function
} // so we have to define the function in the given below

function getUpper(val:string):string{ // correct syntax
    return val.toUpperCase();
}
// in the arrow function we can do the same means here we specify that the return type of the function should be the string if anything else that will give error
const getHello = (s:string):string =>{

return "hello";
}

// how we can use perfectly the map in case of return type let see
const numbers=[1,2,3,4,5,6]

numbers.map((no): number=>{
    // return "hey"  here we can't return the string as retun type specified as number
    return no*2;
})

// so there are another two method for specifying the function type one is " void " and another one is " Never "
// in case of never the function never return anything and void also does the same but there are thin difference between them


addTwo(5);
getUpper("hello");