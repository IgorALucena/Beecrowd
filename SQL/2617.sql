SELECT p.name, p1.name
FROM products p
INNER JOIN providers p1
ON p1.id = p.id_providers
WHERE p1.name = 'Ajax SA';