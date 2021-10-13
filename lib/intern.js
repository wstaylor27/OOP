const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.school = school;
    }
    getTitle(){
        return "Intern"
    }
}

module.exports = Intern;