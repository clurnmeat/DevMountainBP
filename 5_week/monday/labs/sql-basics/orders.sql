CREATE TABLE orders(
    order_id SERIAL PRIMARY KEY,
    person_id SERIAL, 
    product_name TEXT, 
    product_price FLOAT, 
    quantity INT
);


INSERT INTO orders(product_name, product_price, quantity)
VALUES ('sketchers gym shoes', 34.99, 34), ('prada designer shoe', 2134.99, 4), ('Louis Vaton', 534.99, 10), ('Rolex designer Watch', 27534.99, 1), ('Coach Hand-bag', 1534.99, 10);


SELECT * FROM orders;


SELECT SUM(quantity) FROM orders;

SELECT SUM(product_price) FROM orders;

SELECT SUM(product_price) FROM orders
WHERE person_id = 3;



