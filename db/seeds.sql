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


