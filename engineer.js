const Employee = require('./employee')


class Engineer extends Employee {
    constructor(githubUsername){
       const github = githubUsername

        super(name, id, email)
        this.githubUsername = githubUsername
    }

    getGithub(githubUsername) {
        return githubUsername
    }

    getRole() {
        return 'Engineer'
    }
}



module.exports = Engineer