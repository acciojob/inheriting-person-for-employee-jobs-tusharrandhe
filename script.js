function Person(name, age) 
{
	this.name = name;
	this.age = age;
	this.greet = function()
	{
	 console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
	}
}

	
function Employee(name, age, jobTitle) 
{
// 	this.__proto__ = Person;
	this.name = name;
	this.age = age;
	this.jobTitle = jobTitle;
	this.jobGreet = function()
	{
	 console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
	}
}

const person = new Person("Alice", 25);
const employee = new Employee("Bob", 30, "Manager");

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
