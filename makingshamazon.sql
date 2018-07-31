DROP DATABASE IF EXISTS shamazon_db;

CREATE DATABASE shamazon_db;

USE shamazon_db;

CREATE TABLE products (
item_id INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR(200) NOT NULL,
department_name VARCHAR(100) NOT NULL,
price DECIMAL(10,2),
stock_quantity INT(4),

PRIMARY KEY (item_id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Left Hand of Darkness", "books", 8.99, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Brave New World", "books", 5.99, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bananas", "food", 0.59, 230);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("caesar salad", "food", 2.99, 22);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("succulents", "plants", 3.99, 51);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("throw pillows", "other", 4.50, 34);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("dieffenbachia", "plants", 18.99, 82);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Tempest", "books", 2.99, 14);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("World Atlas", "books", 24.99, 7);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("1984", "books", 4.99, 37);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("fossils", "other", 885.09, 3);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("assorted fall leaves", "plants", 1.39, 500);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("ants", "other", 0.99, 9999);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("ukelele", "other", 40.99, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Earthsea Trilogy", "books", 24.99, 27);

SELECT * FROM products;
