
// FETCH PRODUCTS

fetch("https://fakestoreapi.com/products")

.then(response => response.json())

.then(data => {

    // TASK 1 - PRODUCT CARDS
  
    let task1 = document.querySelector("#task1");

    data.forEach(c => {

        let card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <h3>${c.title}</h3>

            <img src="${c.image}">

            <p>Price: $${c.price}</p>

            <p>Category: ${c.category}</p>

            <p>Rating: ${c.rating.rate}</p>
        `;
    });
    });

    // TASK 2 - PRODUCT DESCRIPTION
   
    let task2 = document.querySelector("#task2");

    data.forEach(c => {

        let card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <h3>Title: ${c.title}</h3>

            <p>
                Description: ${c.description.slice(0, 50)}
            </p>

            <p>
                Price: $${c.price}
            </p>
        `;

        task2.append(card);

    });


    // TASK 3 - PRODUCT LIST
    
    let task3 = document.querySelector("#task3");

    data.forEach(c => {

        let card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <p>Product: ${c.title}</p>

            <p>Price: $${c.price}</p>

            <p>Category: ${c.category}</p>

            <img src="${c.image}">
        `;

        task3.append(card);

    // TASK 4 - PRODUCT IMAGE GALLERY
  
    let task4 = document.querySelector("#task4");

    data.forEach(c => {

        let img = document.createElement("img");

        img.src = c.image;

        task4.append(img);

    });

    // TASK 5 - CATEGORY DISPLAY
    // ========================================

    let task5 = document.querySelector("#task5");

    data.forEach(c => {

        let card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <p>Title: ${c.title}</p>

            <p>Category: ${c.category}</p>

            <p>Price: $${c.price}</p>
        `;

        task5.append(card);

    });

    // TASK 6 - PRODUCT DETAILS CARD
 
    let task6 = document.querySelector("#task6");

    data.forEach(c => {

        let card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <h3>${c.title}</h3>

            <img src="${c.image}">

            <p>
                Description: ${c.description}
            </p>

            <p>
                Category: ${c.category}
            </p>

            <p>
                Price: $${c.price}
            </p>

            <p>
                Rating: ${c.rating.rate}
            </p>
        `;

        task6.append(card);

    });

    // TASK 7 - RATING DETAILS

    let task7 = document.querySelector("#task7");

    data.forEach(c => {

        let card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <p>
                Product: ${c.title}
            </p>

            <p>
                Rating: ${c.rating.rate}
            </p>

            <p>
                Reviews: ${c.rating.count}
            </p>
        `;

        task7.append(card);

    });

    // TASK 8 - FIRST 20 CHARACTERS
   
    let task8 = document.querySelector("#task8");

    data.forEach(c => {

        let card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <p>
                Title: ${c.title}
            </p>

            <p>
                Description: ${c.description.slice(0, 20)}
            </p>
        `;

        task8.append(card);

    });

    // TASK 9 - CHANGE BUTTON CONTENT
   
    let task9 = document.querySelector("#task9");

    data.forEach(c => {

        let card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <h3>${c.title}</h3>

            <img src="${c.image}">

            <button class="buy-btn">
                Buy for $${c.price}
            </button>
        `;

        task9.append(card);

    });

    // TASK 10 - COMPLETE PRODUCT CARD
  
    let task10 = document.querySelector("#task10");

    data.forEach(c => {

        let card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            
            <img src="${c.image}">

            <h3>
                Title: ${c.title}
            </h3>

            <p>
                <b>Category:</b> ${c.category}
            </p>

            <p>
                <b>Description:</b>
                ${c.description}
            </p>

            <p>
                <b>Price:</b> $${c.price}
            </p>

            <p>
                <b>Rating:</b> ${c.rating.rate}
            </p>

            <p>
                <b>Reviews:</b> ${c.rating.count}
            </p>

            <button class="buy-btn">
                BUY NOW
            </button>

        `;

        task10.append(card);

    });

});