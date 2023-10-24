SELECT c.name, r.rentals_date
FROM customers c
inner JOIN rentals r ON c.id = r.id_customers
WHERE EXTRACT(MONTH from r.rentals_date) = 9;