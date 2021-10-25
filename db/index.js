const connection = require('./connection') 

class DB {
    constructor(connection){
    this.connection = connection
    }
// query methods
    viewAllDepartments(){
        return this.connection.promise().query(
            `
            SELECT 
                department.id,
                department.name
            FROM 
                department
              `
              
        )
    }
    viewAllRoles(){
        return this.connection.promise().query(
            `
            SELECT 
                role.id,
                role.title,
                role.salary,
                department.name

            FROM 
                role

            LEFT JOIN 
                department ON role.department_id = department.id
              `
              
        )
    }
    viewAllEmployees(){
        return this.connection.promise().query(
            `
            SELECT 
                empyloyee.id,
                employee.name
            FROM 
                employee
              `
              
        )
    }












}

module.exports = new DB(connection)