SELECT c.name
FROM customers c
INNER JOIN legal_person l
ON l.id_customers = c.id;