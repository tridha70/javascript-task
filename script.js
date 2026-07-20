
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
    name: "Tridha",
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
