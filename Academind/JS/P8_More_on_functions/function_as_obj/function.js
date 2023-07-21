const greet =function greet(){
    console.log("Hello")
}   //function expression

function greet(){
    console.log("Hello")
}//function declaration

const greet =function (){
    console.log("Hello")
} //Anonymous function 
console.log(typeof greet())
console.log(typeof greet)
console.log(greet)
console.dir(greet)