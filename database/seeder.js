// const headers = require("./api_header");
const Mongoose = require("mongoose");
const menu = require("./models.js");
const fetch = require("node-fetch");
const request = require('request');
const fs = require('fs');

/*------------The followings are all helper functions for the main seeder function---------------------
------------Scroll down to the bottom to see the main seeder function ;D-----------------------------*/



function itemNameGenerator() {
  const storage = [
    "Slow Cooker Coq au Vin",
    "Golden Beet & Beet Greens Pasta",
    "Meatballs with onion gravy",
    "Beef Curry",
    "Super Mom Stir Fry",
    "Almond-Thyme-Crusted Mahi Mahi",
    "Contest-Winning Parmesan",
    "Creamy Baked Risotto",
    "Chicken Cacciatore",
    "Bird's Nest Egg Salad",
    "Tofu Kabobs with Barbecue Sauce",
    "Grilled Chicken, and Quinoa Salad",
    "Grilled Pork Chops",
    "One Pot Garlic Butter Chicken",
    "Instant Pot Turkey Chili",
    "Chicken Fajita Burgers",
    "Fruit Salad",
    "Chicken Grilled Cheese Sandwich",
    "Steak Sandwiches",
    "Coconut & tamarind chicken curry",
    "Smoked Salmon Carbonara",
    "Pan-Seared Cod",
    "Guinea fowl tagine",
    "Kale Pesto Avocado Grilled Cheese",
    "Mexican Chicken Taco Skillet",
    "Skinnified Pork Burrito",
    "Calamari",
    "Bang-Bang Shrimp",
    "Chicken Fajita Casserole",
    "The TJ Hooker Pizza",
    "Seared Scallops",
    "Spinach Burrata Omelet",
    "Roasted Macaroni and Cheese",
    "Chicken and Corn Chowder",
    "Mediterranean Crab",
    "Creamy chicken & mango curry",
    "Grilled chicken",
    "Homemade Creamy Chicken Soup",
    "Flattened Chicken",
    "Skirt Steak With Arugula Salad",
    "Healthy Chicken Burgers",
    "Stir-Fried Udon Noodles",
    "Pan-seared Salmon",
    "Penne and Vegetable Casserole",
    "Grilled Watermelon Salad",
    "Slow Cooker Chicken Soup",
    "Creamy Chile Chicken Enchiladas",
    "Caprese Mac and Cheese",
    "Oven Baked Chicken Tacos",
    "Thai Peanut Chicken"
  ];
  return storage[Math.floor(storage.length * Math.random())];
}

function descriptionGenerator() {
  const storage = [
    `Beef koobide comes inside of baguette bread filled with our special sauce with lettuce, white and red cabbage and tomato.`,
    `Chicken kebab comes inside of baguette bread filled with our special sauce with lettuce, tomato and pickled cucumber.`,
    `Lettuce, tomato, cucumber, white and red cabbage with our special salad dressing.`,
    `Vegetarian. Pureed chickpeas topped with paprika and olive oil. Served with pita bread.`,
    `Lightly battered and fried shrimp, pumpkin, broccoli, and zucchini served with tempura sauce.`,
    `Grilled salmon, mixed greens, cucumbers, carrots, and tomatoes, served with miso dressing.`
  ];
  return storage[Math.floor(storage.length * Math.random())];
}

function booleanGenerator() {
  return Math.random() >= 0.5;
}

function priceGenerator() {
  return Math.floor(5 + Math.random() * 10);
}

function extrasGenerator() {
  const itemStorage = ["rice", "fries", "coke", "Avocado", "tuna"];
  let result = [];
  function extraPriceGenerator() {
    return Math.floor(1 + Math.random() * 3);
  }
  const length = Math.floor(Math.random() * 5);
  for (let i = 0; i < length; i++) {
    result.push({
      name: itemStorage[Math.floor(itemStorage.length * Math.random())],
      price: extraPriceGenerator()
    });
  }
  return result;
}

let photoFetcherPixabay = (query, page, perPage, callback) => {
  let apikey = '14107210-094ef13c435ce5635482272e3'
  let options = {
    method: 'GET',
    url: `https://pixabay.com/api/?key=${apikey}&q=${query}&per_page=${perPage}&page=${page}`
  }
  request(options, (error, response, body) => {
    if (error) {
      console.log(`Unsuccessful API requst: ${error}`);
      callback(error, null);
    } else {
      console.log('SUCCESSFUL API REQUEST!');
      callback(null, body);
    }
  })
}

var photos = [];
var seededMenu = [];

(function foodphoto() {
  photoFetcherPixabay("american food", 1, 200, (err, results) => {
    if (err) {
      console.log(`getphoto request was unsuccessful, ${err}`);
    } else {
      const parsed = JSON.parse(results)

      for (var i = 0; i < parsed.hits.length; i++) {
        photos.push(parsed.hits[i].webformatURL)
      }

      for (var k = 0; k < 10000000; k++) {
        seededMenu.push({
          item_id: k + 1,
          restaurant_id: Math.floor(Math.random() * 500000) + 1,
          item_name: itemNameGenerator(),
          food_photo: photos[Math.floor(Math.random() * ((photos.length - 1) + 1))],
          description: descriptionGenerator(),
          price: priceGenerator(),
          popular: booleanGenerator() && booleanGenerator(),
          special_instruction: booleanGenerator(),
          extras: extrasGenerator()
        })
      }

      var file = fs.createWriteStream('data.json');
      let y = 0;
      console.log(new Date())
      function write() {
        let ok = true;
        do {
          y++;

          if (y === 10000000) {
            // Last time!
            file.write(JSON.stringify(seededMenu[10000]), 'utf-8');
            file.write(']', 'utf-8', () => file.end());
            console.log(`finished!`)
            console.log(new Date())

          } else {
            // See if we should continue, or wait.
            // Don't pass the callback, because we're not done yet.
            if (y === 1) {

              ok = file.write(`[${JSON.stringify(seededMenu[y])},`, 'utf-8');
            } else {
              //console.log(k)
              ok = file.write(`${JSON.stringify(seededMenu[y])},`, 'utf-8');
            }

          }
        } while (y < 10000000 && ok);
        if (y > 0) {
          // Had to stop early!
          // Write some more once it drains.
          file.once('drain', write);
        }
      }
      write();

      // writeTenMillionTimes(file, seededMenu, () => {
      //   file.end()
      // })



      // menu.insertMany(seededMenu)
      // .then((result) => console.log(`total number of entries: `))
      // .catch((err) => console.log(`Failed to insert documents: ${err}`))

    }
  })


})();

