const Engineer = require("../lib/Engineer");

test("Ability to set GitHub username using constructor function", () => {
    const github = "wstaylor";
    const employee = new Engineer("Wes Taylor", 1, "wstaylor27@gmail.com", github);
    expect(employee.github).toEqual(github);
  });

  test("getRole() should return Engineer as a role", () => {
    const role = "Engineer";
    const employee = new Engineer("Wes Taylor", 1, "wstaylor27@gmail.com", "wstaylor");
    expect(employee.getRole()).toEqual(role);
  });