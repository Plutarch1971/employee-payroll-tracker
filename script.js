// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
 

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  
    let employees = [];
    let addEmployee = true;

    while (addEmployee) {
        let firstNameInput = prompt("Enter employee's first name:");
        let lastNameInput = prompt("Enter employee's last name:");
        let salaryInput = prompt("Enter employee's salary:");

        // Convert salary to a number, default to 0 if input is not a number
        let salary = isNaN(Number(salaryInput)) ? 0 : Number(salaryInput);

        let employee = {
            firstName: firstNameInput,
            lastName: lastNameInput,
            salary: salary
        }
        employees.push(employee);
        addEmployee = confirm("Do you want to add another employee?");
      }  
  
    return employees;

   
    }
   
// Call the function to collect employee data
//let employees = collectEmployees();


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  function displayAverageSalary(employees) {
    const totalEmployees = employees.length;
    const totalSalary = employees.reduce((acc, employee) => acc + employee.salary, 0);
    const averageSalary = totalSalary / totalEmployees;

    console.log(`The average employee salary between our ${totalEmployees} employee(s) is $${averageSalary.toFixed(2)}`);
}

displayAverageSalary(employees);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
//addEmployeesBtn.addEventListener('click', trackEmployeeData);
addEmployeesBtn.addEventListener('click', function() {
  const employees = collectEmployees();
  displayEmployees(employees);
});
 