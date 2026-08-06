// DATE CONSTRUCTOR MINI PROJECT

// HOTEL BOOKING SYSTEM

console.log("HOTEL BOOKING SYSTEM");
console.log("================================");

// Customer Details
let customerName = prompt("Enter Customer Name:");
let phone = prompt("Enter Phone Number:");

// ROOM MENU

console.log("------ ROOM TYPES ------");
console.log("1. Standard Room - ₹1500");
console.log("2. Deluxe Room   - ₹2500");
console.log("3. Suite Room    - ₹4000");

let roomChoice = Number(prompt("Select Room Type (1-3):"));

let roomType;
let roomPrice;

// ROOM SELECTION

switch (roomChoice) {

    case 1:
        roomType = "Standard Room";
        roomPrice = 1500;
        break;

    case 2:
        roomType = "Deluxe Room";
        roomPrice = 2500;
        break;

    case 3:
        roomType = "Suite Room";
        roomPrice = 4000;
        break;

    default:
        console.log("Invalid Room Selection");
}

// BOOKING DATE

if (roomType) {

    let checkInDay = Number(prompt("Enter Check-in Day:"));
    let checkInMonth = Number(prompt("Enter Check-in Month:"));
    let checkInYear = Number(prompt("Enter Check-in Year:"));

    let numberOfDays = Number(
        prompt("Enter Number of Days:")
    );

    // DATE CONSTRUCTOR
  
    let checkInDate = new Date(
        checkInYear,
        checkInMonth - 1,
        checkInDay
    );

    // CHECK-OUT DATE
   
    let checkOutDate = new Date(checkInDate);

    checkOutDate.setDate(
        checkOutDate.getDate() + numberOfDays
    );

    // ROOM BILL

    let totalAmount = roomPrice * numberOfDays;

    let discount = 0;

    if (totalAmount >= 10000) {

        discount = totalAmount * 0.10;

    } else if (totalAmount >= 5000) {

        discount = totalAmount * 0.05;

    } else {

        discount = 0;
    }


    let finalAmount = totalAmount - discount;

    // BOOKING DETAILS

    console.log("");
 
    console.log("BOOKING DETAILS");
  
    console.log("Customer Name :", customerName);
    console.log("Phone Number  :", phone);

    console.log("Room Type     :", roomType);
    console.log("Room Price    : ₹" + roomPrice);

    console.log("");
   
    console.log("Check-in Date :", checkInDate);
    console.log("Year          :", checkInDate.getFullYear());
    console.log("Month         :", checkInDate.getMonth() + 1);
    console.log("Date          :", checkInDate.getDate());
    console.log("Day           :", checkInDate.getDay());

    console.log("");
  
    console.log("Number of Days :", numberOfDays);

    console.log("Check-out Date :", checkOutDate);
    console.log("Check-out Year :", checkOutDate.getFullYear());
    console.log("Check-out Month:", checkOutDate.getMonth() + 1);
    console.log("Check-out Date :", checkOutDate.getDate());

    console.log("");
  
    console.log("Room Price / Day :", "₹" + roomPrice);
    console.log("Total Amount     :", "₹" + totalAmount);
    console.log("Discount         :", "₹" + discount);
    console.log("Final Amount     :", "₹" + finalAmount);

    console.log("");
    console.log("Booking Status   : Confirmed");

    console.log("================================");
    console.log("       THANK YOU!");
    console.log("================================");
}