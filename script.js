function Person(name, age) 
{
	this.name = name;
	this.age = age;
	// this.prototype.greet = function()
	// {
	//  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
	// }
}

Person.prototype.greet = function() {
console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
}

Employee.__proto__ = Person;
	
function Employee(name, age, jobTitle) 
{
	this.name = name;
	this.age = age;
	this.jobTitle = jobTitle;
	// this.prototype.jobGreet = function()
	// {
	//  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
	// }
}
Employee.prototype.jobGreet = function() {
	 console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
}



// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
