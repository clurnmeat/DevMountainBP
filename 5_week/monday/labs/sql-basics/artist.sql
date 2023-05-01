SELECT * FROM artist;


INSERT INTO artist(name)
VALUES ('Johnny Simms'), ('Frank Senatra Sr.'), ('Maury Povich');

SELECT * FROM artist
LIMIT 10 DESC;


SELECT * FROM artist ORDER BY name DESC LIMIT 10;

SELECT * FROM artist ORDER BY name ASC LIMIT 5;

SELECT * FROM artist WHERE name LIKE 'Black%';

SELECT * FROM artist WHERE name LIKE 'Black%';

