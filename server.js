// each query prints to database
// take input from inquirer
// json data
// No need to print html
// use menu, see all deparment employees etc employee id 
// add list front entry
// add list type interaction
// add add , delete, view function

const inquirer = require('inquirer')
const db = require('./db')
function mainMenu() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'startMenu',
        message: 'Please select a request from below',
        choices: ['View all Departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employees role'],
      },
    ])
    .then(res => {
      switch (res.startMenu) {
        case 'View all Departments':
          return viewAllDepartments();

        case 'View all roles':
          return viewAllRoles();

        case 'View all employees':
          return viewAllEmployees();

        case 'Add a department':
          return addDepartment();

        case 'Add a role':
          return addRole();

        case 'Add an employee':
          return addEmployee();

        case 'Update an employee role':
          return updateEmployee();
      }
      console.info();
    });
}
// create selection list, prompt for information, run function to print delete or view from input

mainMenu()

function viewAllDepartments() {
  db.viewAllDepartments().then(([rows]) => {
    const departments = rows
    console.table(departments)
    mainMenu()
  })
}

// viewAllDepartments()


function viewAllEmployees() {
  db.viewAllEmployees().then(([rows]) => {
    const employees = rows
    console.table(employees)
    mainMenu()
  })
 
}

// viewAllEmployees()


async function addEmployee() {
  db.query('SELECT * FROM employee', function (err, results) {
    console.log(results);
  });

  app.use((req, res) => {
    res.status(404).end();
  });
  mainMenu()
}
async function viewIdEmployee() {
  db.query(`SELECT * FROM employee WHERE id = ?`, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log("affectedRows: ", result.affectedRows);
    app.use((req, res) => {
      res.status(404).end();
    })
})
mainMenu()
}

function deleteEmployee() {
  db.query(`DELETE employee WHERE id = ?`, 3, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log("affectedRows: ", result.affectedRows);
    app.use((req, res) => {
      res.status(404).end();
    })
})
mainMenu()
}




app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});