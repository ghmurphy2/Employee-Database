const connection = require('./connection')

class DB {
    constructor(connection) {
        this.connection = connection
    }
    // query methods
    viewAllDepartments() {
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
    // alldepartments clean and working
    viewAllEmployees() {
        return this.connection.promise().query(
            `
            SELECT 
                employee.id,
                employee.first_name,
                employee.last_name,
                role.name,
                manager.name
            FROM 
                employee
            LEFT JOIN
                role ON employee.role_id = role.id
                
              `

        )
    }

    viewAllRoles() {
        return this.connection.promise().query(
            `
            SELECT 
                role.id,
                role.title,
                role.salary,
                department.name AS Department

            FROM 
                role

            LEFT JOIN 
                department ON role.department_id = department.id
              `

        )
    }
    // allroles clean and working

    addEmployee(employee) {
        return this.connection.promise().query(
            `
            INSERT INTO 
                employee 
            SET 
                ? `, employee

        )

    }
    addDepartment(department) {
        return this.connection.promise().query(
            `
            INSERT INTO 
                department
            SET 
                ? `, department

        )

    }
    addRole(role) {
        return this.connection.promise().query(
            `
            INSERT INTO 
                role
            SET 
                ? `, role

        )

    }
    updateEmployee(update) {
        return this.connection.promise().query(
            `JOIN INTO
        employee
        SET
        ?`, update

        )
    }











}

module.exports = new DB(connection)
// order by gain of function?