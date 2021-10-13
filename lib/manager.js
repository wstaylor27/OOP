const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
        this.office = office;
    }
    getTitle(){
        return "Manager"
    }

    getOffice(){
        return this.office;
    }
}

module.exports = Manager;
