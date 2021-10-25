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

inquirer
  .prompt([
    {
      type: 'rawlist',
      name: 'reptile',
      message: 'Please select a request from below',
      choices: ['View all Departments', 'View all roles', 'View all employees', 'add a department', 'add a role', 'add an employee', 'update an employees role'],
    },
  ])
  .then(answers => {
    console.info();
  });




async function viewAllDepartments(){
    db.viewAllDepartments().then(([rows]) => {
    const departments = rows 
    console.table(departments)
})
}
 
viewAllDepartments()


async function viewAllEmployees(){
  db.viewAllEmployees().then(([rows]) => {
  const employees = rows 
  console.table(employees)
})
}

viewAllEmployees()


async function addEmployee(){
  db.query('SELECT * FROM employee', function (err, results) {
    console.log(results);
  });

  app.use((req, res) => {
    res.status(404).end();
  }); 
}
async function viewIdEmployee(){
  db.query(`Select * FROM employee WHERE id = ?`, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log("affectedRows: ", result.affectedRows);
      app.use((req, res) => {
          res.status(404).end();
    }
})
}

async function deleteEmployee(){
    db.query(`DELETE employee WHERE id = ?`, 3, (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log("affectedRows: ", result.affectedRows);
        app.use((req, res) => {
            res.status(404).end();
      }
})
}




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });