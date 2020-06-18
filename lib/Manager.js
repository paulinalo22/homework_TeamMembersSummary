const Employee = require('./employee');//parent constructor


class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
}

    getOfficeNumber(){
    return this.officeNumber;
    }

    getRole(){
    return 'Manager';
    }
 
}




module.exports =  Manager;