export class Student {
    firstname?: string ='';
    lastname?: string = '';

    constructor(firstname?: string, lastname?: string) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    printName(){
        return `${this.firstname} ${this.lastname}`;
    }    
}