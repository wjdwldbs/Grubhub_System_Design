var headers = require("./api_header");
var Mongoose = require("mongoose");
var menu = require("./models.js");
const fetch = require("node-fetch");

menu.collection.drop();

function itemNameGenerator() {
  var storage = [
    "Slow Cooker Coq au Vin",
    "Golden Beet & Beet Greens Pasta",
    "Faggots with onion gravy",
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
  var storage = [
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
  var itemStorage = ["rice", "fries", "coke", "Avocado", "tuna"];
  var result = [];
  function extraPriceGenerator() {
    return Math.floor(1 + Math.random() * 3);
  }
  var length = Math.floor(Math.random() * 5);
  for (var i = 0; i < length; i++) {
    result.push({
      name: itemStorage[Math.floor(itemStorage.length * Math.random())],
      price: extraPriceGenerator()
    });
  }
  return result;
  // return {name: 'ng', price: 2};
}

var photoFetcher = async function(query, page) {
  let response = await fetch(
    `https://api.pexels.com/v1/search?query=${query}&per_page=80&page=${page}`,
    {
      headers: headers.headers
    }
  );
  let data = await response.json();
  return data.photos.map(x => {
    return {
      photo_URL: x.src.medium
      //options: ["original", "large", "large2x", "medium", "small", "portrait", "landscape", "tiny"]
    };
  });
};

var photoFetcherKorean = async function(query, page, perPage) {
  let response = await fetch(
    `https://pixabay.com/api/?key=${
      headers.key
    }&q=${query}&per_page=${perPage}&page=${page}`
  );
  let data = await response.json();
  return data.hits.map(x => {
    return {
      photo_URL: x.webformatURL
    };
  });
};

var photoGenerator = async function() {
  var korean = [
    ...(await photoFetcherKorean("korean food", 1, 160)),
    ...(await photoFetcher("asian food", 1)),
    ...(await photoFetcher("asian food", 2))
  ];
  var mexican = [
    ...(await photoFetcher("mexican food", 1)),
    ...(await photoFetcher("mexican food", 2)),
    ...(await photoFetcherKorean("mexican food", 1, 160)),
    ...(await photoFetcherKorean("taco", 1, 9))
  ];
  var chinese = [
    ...(await photoFetcher("chinese food", 1)),
    ...(await photoFetcher("chinese food", 2)),
    ...(await photoFetcherKorean("chinese food", 1, 160))
  ];
  var italian = [
    ...(await photoFetcher("italian food", 1)),
    ...(await photoFetcher("italian food", 2)),
    ...(await photoFetcherKorean("italian food", 1, 160))
  ];
  var burger = [
    ...(await photoFetcher("american fast food", 1)),
    ...(await photoFetcher("american fast food", 2)),
    ...(await photoFetcherKorean("american food", 1, 160))
  ];

  var combined = [...korean, ...mexican, ...chinese, ...italian, ...burger];
  return combined;
};

//800 data in here
//[{photo_URL: "https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg"}, ....... ]

photoGenerator()
  .then(photo => {
    return [...photo].map((item, i) => {
      item.restaurant_id = Math.floor(i / 16) + 1;
      item.item_name = itemNameGenerator();
      item.description = descriptionGenerator();
      item.price = priceGenerator();
      item.popular = booleanGenerator() && booleanGenerator();
      item.special_instruction = booleanGenerator();
      item.extras = extrasGenerator();
      return item;
    });
  })
  .then(menuData => {
    menu.insertMany(menuData).finally(() => {
      Mongoose.connection.close();
    });
  })
  .catch(e => console.log(e));

// var photos = await photoGenerator();
// var menuData = photos.map((item, i) => {
//   item.restaurant_id = i + 1;
//   item.item_name = itemNameGenerator();
//   item.description = descriptionGenerator();
//   item.price = priceGenerator();
//   item.popular = booleanGenerator();
//   item.special_instruction = booleanGenerator();
//   item.extras = extrasGenerator();
//   return item;
// });

// menu.create(menuData)
// .finally(()=>{
//     Mongoose.connection.close();
// })
