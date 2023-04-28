function Person(name, age) 
{
	this.name = name;
	this.age = age;
	this.greet = function()
	{
	 return `Hello, my name is ${this.name}, I am ${this.age} years old.`;
	}
}

	
function Employee(name, age, jobTitle) 
{
	__proto__ = Person;
	super.name = name;
	super.age = age;
	this.jobTitle = jobTitle;
	this.jobGreet = function()
	{
	 return `Hello, my name is ${super.name}, I am ${super.age} years old, and my job title is ${this.jobTitle}.`;
	}
}


// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
