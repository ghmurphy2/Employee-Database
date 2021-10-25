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
    ('Sales Manager', 750000, 1),
    ('Front End Engineer', 500000, 1),
    ('Sales Intern', 50000, 1),
    ('Programming Manager', 1000000, 2),
    ('Back End Engineer', 1000000, 2),
    ('Programming Intern', 60000, 2),
    ('HR Manager', 250000, 3),
    ('HR Representative', 250000, 3),
    ('HR Inter', 50000, 3);


INSERT INTO employee 
    (first_name, last_name, role_id, manager_id)
VALUES  
    ('John', 'Thomas', 1, NULL),
    ('Steve', 'TargaTylerryen', 2, 1),
    ('George', 'Burns', 3, 1),
    ('Gwen', 'Stevens', 4, NULL),
    ('Joanna', 'Buress', 5, 4),
    ('Jaoseph', 'Bul', 6, 4),
    ('Edward', 'Mark', 7, NULL),
    ('Shawna', 'Miller', 8, 7),
    ('Aj', 'Patel', 9, 7);