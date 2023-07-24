const person = {
    name: 'John',
    greet: function (greeting) {
      console.log(`${greeting}, ${this.name}!`);
    },
  };
  person.greet("Hello")
  //const boundGreet = person.greet.bind(person, 'Hello');
  const boundGreet = person.greet.bind(person);
  boundGreet('Hello'); // Output: Hello, John!