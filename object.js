const person = { name: "Faiza", job: "Student", institute: "eshikhon" };

const woman = Object.create(person);
console.log(woman.institute);

class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }

}

const pepo = new People('Bappa', 30);
console.log(pepo.name);