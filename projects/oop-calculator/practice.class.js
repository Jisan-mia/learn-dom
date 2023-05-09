function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.printName = function() {
    console.log(this.name)
}

// static method/function
Person.sayHi = () => console.log('hi there')
// static property
Person.country = 'bd'


const john = new Person('John', 21)

const jack = Object.create(john)
console.log(Object.getPrototypeOf(jack) == john)

// class version
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }

    printName() {
        console.log(this.name)
    }

    // static property
    static country = 'bd'
    // static method/function
    static sayHi() {
        console.log('hi there')
    }
}
const rock = new PersonClass('rock', 35)
console.log(rock.printName())

console.log('====== class inheritance ======')
class GenericPersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }

    getEntitle() {
        console.log('generic person entitle')
    }
}

class Student extends GenericPersonClass {
    constructor(name, age, studentId) {
        super(name, age)
        this.studentId = studentId;
    }

    getEntitle() {
        console.log('student')
    }
}

class Employer extends GenericPersonClass {
    constructor(name, age, position) {
        super(name, age)
        this.position = position
    }

    getEntitle() {
        console.log('Employer')
    }
}

const jisanStudent = new Student('Jisan', 21, 2341)
console.log(jisanStudent.getEntitle())

const employerJack = new Employer('Jack', 32, 'HR Mangement')
console.log(employerJack.position)


