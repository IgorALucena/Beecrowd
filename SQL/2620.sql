SELECT c.name, o.id
FROM customers c
INNER JOIN orders o
ON o.id_customers = c.id
WHERE EXTRACT(MONTH from o.orders_date) < 7
AND EXTRACT(YEAR from o.orders_date) = 2016;