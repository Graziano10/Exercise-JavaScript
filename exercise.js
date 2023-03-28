class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  code() {
    console.log(`${this.firstName} ${this.lastName}`);
  };
}

const developer = new Person("Mario", "Rossi");

developer.code();

