const Intern = require("../lib/Intern");

test("Ability to set school using constructor function", () => {
    const school = "North Carolina A&T State University";
    const employee = new Intern("Dane Stubblefield", 1, "dane.k.stubblefield@gmail.com", school);
    expect(employee.school).toEqual(school);
  });

  test("getRole() should return Intern as a role", () => {
    const role = "Intern";
    const employee = new Intern("Dane Stubblefield", 1, "dane.k.stubblefield@gmail.com", "North Carolina A&T State University");
    expect(employee.getRole()).toEqual(role);
  });