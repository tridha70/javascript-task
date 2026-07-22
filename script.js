
// Task 1 : Employee Login System

let username = prompt("Enter Username:");
let password = prompt("Enter Password:");

if (username === "admin" && password === "12345") {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}

//Task 2 : E-Commerce Discount

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
//Task 3 : ATM Withdrawal

let balance = 10000;
let withdraw = 4000;

if (withdraw <= balance) {

    balance -= withdraw;

    console.log("Transaction Successful");
    console.log("Remaining Balance :", balance);

} else {

    console.log("Insufficient Balance");

}
// Task 4 : Student Grade System

let marks = 84;

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

let signal = "green";

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
// ===================================

let age = 25;

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
// ===================================

let pin = 1234;

if (pin.length === 4) {
    console.log("Login Success");
} else {
    console.log("Invalid PIN");
}

// Task 10: Product Stock

let stock = 10;

if (stock === 0) {
    console.log("Out of Stock");
} else {
    console.log("Available");
}

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

//Task 17: Array Task


let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];

for (let i = 0; i < products.length; i++) {

    console.log((i + 1) + " " + products[i]);

}

// Task 18: Employee Database

let employee = {
    name: "Maneesha",
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

 //Task 20: Banking Menu

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


// Employee Management System

let employees = [
    {
        id: "STK-26-3600",
        name: "Maneesha",
        department: "Developer",
        salary: 50000,
        attendance: "Present"
    },
    {
        id: "STK-26-3601",
        name: "Maneesha",
        department: "Tester",
        salary: 35000,
        attendance: "Leave"
    }
];
// Menu
let menuChoice = Number(prompt(`
===== Employee Management System =====

1. Add Employee
2. Show Employee Details
3. Calculate Bonus
4. Check Attendance
5. Print Salary
6. Exit

Enter your choice:2
`));

switch (menuChoice) {

    case 1:

        let id = Number(prompt("Enter Employee ID"));
        let name = prompt("Enter Employee Name");
        let department = prompt("Enter Department");
        let salary = Number(prompt("Enter Salary"));
        let attendance = prompt("Enter Attendance (Present/Leave/Absent)");

        let newEmployee = {
            id: id,
            name: name,
            department: department,
            salary: salary,
            attendance: attendance
        };

        employees.push(newEmployee);

        console.log("Employee Added Successfully!");
        console.log(newEmployee);

        break;

    // ==========================
    // Show Employee Details
    // ==========================
    case 2:

        console.log("===== Employee Details =====");

        for (let emp of employees) {

            console.log("------------------------");

            for (let key in emp) {

                console.log(`${key} : ${emp[key]}`);

            }

        }

        break;

    // ==========================
    // Calculate Bonus
    // ==========================
    case 3:

        console.log("===== Employee Bonus =====");

        for (let emp of employees) {

            let bonus = 0;

            if (emp.salary > 50000) {

                bonus = 10000;

            } else if (emp.salary > 30000) {

                bonus = 5000;

            } else {

                bonus = 2000;

            }

            console.log(`${emp.name} => Bonus : ₹${bonus}`);

        }

        break;

    // ==========================
    // Check Attendance
    // ==========================
    case 4:

        console.log("===== Attendance =====");

        for (let emp of employees) {

            if (emp.attendance === "Present") {

                console.log(`${emp.name} : Working`);

            } else if (emp.attendance === "Leave") {

                console.log(`${emp.name} : Leave Approved`);

            } else {

                console.log(`${emp.name} : Salary Deduction`);

            }

        }

        break;

    // ==========================
    // Print Salary
    // ==========================
    case 5:

        console.log("===== Salary Details =====");

        for (let emp of employees) {

            console.log(`${emp.name} Salary : ₹${emp.salary}`);

        }

        break;

    // ==========================
    // Exit
    // ==========================
    case 6:

        console.log("Thank You... Visit Again!");

        break;

    default:
        console.log("Invalid Choice");
    }