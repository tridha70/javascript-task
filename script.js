
// Task 1 - Employee Profile

let name = "Maneesha";
let employeeId = "STY-26-3900";
let department = "Frontend";
let salary = 25000;
let isPermanent = true;

console.log("Name :", name);
console.log("Employee ID :", employeeId);
console.log("Department :", department);
console.log("Salary :", salary);
console.log("Permanent :", isPermanent);

// Task 2 - Student Details

let student = {
    name: "Maneesha",
    age: 25,
    course: "B.Tech",
    college: "JNTU",
    passed: true
};

console.log("Student Name :", student.name);
console.log("Course :", student.course);
console.log("Passed Status :", student.passed);

// Task 3 - Shopping Cart

let products = ["Milk", "Rice", "Oil", "Sugar", "Soap"];

console.log("First Product :", products[0]);
console.log("Third Product :", products[2]);
console.log("Last Product :", products[products.length - 1]);
console.log("Total Products :", products.length);

// Task 4 - Company Employee Database

let employee = {
    name: "Maneesha",
    designation: "Frontend Developer",
    salary: 35000,
    skills: ["HTML", "CSS", "JavaScript", "React"]
};

console.log("Employee Name :", employee.name);
console.log("Designation :", employee.designation);
console.log("Second Skill :", employee.skills[1]);

// Task 5 - Salary Calculation

let basicSalary = 25000;
let bonus = 5000;

let totalSalary = basicSalary + bonus;

console.log("Total Salary :", totalSalary);

// Task 6 - GST Calculator

let productPrice = 4500;
let gst = 18;

let gstAmount = productPrice * gst / 100;
let finalAmount = productPrice + gstAmount;

console.log("GST Amount :", gstAmount);
console.log("Final Amount :", finalAmount);

// Task 7 - Even or Odd

let number = 25;


console.log(number % 2 === 0 ? "Even Number" : "Odd Number");

// Task 8 - Login System

let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
    console.log("Login Success");
} else {
    console.log("Invalid Credentials");
}

// Task 9 - Voting Eligibility

let age = 22;

console.log(age >= 18 ? "Eligible for Vote" : "Not Eligible");

// Task 10 - EMI Eligibility

let monthlySalary = 40000;
let experience = 3;

console.log(monthlySalary > 30000 && experience >= 2
    ? "Eligible"
    : "Not Eligible");

// Task 11 - Product Discount

let price = 5000;
let discount = 10;

let discountAmount = price * discount / 100;
let finalPrice = price - discountAmount;

console.log("Discount Amount :", discountAmount);
console.log("Final Price :", finalPrice);

// Task 12 - User Registration

let userName = "Naveen";
let email = "naveen@gmail.com";
let phone = "9876543210";
let city = "Hyderabad";

console.log("----- User Details -----");
console.log("Name :", userName);
console.log("Email :", email);
console.log("Phone :", phone);
console.log("City :", city);

// Task 13 - Social Media Profile

let profile = {
    username: "Maneesha123",
    followers: 2500,
    following: 800,
    posts: 150,
    verified: true
};

console.log("Username :", profile.username);
console.log("Followers :", profile.followers);
console.log("Verified Status :", profile.verified);

// Task 14 - Restaurant Menu

let menu = ["Idli", "Dosa", "Poori", "Meals", "Parotta"];

console.log("Second Item :", menu[1]);
console.log("Fourth Item :", menu[3]);
console.log("Last Item :", menu[4]);

// Task 15 - Banking System

let accountBalance = 25000;
let withdraw = 8000;

let remainingBalance = accountBalance - withdraw;


console.log("Remaining Balance :", remainingBalance);

// Task 16 - Mobile Store

let mobilePrice = 25000;
let exchange = 5000;
let coupon = 2000;

let finalMobileAmount = mobilePrice - exchange - coupon;

console.log("Final Amount :", finalMobileAmount);

// Task 17 - Employee Promotion

let exp = 5;
let performance = true;

if (exp >= 5 && performance === true) {
    console.log("Promotion Approved");
} else {
    console.log("Promotion Pending");
}

// Task 18 - Movie Ticket

let ticketPrice = 180;
let people = 5;

let totalAmount = ticketPrice * people;

console.log("Total Amount :", totalAmount);

// Task 19 - Weather App

let temperature = 38;

console.log(temperature >= 35 ? "Hot Day" : "Normal Weather");

// Task 20 - Mini HR Management

let employeeDetails = {
    empCode: "EMP1001",
    name: "Rahul",
    department: "Frontend",
    designation: "Associate Software Engineer",
    salary: 28000,
    skills: ["HTML", "CSS", "JavaScript", "React"],
    permanent: true
};

console.log("Employee Code :", employeeDetails.empCode);
console.log("Employee Name :", employeeDetails.name);
console.log("Department :", employeeDetails.department);
console.log("Salary :", employeeDetails.salary);
console.log("Last Skill :", employeeDetails.skills[employeeDetails.skills.length - 1]);
console.log("Permanent Status :", employeeDetails.permanent);
 

