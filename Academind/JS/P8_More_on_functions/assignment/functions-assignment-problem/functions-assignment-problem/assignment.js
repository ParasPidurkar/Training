// function sayHello(name) {
//   console.log('Hi ' + name);
// }

let sayHello =(name)=>{
  console.log('Hi ' + name);
}

let sayHello2 =(name,title="Hello")=>{
  console.log(title+' ' + name);
}
let sayHello3 =(name,title="Hello")=>{
  return (title+' ' + name);
}

checkInput=(callback,...args)=>{
  if (args.length === 0)
  {
    callback();
  }
  else{
  for (i of args)
  {
    console.log(i)
  }
}
}

print =()=>{
  console.log("Empty string ")

}

sayHello2();
sayHello2("Paras");
console.log(sayHello3("Panda"))
checkInput(print,12,13,14);