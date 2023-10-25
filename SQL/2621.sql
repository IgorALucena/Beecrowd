SELECT p.name
FROM products P
INNER JOIN providers p1
ON p1.id = p.id_providers
WHERE LEFT(p1.name,1) = 'P'
AND p.amount > 10 
AND p.amount < 20;