const person1 = {
    name: 'joy',
    id: 101,
    salary: 5000,
    shoppingMoney: function (bonus) {
        this.salary = this.salary + bonus;
        return this.salary;
    }

}

const person2 = {
    name: 'robin',
    id: 102,
    salary: 7000

}

const person3 = {
    name: 'moon',
    id: 103,
    salary: 4000

}

//console.log(person1.shoppingMoney(1000));

const person2Money = person1.shoppingMoney.bind(person2);
console.log(person2Money(2000));
const person3Money = person1.shoppingMoney.bind(person3);
console.log(person3Money(3000));