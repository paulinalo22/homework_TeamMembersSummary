const Employee = require('./employee');//AKA big daddy constructor

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
}
    getGithub(){
    return this.github;
    }
    getRole(){
    return 'Engineer';
    }
}

module.exports =  Engineer;