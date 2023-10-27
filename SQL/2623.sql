SELECT p.name, c.name
FROM products p
INNER JOIN categories c
ON c.id = p.id_categories
WHERE p.amount > 100
AND p.id_categories IN (1,2,3,6,9);