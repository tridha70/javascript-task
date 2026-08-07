// TASK 1: STUDENT REGISTRATION

let student = {
    name: "Maneesha",
    age: 25,
    department: "ECE",
    courseFee: 50000
};

console.log("Name :", student.name);
console.log("Age :", student.age);
console.log("Department :", student.department);
console.log("Course Fee :", student.courseFee);

if (student.age >= 18) {
    console.log("Status : Eligible");
} else {
    console.log("Status : Not Eligible");
}

// TASK 2: EMPLOYEE SALARY CALCULATOR

function calculateSalary(basicSalary, bonus, deduction) {
    let totalSalary = basicSalary + bonus - deduction;
    return totalSalary;
}

let basicSalary = 35000;
let bonus = 5000;
let deduction = 3000;

console.log("Basic Salary :", basicSalary);
console.log("Bonus :", bonus);
console.log("Deduction :", deduction);
console.log("Total Salary :", calculateSalary(basicSalary, bonus, deduction));

// TASK 3: SHOPPING CART

let cart = ["Laptop", "Mouse", "Keyboard", "Headphone"];

cart.push("Monitor");       
cart.pop();                 

console.log("Products :", cart);
console.log("Total Products :", cart.length);
console.log("First Product :", cart[0]);
console.log("Last Product :", cart[cart.length - 1]);

// TASK 4: LOGIN VALIDATION

let storedUsername = "admin";
let storedPassword = "12345";

let enteredUsername = "admin";
let enteredPassword = "12345";

if (
    enteredUsername === storedUsername &&
    enteredPassword === storedPassword
) {
    console.log("Login Success");
} else {
    console.log("Invalid Username or Password");
}

// TASK 5: MOVIE TICKET BOOKING

let movieAge = 20;

let movieResult = movieAge >= 18
    ? "Eligible"
    : "Not Eligible";

console.log("Age :", movieAge);
console.log("Status :", movieResult);

// TASK 6: EMPLOYEE SEARCH

let employees = [
    { name: "Arun", salary: 25000 },
    { name: "Kavin", salary: 40000 },
    { name: "Ravi", salary: 55000 }
];

let employee = employees.find(function(emp) {
    return emp.name === "Kavin";
});

console.log("Employee :", employee);

// TASK 7: PRODUCT FILTER

let products = [
    { name: "Pen", price: 100 },
    { name: "Mouse", price: 450 },
    { name: "Keyboard", price: 700 },
    { name: "Headphone", price: 400 },
    { name: "Monitor", price: 5000 }
];

let cheapProducts = products.filter(function(product) {
    return product.price < 500;
});

console.log("Products below ₹500 :");
console.log(cheapProducts);

// TASK 8: STUDENT MARKS

let marks = [45, 56, 67, 89];

let newMarks = marks.map(function(mark) {
    return mark + 5;
});

console.log("Original Marks :", marks);
console.log("New Marks :", newMarks);

// TASK 9: ATTENDANCE / MARKS CHECKER

let studentMarks = [90, 85, 70, 65];

let allAbove50 = studentMarks.every(function(mark) {
    return mark > 50;
});

console.log("Marks :", studentMarks);
console.log("Every student above 50 :", allAbove50);

// TASK 10: OTP GENERATOR

let otp = Math.floor(100000 + Math.random() * 900000);

console.log("Your OTP :", otp);

// TASK 11: PASSWORD STRENGTH CHECKER

let password = "Abc@1234";

let minimumLength = password.length >= 8;
let containsNumber = /[0-9]/.test(password);
let containsUppercase = /[A-Z]/.test(password);
let containsSpecial = /[^A-Za-z0-9]/.test(password);

console.log("Password :", password);
console.log("Minimum 8 Characters :", minimumLength);
console.log("Contains Number :", containsNumber);
console.log("Contains Uppercase :", containsUppercase);
console.log("Contains Special Character :", containsSpecial);

if (
    minimumLength &&
    containsNumber &&
    containsUppercase &&
    containsSpecial
) {
    console.log("Strong Password");
} else {
    console.log("Weak Password");
}

// TASK 12: PRODUCT SEARCH

let productList = [
    "Laptop",
    "Mobile",
    "Watch",
    "Camera"
];

let searchProduct = "Mobile";

let productAvailable = productList.includes(searchProduct);

console.log("\n===== PRODUCT SEARCH =====");
console.log("Search :", searchProduct);

if (productAvailable) {
    console.log("Available");
} else {
    console.log("Not Available");
 }

// TASK 13: CURRENT DIGITAL CLOCK

function digitalClock() {

    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;

    if (hours === 0) {
        hours = 12;
    }

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    console.log(
        "Current Time : " +
        hours + ":" +
        minutes + ":" +
        seconds + " " +
        ampm
    );
}

digitalClock();

setInterval(digitalClock, 1000);

// TASK 14: COUNTDOWN TIMER
let count = 10;

let countdown = setInterval(function() {

    console.log(count);

    count--;

    if (count < 0) {
        clearInterval(countdown);
        console.log("Countdown Finished!");
    }

}, 1000);

// TASK 15: FAKE API PRODUCT VIEWER

fetch("https://fakestoreapi.com/products")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        data.forEach(function(product) {

            console.log("----------------------");

            console.log("Product Name :", product.title);
            console.log("Price :", "$" + product.price);
            console.log("Image :", product.image);

        });

    })
    .catch(function(error) {
        console.log("Error :", error);
    });

