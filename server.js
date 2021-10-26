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


function addEmployee() {
  inquirer
  .prompt([
    {
      type: 'input',
      name:'first_name',
      message:'What is this employees first name?'
    
    },
    {
      type: 'input',
      name:'last_name',
      message:'What is this employees last name?'

    }
    ,
    {
      type: 'input',
      name:'role_id',
      message:'What is this employees role ID?'

    }
    ,
    {
      type: 'input',
      name:'manager_id',
      message:'What is this employees first name?'

    }

      /* Pass your questions in here */
    ])
    .then((res) => {
      db.addEmployee(res)
      // Use user feedback for... whatever!!
    })
    
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