const Employee = require('./employee')


class Intern extends Employee {
    constructor(school){
       const school = school

        super(name, id, email)
        this.school = school
    }

    getSchool(school) {
        return school
    }

    getRole() {
        return 'Intern'
    }
}

module.exports = Intern