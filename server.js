// each query prints to database
// take input from inquirer

const inquirer = require('inquirer')
const db = require('./db')




async function viewAllDepartments(){
    db.viewAllDepartments().then(([rows]) => {
    const depratments = rows 
    console.table(depratments)
})
}
 
viewAllDepartments()