// Task 1 : Employee Login System

let username = prompt("Enter Username:");
let password = prompt("Enter Password:");

if (username === "admin" && password === "12345") {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}

// Task 2 : E-Commerce Discount

let amount = Number(prompt("Enter Purchase Amount:"));

if (amount >= 5000) {
    let discount = amount * 0.20;
    let finalAmount = amount - discount;

    console.log("20% Discount Applied");
    console.log("Final Amount :", finalAmount);
} else {
    console.log("No Discount");
    console.log("Final Amount :", amount);
}

// Task 3 : ATM Withdrawal

let balance = 10000;
let withdraw = Number(prompt("Enter Withdraw Amount"));

if (withdraw <= balance) {

    balance -= withdraw;

    console.log("Transaction Successful");
    console.log("Remaining Balance :", balance);

} else {

    console.log("Insufficient Balance");

}


// Task 4 : Student Grade System

let marks = Number(prompt("Enter Marks"));

if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 80) {
    console.log("Grade B");
}
else if (marks >= 70) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}

// Task 5 : Traffic Signal

let signal = prompt("Enter Signal");

switch (signal) {

    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");

}

// Task 6: Online Shopping Delivery Charge

let orderAmount = 750;
let delivery = 0;

if (orderAmount >= 1000) {
    delivery = 0;
} else {
    delivery = 80;
}

console.log("Order Amount:", orderAmount);
console.log("Delivery:", delivery);
console.log("Total:", orderAmount + delivery);

// Task 7: User Age Verification

let age = Number(prompt("Enter your age:"));

if (age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}

// Task 8: Find Largest Number (3 Numbers)

let a = 10;
let b = 20;
let c = 15;

if (a >= b && a >= c) {
    console.log("Largest:", a);
} else if (b >= a && b >= c) {
    console.log("Largest:", b);
} else {
    console.log("Largest:", c);
}

// Task 9: Mobile Password

let pin = prompt("Enter 4-digit PIN:");

if (pin.length === 4) {
    console.log("Login Success");
} else {
    console.log("Invalid PIN");
}

// Task 10: Product Stock

let stock = 0;

if (stock === 0) {
    console.log("Out of Stock");
} else {
    console.log("Available");

// Task 11: Employee Salary Bonus

let salary = 45000;

if (salary > 50000) {
    console.log("Bonus: 10000");
} else if (salary > 30000) {
    console.log("Bonus: 5000");
} else {
    console.log("Bonus: 2000");
}

// Task 12: Electricity Bill

let units = 250;
let bill = 0;

if (units <= 100) {
    bill = units * 2;
} else if (units <= 200) {
    bill = (100 * 2) + ((units - 100) * 4);
} else {
    bill = (100 * 2) + (100 * 4) + ((units - 200) * 6);
}

console.log("Electricity Bill:", bill);

// Task 13: Movie Ticket Booking

let movieAge = 15;

if (movieAge < 5) {
    console.log("Ticket: Free");
} else if (movieAge <= 18) {
    console.log("Ticket Price: ₹100");
} else {
    console.log("Ticket Price: ₹200");
}



// Task 14: Hospital Token System

let patient = "Senior Citizen";

switch (patient) {

    case "Emergency":
        console.log("Token 1");
        break;

    case "Senior Citizen":
        console.log("Priority");
        break;

    case "Normal":
        console.log("Regular Queue");
        break;

    default:
        console.log("Invalid");
}

// Task 15: Company Attendance


let attendance = "Present";

switch (attendance) {

    case "Present":
        console.log("Working");
        break;

    case "Leave":
        console.log("Leave Approved");
        break;

    case "Absent":
        console.log("Salary Deduction");
        break;

    default:
        console.log("Invalid");
}

// Task 16: Grocery Cart Total


let rice = 500;
let sugar = 300;
let oil = 250;

let total = rice + sugar + oil;

console.log("Total:", total);

if (total > 1000) {

    let discount = total * 0.10;
    let finalAmount = total - discount;

    console.log("10% Discount:", discount);
    console.log("Final Amount:", finalAmount);
}

// Task 17: Array Task

let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];

for (let i = 0; i < products.length; i++) {

    console.log((i + 1) + " " + products[i]);

}

// Task 18: Employee Database

let employee = {

    name: "Rahul",
    role: "Developer",
    salary: 50000

};

for (let key in employee) {

    console.log(employee[key]);

}

// Task 19: Type Casting

console.log(Number("100"));
console.log(Boolean("true"));
console.log(String(200));

// Task 20: Banking Menu

let choice = 2;

switch (choice) {

    case 1:
        console.log("Deposit");
        break;

    case 2:
        console.log("Withdraw");
        break;

    case 3:
        console.log("Balance");
        break;

    case 4:
        console.log("Exit");
        break;

    default:
        console.log("Invalid Choice");

}