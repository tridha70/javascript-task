// Task 1: Student Registration Form

let studentName = "Maneesha";
let age = 25;
let department = "ECE";
let cgpa = 8.5;

console.log("Student Name:", studentName);
console.log("Age:", age);
console.log("Department:", department);
console.log("CGPA:", cgpa);

// Task 2: Employee Details

let employee = {
    employeeId: "STK-26-3600",
    employeeName: "Maneesha",
    department: "IT",
    salary: 45000
};

console.log("Employee Name:", employee.employeeName);
console.log("Salary:", employee.salary);

//Task 3: Shopping Cart

let products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Headset"];

console.log("First Product:", products[0]);
console.log("Last Product:", products[products.length - 1]);
console.log("Total Products:", products.length);

// Task 4: Student Marks

let english = 80;
let maths = 90;
let science = 85;
let social = 88;
let computer = 95;

let total = english + maths + science + social + computer;
let average = total / 5;

console.log("Total Marks:", total);
console.log("Average:", average);

 //Task 5: Age Checker

let voterAge = 20;

if (voterAge >= 18) {
    console.log("Eligible to Vote");
} else {
    console.log("Not Eligible");
}

// Task 6: Login System

let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}

// Task 7: Calculator

let num1 = 20;
let num2 = 10;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);

// Task 8: Electricity Bill

let customerName = "Suresh";
let units = 150;
let bill = 0;

if (units <= 100) {
    bill = units * 2;
} else if (units <= 200) {
    bill = units * 4;
} else {
    bill = units * 6;
}

console.log("Customer Name:", customerName);
console.log("Units:", units);
console.log("Bill Amount: ₹" + bill);

// Task 9: Employee Salary

let basicSalary = 30000;
let bonus = 5000;

let grossSalary = basicSalary + bonus;

console.log("Gross Salary: ₹" + grossSalary);

// Task 10: Movie Ticket Price

let ticketPrice = 200;
let numberOfTickets = 4;

let totalAmount = ticketPrice * numberOfTickets;

console.log("Ticket Price: ₹" + ticketPrice);
console.log("Tickets:", numberOfTickets);
console.log("Total Amount: ₹" + totalAmount);

// Task 11: Product Discount

let productName = "Laptop";
let price = 60000;
let discount;
let finalPrice;

if (price > 5000) {
    discount = price * 0.20;
} else {
    discount = price * 0.10;
}

finalPrice = price - discount;

console.log("Product:", productName);
console.log("Original Price: ₹" + price);
console.log("Discount: ₹" + discount);
console.log("Final Price: ₹" + finalPrice);

// Task 12: Function Practice

function studentDetails(name, dept, cgpa) {
  
    console.log("Student Name:", name);
    console.log("Department:", dept);
    console.log("CGPA:", cgpa);
}

studentDetails("Naveen", "Computer Science", 8.8);

// Task 13: Bank Balance

let accountHolder = "Maneesha";
let currentBalance = 50000;
let withdrawAmount = 10000;

let remainingBalance = currentBalance - withdrawAmount;

console.log("Account Holder:", accountHolder);
console.log("Current Balance: ₹" + currentBalance);
console.log("Withdraw Amount: ₹" + withdrawAmount);
console.log("Remaining Balance: ₹" + remainingBalance);

// Task 14: Mobile Recharge

let mobileNumber = "9019677060";
let rechargeAmount = 299;

console.log("Recharge Successful");
console.log("Mobile Number:", mobileNumber);
console.log("Recharge Amount: ₹" + rechargeAmount);

// Task 15: Restaurant Bill

let foodName = "Chicken Biryani";
let quantity = 3;
let foodPrice = 250;

let totalBill = quantity * foodPrice;

console.log("Food Name:", foodName);
console.log("Quantity:", quantity);
console.log("Price Per Item: ₹" + foodPrice);
console.log("Total Bill: ₹" + totalBill);


// ==========================================
// Employee Management System (Console Based)
// ==========================================

function addEmployee(id, name, department, basicSalary, bonus, experience, skills) {

    let grossSalary = basicSalary + bonus;

    let employee = {
        employeeId: id,
        employeeName: name,
        department: department,
        basicSalary: basicSalary,
        bonus: bonus,
        grossSalary: grossSalary,
        experience: experience,
        skills: skills
    };

    console.log("======================================");
    console.log("      EMPLOYEE MANAGEMENT SYSTEM");
    console.log("======================================");

    console.log("Employee ID      :", employee.employeeId);
    console.log("Employee Name    :", employee.employeeName);
    console.log("Department       :", employee.department);
    console.log("Basic Salary     : ₹" + employee.basicSalary);
    console.log("Bonus            : ₹" + employee.bonus);
    console.log("Gross Salary     : ₹" + employee.grossSalary);

    console.log("--------------------------------------");

    if (employee.experience >= 5) {
        console.log("Experience Status : Senior Employee");
    } else if (employee.experience >= 2) {
        console.log("Experience Status : Mid Level Employee");
    } else {
        console.log("Experience Status : Fresher");
    }

    console.log("--------------------------------------");
    console.log("Employee Skills:");

    for (let i = 0; i < employee.skills.length; i++) {
        console.log((i + 1) + ". " + employee.skills[i]);
    }

    console.log("======================================");
}

// Function Call
addEmployee(
    "STK-20-3600",
    "Maneesha",
    "Frontend Developer",
    35000,
    5000,
    2,
    [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "GitHub"
    ]
);