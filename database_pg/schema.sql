-- psql -U postgres -d template1 -f schema.sql
-- /Users/jiyoon_jung/Developer/System_Design_Capstone/menu-cart/database_pg/menuItems.csv
-- sudo su - postgres
-- psql
-- /home/ubuntu/Jiyoon-Service-Menu/database_pg/extraItems.csv & menuItems.csv 
-- COPY menu_item(id, restaurant_id, food_photo, description, price, popular, special_instruction) FROM '/home/ubuntu/Jiyoon-Service-Menu/database_pg/menuItems.csv' DELIMITER ',' CSV HEADER;

DROP DATABASE IF EXISTS menu;
CREATE DATABASE menu;
\c menu;

DROP TABLE IF EXISTS menu_item;
CREATE TABLE menu_item(
  id INT PRIMARY KEY NOT NULL,
  restaurant_id INT NOT NULL,
  food_photo VARCHAR(200),
  description VARCHAR(500),
  price DECIMAL(5,2) NOT NULL,
  popular BOOLEAN NOT NULL,
  special_instruction  BOOLEAN NOT NULL
);

DROP TABLE IF EXISTS extra_item;
CREATE TABLE extra_item(
  id INT PRIMARY KEY NOT NULL,
  extra_name VARCHAR(50),
  extra_price DECIMAL(5,2),
  restaurant_id INT NOT NULL,
  dish_id INT NOT NULL
);

