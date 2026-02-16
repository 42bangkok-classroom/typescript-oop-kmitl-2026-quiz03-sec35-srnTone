export class Person {
    firstname?: string;
    lastname?: string;
    private age: number = 25;
    static COUNTRY: string = 'Thailand';

    constructor(firstname?: string, lastname?: string) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    setAge(n: number){
        this.age = n;
    }
    getAge(){
        return this.age;
    }
    getFullName(){
        return `${this.firstname} ${this.lastname}`;
    }

}