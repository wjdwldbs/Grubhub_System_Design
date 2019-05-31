/* 

the following data were fetched from https://menu-cart.herokuapp.com/api/data/1 using a get request

*/
const data = [
    {
        "_id": "5cf098d7119bea000454fdf6",
        "photo_URL": "https://pixabay.com/get/54e4d4434f53b108f5d084609629357b1536dbe5504c704c702679d3964bc659_640.jpg",
        "restaurant_id": 1,
        "item_name": "Seared Scallops",
        "description": "Grilled salmon, mixed greens, cucumbers, carrots, and tomatoes, served with miso dressing.",
        "price": 7,
        "popular": false,
        "special_instruction": false,
        "extras": [
            {
                "_id": "5cf098d7119bea000454fdfa",
                "name": "tuna",
                "price": 3
            },
            {
                "_id": "5cf098d7119bea000454fdf9",
                "name": "Avocado",
                "price": 1
            },
            {
                "_id": "5cf098d7119bea000454fdf8",
                "name": "tuna",
                "price": 3
            },
            {
                "_id": "5cf098d7119bea000454fdf7",
                "name": "tuna",
                "price": 2
            }
        ],
        "__v": 0
    },
    {
        "_id": "5cf098d7119bea000454fdfb",
        "photo_URL": "https://pixabay.com/get/51e4dc404f5ab108f5d084609629357b1536dbe5504c704c702679d3964bc659_640.jpg",
        "restaurant_id": 1,
        "item_name": "Skirt Steak With Arugula Salad",
        "description": "Vegetarian. Pureed chickpeas topped with paprika and olive oil. Served with pita bread.",
        "price": 13,
        "popular": false,
        "special_instruction": false,
        "extras": [
            {
                "_id": "5cf098d7119bea000454fdfd",
                "name": "tuna",
                "price": 2
            },
            {
                "_id": "5cf098d7119bea000454fdfc",
                "name": "rice",
                "price": 1
            }
        ],
        "__v": 0
    },
    {
        "_id": "5cf098d7119bea000454fdfe",
        "photo_URL": "https://pixabay.com/get/57e3d1454953ac14f6da8c7dda79367c103fd7e053526c48702a72d6904cc35bb9_640.jpg",
        "restaurant_id": 1,
        "item_name": "Grilled Pork Chops",
        "description": "Lightly battered and fried shrimp, pumpkin, broccoli, and zucchini served with tempura sauce.",
        "price": 11,
        "popular": true,
        "special_instruction": false,
        "extras": [
            {
                "_id": "5cf098d7119bea000454fdff",
                "name": "fries",
                "price": 2
            }
        ],
        "__v": 0
    },
    {
        "_id": "5cf098d7119bea000454fe00",
        "photo_URL": "https://pixabay.com/get/57e1d7434e52aa14f6da8c7dda79367c103fd7e053526c48702a72d6904cc35bb9_640.jpg",
        "restaurant_id": 1,
        "item_name": "Instant Pot Turkey Chili",
        "description": "Grilled salmon, mixed greens, cucumbers, carrots, and tomatoes, served with miso dressing.",
        "price": 7,
        "popular": true,
        "special_instruction": true,
        "extras": [],
        "__v": 0
    },
    {
        "_id": "5cf098d7119bea000454fe01",
        "photo_URL": "https://pixabay.com/get/57e3dd434855a914f6da8c7dda79367c103fd7e053526c48702a72d6904cc35bb9_640.jpg",
        "restaurant_id": 1,
        "item_name": "Roasted Macaroni and Cheese",
        "description": "Grilled salmon, mixed greens, cucumbers, carrots, and tomatoes, served with miso dressing.",
        "price": 5,
        "popular": false,
        "special_instruction": false,
        "extras": [
            {
                "_id": "5cf098d7119bea000454fe03",
                "name": "tuna",
                "price": 1
            },
            {
                "_id": "5cf098d7119bea000454fe02",
                "name": "rice",
                "price": 2
            }
        ],
        "__v": 0
    },
    {
        "_id": "5cf098d7119bea000454fe04",
        "photo_URL": "https://pixabay.com/get/54e6d4434254af14f6da8c7dda79367c103fd7e053526c48702a72d6904cc35bb9_640.jpg",
        "restaurant_id": 1,
        "item_name": "Grilled chicken",
        "description": "Lettuce, tomato, cucumber, white and red cabbage with our special salad dressing.",
        "price": 9,
        "popular": false,
        "special_instruction": true,
        "extras": [],
        "__v": 0
    },
    {
        "_id": "5cf098d7119bea000454fe05",
        "photo_URL": "https://pixabay.com/get/57e9d2424b50a914f6da8c7dda79367c103fd7e053526c48702a72d6904cc35bb9_640.jpg",
        "restaurant_id": 1,
        "item_name": "Creamy Baked Risotto",
        "description": "Chicken kebab comes inside of baguette bread filled with our special sauce with lettuce, tomato and pickled cucumber.",
        "price": 11,
        "popular": false,
        "special_instruction": false,
        "extras": [
            {
                "_id": "5cf098d7119bea000454fe09",
                "name": "coke",
                "price": 2
            },
            {
                "_id": "5cf098d7119bea000454fe08",
                "name": "tuna",
                "price": 1
            },
            {
                "_id": "5cf098d7119bea000454fe07",
                "name": "tuna",
                "price": 3
            },
            {
                "_id": "5cf098d7119bea000454fe06",
                "name": "Avocado",
                "price": 1
            }
        ],
        "__v": 0
    },
    {
        "_id": "5cf098d7119bea000454fe0a",
        "photo_URL": "https://pixabay.com/get/53e9d241485ab108f5d084609629357b1536dbe5504c704c702679d3964bc659_640.jpg",
        "restaurant_id": 1,
        "item_name": "Chicken and Corn Chowder",
        "description": "Lightly battered and fried shrimp, pumpkin, broccoli, and zucchini served with tempura sauce.",
        "price": 13,
        "popular": true,
        "special_instruction": true,
        "extras": [],
        "__v": 0
    },
    {
        "_id": "5cf098d7119bea000454fe0b",
        "photo_URL": "https://pixabay.com/get/57e7d64b4f5aac14f6da8c7dda79367c103fd7e053526c48702a72d6904cc35bb9_640.jpg",
        "restaurant_id": 1,
        "item_name": "Slow Cooker Chicken Soup",
        "description": "Grilled salmon, mixed greens, cucumbers, carrots, and tomatoes, served with miso dressing.",
        "price": 8,
        "popular": false,
        "special_instruction": true,
        "extras": [
            {
                "_id": "5cf098d7119bea000454fe0c",
                "name": "rice",
                "price": 2
            }
        ],
        "__v": 0
    },
    {
        "_id": "5cf098d7119bea000454fe0d",
        "photo_URL": "https://pixabay.com/get/55e2d3424e54b108f5d084609629357b1536dbe5504c704c702679d3964bc659_640.jpg",
        "restaurant_id": 1,
        "item_name": "Smoked Salmon Carbonara",
        "description": "Lettuce, tomato, cucumber, white and red cabbage with our special salad dressing.",
        "price": 9,
        "popular": false,
        "special_instruction": false,
        "extras": [
            {
                "_id": "5cf098d7119bea000454fe0f",
                "name": "coke",
                "price": 1
            },
            {
                "_id": "5cf098d7119bea000454fe0e",
                "name": "tuna",
                "price": 2
            }
        ],
        "__v": 0
    },
    {
        "_id": "5cf098d7119bea000454fe10",
        "photo_URL": "https://pixabay.com/get/53e9d241485bb108f5d084609629357b1536dbe5504c704c702679d3964bc659_640.jpg",
        "restaurant_id": 1,
        "item_name": "Chicken Fajita Casserole",
        "description": "Grilled salmon, mixed greens, cucumbers, carrots, and tomatoes, served with miso dressing.",
        "price": 12,
        "popular": true,
        "special_instruction": true,
        "extras": [
            {
                "_id": "5cf098d7119bea000454fe11",
                "name": "coke",
                "price": 3
            }
        ],
        "__v": 0
    },
    {
        "_id": "5cf098d7119bea000454fe12",
        "photo_URL": "https://pixabay.com/get/57e9dc424f5aac14f6da8c7dda79367c103fd7e053526c48702a72d6904cc35bb9_640.jpg",
        "restaurant_id": 1,
        "item_name": "Chicken Grilled Cheese Sandwich",
        "description": "Vegetarian. Pureed chickpeas topped with paprika and olive oil. Served with pita bread.",
        "price": 13,
        "popular": true,
        "special_instruction": false,
        "extras": [],
        "__v": 0
    },
    {
        "_id": "5cf098d7119bea000454fe13",
        "photo_URL": "https://pixabay.com/get/57e6d5444e55a514f6da8c7dda79367c103fd7e053526c48702a72d6904cc35bb9_640.jpg",
        "restaurant_id": 1,
        "item_name": "Contest-Winning Parmesan",
        "description": "Lightly battered and fried shrimp, pumpkin, broccoli, and zucchini served with tempura sauce.",
        "price": 9,
        "popular": false,
        "special_instruction": false,
        "extras": [
            {
                "_id": "5cf098d7119bea000454fe17",
                "name": "Avocado",
                "price": 3
            },
            {
                "_id": "5cf098d7119bea000454fe16",
                "name": "fries",
                "price": 1
            },
            {
                "_id": "5cf098d7119bea000454fe15",
                "name": "rice",
                "price": 2
            },
            {
                "_id": "5cf098d7119bea000454fe14",
                "name": "fries",
                "price": 3
            }
        ],
        "__v": 0
    },
    {
        "_id": "5cf098d7119bea000454fe18",
        "photo_URL": "https://pixabay.com/get/52e1d3404855a514f6da8c7dda79367c103fd7e053526c48702a72d6904cc35bb9_640.jpg",
        "restaurant_id": 1,
        "item_name": "Mediterranean Crab",
        "description": "Beef koobide comes inside of baguette bread filled with our special sauce with lettuce, white and red cabbage and tomato.",
        "price": 6,
        "popular": false,
        "special_instruction": true,
        "extras": [
            {
                "_id": "5cf098d7119bea000454fe1b",
                "name": "fries",
                "price": 2
            },
            {
                "_id": "5cf098d7119bea000454fe1a",
                "name": "rice",
                "price": 2
            },
            {
                "_id": "5cf098d7119bea000454fe19",
                "name": "coke",
                "price": 2
            }
        ],
        "__v": 0
    },
    {
        "_id": "5cf098d7119bea000454fe1c",
        "photo_URL": "https://pixabay.com/get/54e6d4434254a814f6da8c7dda79367c103fd7e053526c48702a72d6904cc35bb9_640.jpg",
        "restaurant_id": 1,
        "item_name": "Chicken Fajita Casserole",
        "description": "Chicken kebab comes inside of baguette bread filled with our special sauce with lettuce, tomato and pickled cucumber.",
        "price": 10,
        "popular": false,
        "special_instruction": true,
        "extras": [
            {
                "_id": "5cf098d7119bea000454fe1d",
                "name": "fries",
                "price": 2
            }
        ],
        "__v": 0
    },
    {
        "_id": "5cf098d7119bea000454fe1e",
        "photo_URL": "https://pixabay.com/get/57e1d7414b55ad14f6da8c7dda79367c103fd7e053526c48702a72d6904cc35bb9_640.jpg",
        "restaurant_id": 1,
        "item_name": "The TJ Hooker Pizza",
        "description": "Lettuce, tomato, cucumber, white and red cabbage with our special salad dressing.",
        "price": 10,
        "popular": false,
        "special_instruction": true,
        "extras": [
            {
                "_id": "5cf098d7119bea000454fe20",
                "name": "tuna",
                "price": 1
            },
            {
                "_id": "5cf098d7119bea000454fe1f",
                "name": "coke",
                "price": 1
            }
        ],
        "__v": 0
    }
]