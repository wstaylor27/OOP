const Employee = require("../lib/Employee");

test("Ability to set name using constructor function", () => {
    const name = "Nate Brewer";
    const employee = new Employee(name);
    expect(employee.name).toEqual(name);
  });

test("Ability to set the user ID using constructor function", () => {
    const id = "1";
    const employee = new Employee("Nate Brewer", id, "nate.brewer@gmail.com");
    expect(employee.id).toEqual(id);
  });

test("Running getEmail() should return the supplied email", () => {
    const email = "nate.brewer@gmail.com";
    const employee = new Employee("Nate Brewer", 1, email);
    expect(employee.getEmail()).toEqual(email);
  });

test("Running getRole() should return 'Employee'", () => {
    const role = "Employee";
    const employee = new Employee("Nate Brewer", 1, "nate.brewer@gmail.com");
    expect(employee.getRole()).toEqual(role);
  });