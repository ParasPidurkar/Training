const addListenerBtn = document.getElementById('add-listener-btn');
const clickableBtn = document.getElementById('clickable-btn');
const messageInput = document.getElementById('click-message-input');
let i=0;
// let person= {name:"Paras"};
// person =null;  //If you are not using up a variable it will be collected by garbage collector 

function printMessage() {
  const value = messageInput.value;
  console.log(value+i++ || 'Clicked me!');
}

function addListener() {
  clickableBtn.addEventListener('click', printMessage);
}

// function addListener() {
//   clickableBtn.addEventListener('click',function printMessage() {
//     const value = messageInput.value;
//     console.log(value+i++ || 'Clicked me!');
//   } );
// }

addListenerBtn.addEventListener('click', addListener);
