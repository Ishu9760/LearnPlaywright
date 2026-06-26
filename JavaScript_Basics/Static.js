class person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static greet() {
        console.log("Hello from the static method!");
    }
}

const person1 = new person("John", 30);
console.log(person1.name);
console.log(person1.age);

person.greet(); 