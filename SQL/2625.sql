SELECT regexp_replace(n.cpf, '(\d{3})(\d{3})(\d{3})', '\1.\2.\3-')
FROM natural_person n
LEFT JOIN customers c 
ON c.id = n.id_customers;
