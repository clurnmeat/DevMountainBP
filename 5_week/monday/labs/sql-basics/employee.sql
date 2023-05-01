SELECT last_name, first_name FROM employee
WHERE city = 'Calgary';


SELECT * FROM employee
ORDER BY birth_date DESC
LIMIT 1;


SELECT * FROM employee
ORDER BY birth_date ASC
LIMIT 1;

SELECT * FROM employee
WHERE reports_to = 2;


SELECT SUM(employee_id) FROM employee
WHERE city = 'Lethbridge';


