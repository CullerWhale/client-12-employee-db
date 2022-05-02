use hr_db;

INSERT INTO department (department_name)
VALUES ('Engineering'), 
        ('Management'),
        ('Human Resources'), 
        ('Sales'); 


INSERT INTO roleTable (roleTitle, salary, department_id)
VALUES ("CEO", 100000, 2), 
        ("VP", 90000, 2),
        ('Lead', 80000, 1),
        ('Senior', 75000, 1), 
        ('Intern', 30000, 3),
        ('Culture Bro', 40000, 3);

INSERT INTO employeeTable (first_name, last_name, role_id)
VALUES ("Darth", "Skater", 1), 
        ("Bart", "Mueller", 2);

UPDATE employeeTable 
SET manager_id = 1 
WHERE first_name = 'Bart';


        