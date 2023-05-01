-- Create a table called person that records a person’s id, name, age, height (in cm) , city, favorite_color. id should be an auto-incrementing id/primary key (use type: SERIAL)




CREATE TABLE person(
    id SERIAL PRIMARYKEY,
    name TEXT,
    age INT,
    height FLOAT,
    city TEXT,
    favorite_color TEXT,
)


INSERT INTO person(name, age, height, city, favorite_color)
VALUES ('Dionte', 26, 172.72, 'Lakeville', 'Green' ),('Guy', 33, 182.72, 'Gary', 'Chartreuse' ), ('Larry', 29, 188, 'Farmington', 'Blue' ), ('Cheryl', 35, 155.23, 'Minnetonka', 'Purple' ), ('Mike', 27, 165, 'Sherville', 'Pink' );


SELECT * FROM person
ORDER BY height DESC;

SELECT * FROM person
ORDER BY height ;

SELECT * FROM person 
ORDER BY age DESC;

SELECT * FROM person
ORDER BY age > 20 DESC;


SELECT * FROM person
WHERE age = 18;


SELECT * FROM person
WHERE age > 30 OR age < 20;

SELECT * FROM person 
WHERE age != 27;

SELECT * FROM person
WHERE favorite_color != 'red';

SELECT * FROM person
WHERE favorite_color != 'red' AND favorite_color != 'blue';

UPDATE person
SET favorite_color = 'blue'
WHERE id = 4

UPDATE person
SET favorite_color = 'blue'
WHERE id = 3;

SELECT * FROM person
WHERE favorite_color = 'orange' OR favorite_color = 'green';


SELECT * FROM person
WHERE favorite_color IN ('orange', 'green', 'blue');



SELECT * FROM person
WHERE favorite_color IN ('yellow', 'purple');






-- Select all the people in the person table where their favorite color is orange, green or blue (use IN).
 


