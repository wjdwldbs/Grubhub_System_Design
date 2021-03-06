const fs = require('fs');
const request = require('request');
const apikey = require('../api.js');
var csvWriter = require('csv-write-stream')


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

let photoFetcherPixabay = (query, page, perPage, callback) => {
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

function extrasGenerator() {
  const itemStorage = ["rice", "fries", "coke", "Avocado", "tuna"];
  const item = itemStorage[Math.floor((itemStorage.length + 1) * Math.random())];
  return item === 5 ? null : itemStorage[item];
}

function extraPriceGenerator() {
  return Math.floor(1 + Math.random() * 3);
}

var photos = [];

(function foodphoto() {
  photoFetcherPixabay("american food", 1, 200, (err, results) => {
    if (err) {
      console.log(`getphoto request was unsuccessful, ${err}`);
    } else {
      const parsed = JSON.parse(results)

      for (var i = 0; i < parsed.hits.length; i++) {
        photos.push(parsed.hits[i].webformatURL)
      }
  
      var menuFile = csvWriter({ headers: ['id', 'restaurant_id', 'food_photo', 'description', 'price', 'popular', 'special_instruction'] })
      menuFile.pipe(fs.createWriteStream('menuItems.csv'));
     
      let itemNumber = -1;
      console.log(new Date())
      function write(){
        let ok = true;
        do {
          itemNumber++;
          var restaurant_id =  Math.floor(itemNumber / 16) + 1;
          var food_photo = photos[Math.floor(Math.random() * ((photos.length - 1) + 1))];
          var description = descriptionGenerator();
          var price = priceGenerator();
          var popular = booleanGenerator() && booleanGenerator();
          var special_instruction = booleanGenerator();
        
          if (itemNumber === 9999999) {
            menuFile.write([itemNumber, restaurant_id, food_photo, description, price, popular, special_instruction], 
            'utf8', () => menuFile.end());
            console.log(`finished seeding menu items!`)
            console.log(new Date())
          } else {
            ok = menuFile.write([itemNumber, restaurant_id, food_photo, description, price, popular, special_instruction], 'utf8');
          }
        } while (itemNumber < 9999999 && ok);
        if (itemNumber > 0) {
          menuFile.once('drain', write);
        }
      }
    write()

    }
  })

})();

var extraFile = csvWriter({ headers: ['id', 'extra_name', 'extra_price', 'restaurant_id', 'dish_id'] })
extraFile.pipe(fs.createWriteStream('extraItems.csv'));

let extraNumber = 0;
console.log(new Date())

function writeExtra(){
  let ok = true;
  do {
    extraNumber++;
    var extra_name = extrasGenerator();
    var extra_price = extra_name === null ? null : extraPriceGenerator();
    var restaurant_id = Math.floor(Math.random() * (625000 - 562500 + 1)) + 562500;;
    var dish_id = Math.floor(Math.random() * 10000000) + 1;
    
    if (extraNumber === 30000000) {
      extraFile.write([extraNumber, extra_name, extra_price, restaurant_id, dish_id], 'utf8', () => extraFile.end());
      console.log(`finished seeding extra items!`) 
      console.log(new Date())
    } else {
      ok = extraFile.write([extraNumber, extra_name, extra_price, restaurant_id, dish_id], 'utf8');
    }
  } while (extraNumber < 30000000 && ok);
  if (extraNumber > 0) {
    extraFile.once('drain', writeExtra);
  }
}
writeExtra()