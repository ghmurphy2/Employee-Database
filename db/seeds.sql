use tracker_db; 

INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Programming'),
    ('Human Reources');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Manager', 75000, 1),
    ('Front End Engineer', 50000, 1),
    ('Sales Intern', 5000, 1),
    ('Programming Manager', 100000, 2),
    ('Back End Engineer', 100000, 2),
    ('Programming Intern', 6000, 2),
    ('HR Manager', 25000, 3),
    ('HR Representative', 25000, 3),
    ('HR Intern', 50000, 3);


INSERT INTO employee 
    (first_name, last_name, role_id, manager_id)
VALUES  
    ('John', 'Thomas', 1, NULL),
    ('Steve', 'Thomas', 2, 1),
    ('George', 'Burns', 3, 1),
    ('Gwen', 'Stevens', 4, NULL),
    ('Joanna', 'Buress', 5, 4),
    ('Jaoseph', 'Bul', 6, 4),
    ('Edward', 'Mark', 7, NULL),
    ('Shawna', 'Miller', 8, 7),
    ('Aj', 'Patel', 9, 7);