console.log(1);

setTimeout(
	() => console.log(2),
	0
);
//this will come before settimout due to priority diff in priority queue
Promise.resolve()
	.then(() => console.log(3));

console.log(4)
