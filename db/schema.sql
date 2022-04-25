DROP DATABASE IF EXISTS hr_db;
CREATE DATABASE hr_db;

USE hr_db;

CREATE TABLE department (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL
--   price DECIMAL(10,2) NOT NULL
);

CREATE TABLE roleTable (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    roleTitle VARCHAR(30) NOT NULL, 
    salary DECIMAL NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    FOREIGN KEY (department_name),
    REFERENCES department(id)
);

CREATE TABLE employeeTable (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL
    role_id INTEGER NOT NULL, 
    FOREIGN KEY (role_id), 
    REFERENCES roleTable(id)
);


