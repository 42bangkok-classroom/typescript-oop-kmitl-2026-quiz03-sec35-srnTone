export class Person {
    firstname?: string;
    lastname?: string;
    private _age?: number;
    static COUNTRY: string = 'Thailand';

    constructor(firstname?: string, lastname?: string) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    setAge(n: number){
        this._age = n;
    }
    getAge(){
        return this._age;
    }
    getFullName(){
        return `${this.firstname} ${this.lastname}`;
    }

}