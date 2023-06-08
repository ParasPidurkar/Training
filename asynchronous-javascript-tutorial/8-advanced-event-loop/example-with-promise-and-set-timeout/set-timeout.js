
//callstack
console.log(1);
//task queue
//callstack
setTimeout(
	() => console.log(2),
	0
);

console.log(3)
