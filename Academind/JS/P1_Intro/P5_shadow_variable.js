let userName = 'Max';
function greetUser(name) {
  let userName = name;
  console.log(userName);
}
userName = 'Manu';
greetUser('Max');
console.log(userName);