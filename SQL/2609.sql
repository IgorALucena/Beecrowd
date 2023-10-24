SELECT c.name, SUM(p.amount) as "sum"
FROM categories c
INNER JOIN products p
ON c.id = p.id_categories
GROUP BY c.name;