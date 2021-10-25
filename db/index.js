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