// TASK 16: EMPLOYEE DASHBOARD

let employeeData = [
    { name: "Arun", salary: 25000 },
    { name: "Kavin", salary: 40000 },
    { name: "Ravi", salary: 55000 },
    { name: "Manoj", salary: 35000 }
];

let totalSalary = employeeData.reduce(function(total, employee) {
    return total + employee.salary;
}, 0);

let averageSalary = totalSalary / employeeData.length;

let highestSalary = employeeData.reduce(function(highest, employee) {

    return employee.salary > highest
        ? employee.salary
        : highest;

}, 0);

console.log("Total Salary :", totalSalary);
console.log("Average Salary :", averageSalary);
console.log("Highest Salary :", highestSalary);

// TASK 17: ONLINE FOOD ORDER

let menu = [
    { name: "Pizza", price: 250 },
    { name: "Burger", price: 150 },
    { name: "Shawarma", price: 180 },
    { name: "Fries", price: 100 }
];

let foodCart = [];

// Add items
foodCart.push(menu[0]);
foodCart.push(menu[1]);
foodCart.push(menu[3]);

// Remove last item
foodCart.pop();

let foodBill = foodCart.reduce(function(total, item) {
    return total + item.price;
}, 0);

console.log("Ordered Items :");

foodCart.forEach(function(item) {
    console.log(item.name, "-", "₹" + item.price);
});

console.log("Total Items :", foodCart.length);
console.log("Total Bill :", "₹" + foodBill);

// TASK 18: BANK ACCOUNT

let bankAccount = {

    accountHolder: "Rahul",

    balance: 10000,

    deposit: function(amount) {

        this.balance = this.balance + amount;

        console.log("Deposited :", amount);
        console.log("New Balance :", this.balance);
    },

    withdraw: function(amount) {

        if (amount <= this.balance) {

            this.balance = this.balance - amount;

            console.log("Withdrawn :", amount);
            console.log("New Balance :", this.balance);

        } else {

            console.log("Insufficient Balance");

        }
    },

    checkBalance: function() {

        console.log("Current Balance :", this.balance);
    }
};


console.log("Account Holder :", bankAccount.accountHolder);

bankAccount.checkBalance();

bankAccount.deposit(5000);

bankAccount.withdraw(3000);

bankAccount.checkBalance();

// TASK 19: TO-DO LIST

let todoList = [];


// Add Task
function addTask(task) {

    todoList.push(task);

    console.log("Task Added :", task);
}


// Delete Task
function deleteTask(task) {

    let index = todoList.indexOf(task);

    if (index !== -1) {

        todoList.splice(index, 1);

        console.log("Task Deleted :", task);

    } else {

        console.log("Task Not Found");

    }
}


// Update Task
function updateTask(oldTask, newTask) {

    let index = todoList.indexOf(oldTask);

    if (index !== -1) {

        todoList[index] = newTask;

        console.log("Task Updated");

    } else {

        console.log("Task Not Found");

    }
}


// Show All Tasks
function showTasks() {

    console.log("All Tasks :");

    todoList.forEach(function(task, index) {

        console.log(index + 1 + ". " + task);

    });
}

addTask("Learn JavaScript");
addTask("Practice Arrays");
addTask("Learn Functions");

showTasks();

updateTask("Practice Arrays", "Practice ES6 Arrays");

showTasks();

deleteTask("Learn Functions");

showTasks();

// TASK 20: MINI E-COMMERCE PRODUCT MANAGEMENT

let ecommerceProducts = [

    {
        name: "Laptop",
        price: 55000,
        category: "Electronics",
        stock: 10
    },

    {
        name: "Mobile",
        price: 25000,
        category: "Electronics",
        stock: 20
    },

    {
        name: "Shirt",
        price: 1200,
        category: "Fashion",
        stock: 50
    },

    {
        name: "Shoes",
        price: 2500,
        category: "Fashion",
        stock: 30
    }

];


// Add Product
function addProduct(product) {

    ecommerceProducts.push(product);

    console.log("Product Added :", product.name);
}


// Search Product
function searchEcommerceProduct(name) {

    let product = ecommerceProducts.find(function(product) {

        return product.name.toLowerCase() === name.toLowerCase();

    });

    return product;
}


// Filter By Category
function filterByCategory(category) {

    return ecommerceProducts.filter(function(product) {

        return product.category === category;

    });

}


// Total Stock
function calculateTotalStock() {

    return ecommerceProducts.reduce(function(total, product) {

        return total + product.stock;

    }, 0);

}


// Total Inventory Value
function calculateInventoryValue() {

    return ecommerceProducts.reduce(function(total, product) {

        return total + (product.price * product.stock);

    }, 0);

}

// Add Product

addProduct({
    name: "Watch",
    price: 3000,
    category: "Accessories",
    stock: 15
});


// Search Product

let searchedProduct = searchEcommerceProduct("Mobile");

console.log("Search Result :", searchedProduct);


// Filter Category

let fashionProducts = filterByCategory("Fashion");

console.log("Fashion Products :", fashionProducts);


// Total Stock

console.log(
    "Total Stock :",
    calculateTotalStock()
);


// Total Inventory Value

console.log(
    "Total Inventory Value : ₹" +
    calculateInventoryValue()
);


// Display All Products

console.log("All Products :");

ecommerceProducts.forEach(function(product) {

    console.log(
        product.name +
        " | ₹" +
        product.price +
        " | " +
        product.category +
        " | Stock: " +
        product.stock
    );

});