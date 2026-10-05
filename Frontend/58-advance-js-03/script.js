
// SECTION 1: // OOPS Thinking with Objects
// 	1.	Create an object called laptop that contains brand, price, and a start method that prints “Laptop started”.

// let laptop = {
//     brand: 'hp',
//     price: 15000,
//     start(){
//         console.log('Laptop started');
//     }
// }
// laptop.start()

// 	2.	Add one more method to the same object that increases the price by 10 percent.

// let laptop = {
//     brand: 'hp',
//     price: 15000,
//     start(){
//         console.log('Laptop started');
//     },
//     priceIncrease(){
//         this.price = (this.price*110)/100
//     }
// }
// laptop.priceIncrease()
// console.log(laptop.price);

// 	3.	Now imagine you need 10 laptops with same structure but different data.
// Write down (in words or code) what problems you will face if you keep using plain objects.
//ans
//repeated code

// ⸻

// SECTION 2: Classes and Objects (Reinforcement)
// 	4.	Create a class named Employee that stores:
// name
// salary

// class Employee{
//     constructor(name, salary){
//         this.name = name
//         this.salary = salary
//     }
// }

// Add a method showDetails that prints name and salary.

// Employee.prototype.showDetails = function(){
//     console.log(`name: ${this.name}, salary: ${this.salary}`)
// }

// 	5.	Create three employee objects from the same class and verify that modifying one employee does not affect the others.

// let employee1 = new Employee('Suresh',35000)
// let employee2 = new Employee('Sagar',45000)
// let employee3 = new Employee('Ayush',25000)
// employee3.showDetails()

// 	6.	Explain in your own words:
// Why is class considered a better option than writing similar objects again and again?

//A class is a blueprint (a plan) for creating objects. We write the structure and behavior once, and then we create as many objects as we want from it.

// ⸻

// SECTION 3: Constructor and Initialization
// 	7.	Create a class named BankAccount.

// class BankAccount{
//     constructor(accountHolderName,balance){
//         this.accountHolderName=accountHolderName
//         this.balance=balance
//     }
//     deposit(amount){
//         this.balance += amount
//     }
// }

// Its constructor should accept accountHolderName and balance.
// 	8.	Inside the constructor, store both values using this.
// 	9.	Add a method deposit(amount) that increases the balance.
// 	10.	Create two bank accounts and deposit money into only one.

// let account1 = new BankAccount('Sagar',1500)
// let account2 = new BankAccount('Mukesh',100)
// account1.deposit(200)
// console.log(account1.balance) // 1700
// console.log(account2.balance) // 100

// Observe and explain why the second account is not affected.

//Each object has its own this, so account1.balance and account2.balance are two different properties stored in two different places. account1.deposit(200) runs with this pointing to account1, so it only changes that object's balance. 

// ⸻

// SECTION 4: Understanding this (Very Important)
// 	11.	Create an object named profile with a property username and a method printName that logs this.username.

// let profile = {
//     username: 'Harish',
//     printName(){
//         console.log(this.username)
//     }
// }

// 	12.	Call the method normally and observe the output.

// profile.printName() //Harish

// 	13.	Store the method in a separate variable and call it.

// let newFnc = profile.printName
// newFnc() //undefined

// Observe what happens to this and explain why.

// output: undefined , because the method loses its "this" binding.

// 	14.	Modify the code so that this works correctly again.

// newFnc.call(profile)  //Harish

// ⸻

// SECTION 5: Constructor Function and Prototype
// 	15.	Create a constructor function called Vehicle that accepts type and wheels.

// function Vehicle(type,wheels){
//     this.type = type
//     this.wheels = wheels
//     this.describe = function(){
//         console.log(`${this.type} has ${wheels} wheels`);
        
//     }
// }

// 	16.	Add a method describe inside the constructor and observe memory behavior when multiple objects are created.

// let bike = new Vehicle('bike',2)
// let car = new Vehicle('car',4)
// bike.describe() //bike has 2 wheels
// car.describe() //car has 4 wheels
// console.log(bike.describe===car.describe) //false


// 	17.	Move the same method to Vehicle.prototype and repeat the test.

// function Vehicle(type,wheels){
//     this.type = type
//     this.wheels = wheels
// }
// Vehicle.prototype.describe=function(){
//     console.log(`${this.type} has ${this.wheels} wheels`)
// }

// let bike = new Vehicle('bike',2)
// let car = new Vehicle('car',4)
// car.describe() //car has 4 wheels
// bike.describe() //bike has 2 wheels
// console.log(car.describe===bike.describe) //true

// 	18.	Explain why the prototype approach is preferred.

// The prototype approach is preferred because the method is stored once and shared, instead of being copied into every object.

// ⸻

// SECTION 6: call Method Practice
// 	19.	Create a function showBrand that prints this.brand.

// function showBrand(){
//    console.log(this.brand)
// }

// 	20.	Create two different objects with brand values.

// let obj1 = {
//     brand: 'Redmi'
// }
// let obj2 = {
//     brand: 'Oneplus'
// }

// 	21.	Use call to execute showBrand for both objects.

// showBrand.call(obj1) //Redmi
// showBrand.call(obj2) //Oneplus

// 	22.	Explain what problem call is solving here.

// call solves the problem of setting this manually. It lets one function be reused with different objects, so we do not need to write the same function inside each object.

// ⸻

// SECTION 7: apply Method Practice
// 	23.	Create a function introduce that accepts two arguments: city and role, and prints name, city, and role using this.name.

// function introduce(city,role){
//     console.log(`Name:${this.name}, Role:${role}, City:${city}`); 
// }

// 	24.	Create an object with a name property.

// let obj = {
//     name: 'Harsh'
// }

// 	25.	Use apply to call introduce using the object and an array of arguments.

// introduce.apply(obj,['Jaipur','Teacher'])

// 	26.	Explain in simple words how apply differs from call.

// The main difference between call() and apply() is how arguments are passed.

// ⸻

// SECTION 8: bind Method Practice
// 	27.	Create a function greet that prints “Hello” followed by this.name.

function greet(){
    console.log(`hello! ${this.name}`)
}

// 	28.	Bind this function to an object and store the returned function in a variable.

let obj = {
    name: 'Mahesh'
}

let newFnc = greet.bind(obj)

// 	29.	Call the bound function later and observe the output.

newFnc() //hello! Mahesh

// 	30.	Explain why bind is useful when functions are executed later or inside callbacks.

// bind() returns a new function with this permanently fixed to the chosen object, so the method still works correctly when it is executed later.

// Displaying Day 58 - Question Sheet 2.md.