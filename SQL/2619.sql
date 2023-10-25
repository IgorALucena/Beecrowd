SELECT p.name, p1.name, p.price
FROM products p
INNER JOIN providers p1
ON p1.id = p.id_providers
INNER JOIN categories c
ON c.id = p.id_categories
WHERE c.name = 'Super Luxury'
AND p.price > 1000;