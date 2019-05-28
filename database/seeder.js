// const headers = require("./api_header");
const Mongoose = require("mongoose");
const menu = require("./models.js");
const fetch = require("node-fetch");

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

const photoFetcher = async function(query, page) {
  let response = await fetch(
    `https://api.pexels.com/v1/search?query=${query}&per_page=80&page=${page}`,
    {
      headers: {
        Authorization: process.env.AUTHORIZATION
      }
    }
  );
  let data = await response.json();
  return data.photos.map(x => {
    return {
      photo_URL: x.src.medium
    };
  });
};

const photoFetcherPixabay = async function(query, page, perPage) {
  let response = await fetch(
    `https://pixabay.com/api/?key=${
      process.env.KEY
    }&q=${query}&per_page=${perPage}&page=${page}`
  );
  let data = await response.json();
  return data.hits.map(x => {
    return {
      photo_URL: x.webformatURL
    };
  });
};

const photoGenerator = async function() {
  const korean = [
    ...(await photoFetcherPixabay("korean food", 1, 160)),
    ...(await photoFetcher("asian food", 1)),
    ...(await photoFetcher("asian food", 2))
  ];
  const mexican = [
    ...(await photoFetcher("mexican food", 1)),
    ...(await photoFetcher("mexican food", 2)),
    ...(await photoFetcherPixabay("mexican food", 1, 160)),
    ...(await photoFetcherPixabay("taco", 1, 9))
  ];
  const chinese = [
    ...(await photoFetcher("chinese food", 1)),
    ...(await photoFetcher("chinese food", 2)),
    ...(await photoFetcherPixabay("chinese food", 1, 160))
  ];
  const italian = [
    ...(await photoFetcher("italian food", 1)),
    ...(await photoFetcher("italian food", 2)),
    ...(await photoFetcherPixabay("italian food", 1, 160))
  ];
  const burger = [
    ...(await photoFetcher("american fast food", 1)),
    ...(await photoFetcher("american fast food", 2)),
    ...(await photoFetcherPixabay("american food", 1, 160))
  ];

  const combined = [...korean, ...mexican, ...chinese, ...italian, ...burger];
  return combined;
};

//-----------------------------MAIN SEEDER FUNCTION-----------------------------------

const seeder = function(){
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
      menu.collection.drop();
      menu.insertMany(menuData).finally(() => {
        Mongoose.connection.close();
      });
    })
    .catch(e => console.log(e));  
}

seeder();