//factory function - A factory function is a function that returns a new object

const person = function (firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName() {
      console.log(
        `my fullName is ${this.firstName} ${this.lastName} and i love js`
      );
    },
  };
};

const john = person('john', 'doe');
john.fullName();

// var personActions = {
//   getFullName() {
//     return this.firstName + ' ' + this.lastName;
//   },
// };

// function createPerson(firstName, lastName) {
//   let person = Object.create(personActions);
//   person.firstName = firstName;
//   person.lastName = lastName;
//   return person;
// }

// let person1 = createPerson('John', 'Doe');
// let person2 = createPerson('Jane', 'Doe');

// console.log(person1.getFullName());
// console.log(person2.getFullName());

//constructor function - The name of a constructor function starts with a capital letter like Person, Document, etc.
//A constructor function should be called only with the new operator.

const Person = function (firstName, lastName) {
  (this.firstName = firstName),
    (this.lastName = lastName),
    (this.fullName = () => {
      console.log(
        `my fullName is ${this.firstName} ${this.lastName} and i love js`
      );
    });
  console.log(this);
};

const boby = new Person('Bob', 'Anderson');
boby.fullName();

//***************************************************** */
const city = ['Hyderabad', 'Allahabad', 'Bengluru'];

if (['Hyderabad', 'Allahabad', 'Bengluru'].includes(city)) {
  console.log('hi .........!');
}
