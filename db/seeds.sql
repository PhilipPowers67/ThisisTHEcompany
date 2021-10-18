USE company;


INSERT INTO departments (department_name)
VALUES
("Customer Service"),
("Sales"),
("IT");

INSERT INTO roles (title, salary, department_id)
VALUES
("Customer Service Director", 150000.00, 1),
("Customer Service Manager", 90000.00, 1),
("Customer Service Employee", 45000.00, 1),
("Sales Director", 150000.00, 2),
("Sales Manager", 90000.00, 2),
("Sales Employee", 45000.00, 2),
("IT Director", 150000.00, 3),
("IT Manager", 90000.00, 3),
("IT Employee", 45000.00, 3);

INSERT INTO employees (first_name, last_name, job_title, roles_id, manager_id)
VALUES
("Vernon", "Mendoza", "Customer Service Director",1 ,NULL),
("Pauline", "Turner", "IT Director",7 ,NULL),
("Winifred", "Caldwell","Sales Director",4 ,NULL),
("Kelli", "Cox","Customer Service Manager",2 ,1),
("Cheryl", "Norman","IT Manager",8 ,2),
("Jay", "Garcia","Sales Manager",5 ,3),
("Kelly", "Adkins","Customer Service Employee",3 ,4),
("Irvin", "Ross","Customer Service Employee",3 ,4),
("Marcella", "Moran","Customer Service Employee",3 ,4),
("Clinton", "Guzman","Customer Service Employee",3 ,4),
("Rick", "Cobb","Customer Service Employee",3 ,4),
("Kate", "Allison","Sales Employee",6 ,6),
("Angela", "Watts","Sales Employee",6 ,6),
("Carole", "Wilkins","Sales Employee",6 ,6),
("Janis", "Burgess","Sales Employee",6 ,6),
("Wilbert", "Clayton","Sales Employee",6 ,6),
("Anita", "Carroll","IT Employee",9 ,5),
("Sherman", "Bush","IT Employee",9 ,5),
("Isaac", "Christenson","IT Employee",9 ,5),
("Erick", "Lyons","IT Employee",9 ,5),
("Ernest", "Keller","IT Employee",9 ,5);