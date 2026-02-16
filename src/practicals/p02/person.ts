export class Person {
    firstname?: string;
    lastname?: string;
    private age?: number;

    constructor(firstname?: string, lastname?: string) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}