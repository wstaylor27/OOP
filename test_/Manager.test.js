const Manager = require("../lib/Manager");

test("Ability to set office number using constructor function", () => {
    const office = "7045695526";
    const employee = new Manager("William Taylor", 1, "william.taylor@gmail.com", office);
    expect(employee.office).toBe(office);
  });

  test("getRole() should return Manager as a role", () => {
    const role = "Manager";
    const employee = new Manager("William Taylor", 1, "william.taylor@gmail.com", "7045695526");
    expect(employee.getRole()).toBe(role);
  });