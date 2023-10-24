SELECT p.id, p.name 
FROM products p
INNER JOIN categories c
ON c.id = p.id_categories
WHERE left(c.name,5) = 'super';