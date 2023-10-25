SELECT p.name, p1.name, c.name
FROM products p
INNER JOIN providers p1
ON p1.id = p.id_providers
INNER JOIN categories c
ON c.id = p.id_categories
WHERE p1.name = 'Sansul SA'
AND c.name = 'Imported';