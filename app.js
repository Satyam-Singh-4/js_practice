// document.querySelectorAll(".btn").forEach((item) => {
//   item.addEventListener("click", () => {
//     alert("welcome...!");
//   });
// });

// document.write("hello world");
// alert("hello people");
// console.log("hello world .....!");

//Variables
//Variable-Most Basic Building Block
//Variables-Store,Access,Modify==Value
//Declare,Assignment Operator,Assign Value

// let name = 'Satyam Singh';
// //some code here
// console.log(name);
// //variable declartion

// let address, zip, state;
// address = '6/3/97/2 banjara hills';
// zip = '500004';
// state = 'TS';
// name = 'Satyam Singh 1';
// console.log(address, zip, state);
// console.log(name);

// const f_Name = 'Arun';
// const l_Name = 'Sharma';

// const fullName = `your full_name is :${f_Name} ${l_Name}`;
// console.log(fullName);

// let arr = [1, 2, 3, 4, 5];
// let sum1 = [];
// let sum = arr.reduce((acc, value) => {
//   console.log(value);
//   return acc + value;
// }, 0);
// console.log([sum]);

// let addition = [1, 2, 3, null, 'a']
//   .filter((x) => !isNaN(x))
//   .reduce((x, y) => x + y);

// console.log(addition);
// const n = 's';
// console.log(typeof n);

// let arr1 = [
//   {
//     name: 'Satyam',
//     age: 20,
//   },
//   {
//     name: 'Satyam',
//     age: 21,
//   },
// ];
// arr1.forEach((object) => delete object.age);
// console.log(arr1);

// function duplicateCharCount(str) {
//   if (str) {
//     var obj = {};
//     for (let i = 0; i < str.length; i++) {
//       console.log([str[i]]);
//       if (obj[str[i]]) {
//         obj[str[i]] += str[i];
//       } else {
//         obj[str[i]] = 1;
//       }
//     }
//     console.log(obj);
//   }
// }

// duplicateCharCount('aabcdd');

// //Function expression
// const add = function (num1, num2) {
//   return num1 + num2;
// };
// let result = add(4, 7);
// console.log(result);

// //Function challenge
// //c-1
// const calculateTotal = (subTotal, tax) => subTotal + tax;
// let res = calculateTotal(20, 10);
// console.log(res);

// const object1 = {
//   a: 'somestring',
//   b: 42,
//   c: false,
// };

// console.log(Object.values(object1));
// console.log(Object.getPrototypeOf(arr1));

// //Objects

// const person = {
//   name: 'Arun',
//   lastName: 'S',
//   age: 27,
//   education: true,
//   married: true,
//   sibling: ['anna', 'susan', 'peter'],
//   greeting(name) {
//     console.log(`hello my name is  ${name}`);
//   },
// };
// console.log(person.name);
// console.log(person.sibling[1]);
// person.greeting('john');

// function phoneticLookup(val) {
//   let result = '';

//   // Only change code below this line
//   var lookup = {
//     alpha: 'Adams',
//     bravo: 'Boston',
//     charlie: 'Chicago',
//     delta: 'Denver',
//     echo: 'Easy',
//     foxtrot: 'Frank',
//   };

//   result = lookup[val];
//   // Only change code above this line
//   return result;
// }

// console.log(phoneticLookup('charlie'));

// //remove duplicate from array
// const a = [1, 2, 3, 4, 5, 3];
// let b = [];

// for (let index = 0; index < a.length; index++) {
//   b.indexOf(a[index]) === -1
//     ? b.push(a[index])
//     : console.log('duplicate', a[index]);
// }

// console.log('b is =', b);

// //What is the output
// let c = [1, 2, 3];
// let d = c.map((num) => {
//   c.push(num + 3);
//   return num + 1;
// });
// console.log(c, d);

// //Local scope
// //can not be access from outside code blocks
// //if - NOT VAR

// let name1 = 'bobo';

// function calculate() {
//   const name = 'john';
//   const age = 25;
//   lastName = 'singh';
// }
// calculate();
// console.log(lastName);
// if (true) {
//   const name = 'john';
// }
// console.log(`my name is ${name1} and I am awesome`);

// //variable lookup

// const globalNumber = 20;

// function sumOfNumber(n1, n2) {
//   const sum = n1 + n2 + globalNumber;
//   console.log(sum);
// }

// sumOfNumber(3, 4);

// //map
// //does return a new array
// //does not change size of original array
// //uses value of original array when making new one

// const people = [
//   {
//     name: 'Satyam',
//     age: 22,
//     position: 'developer',
//   },
//   {
//     name: 'Arun',
//     age: 24,
//     position: 'sr.developer',
//   },
//   {
//     name: 'Saurabh',
//     age: 25,
//     position: 'Hr',
//   },
// ];

// const res1 = people.map((person) => {
//   return `<h1>${person.name}<h1>`;
// });

// console.log(res1);

// const newPeople = people.map((person) => {
//   return {
//     firstName: person.name,
//     newAge: person.age + 10,
//   };
// });
// console.log(newPeople);

// document.body.innerHTML = res1.join('');

// //filter
// //does return new array
// //can manipulate the size of new  array
// //returns based on   condition

// const peopless = [
//   {
//     name: 'Satyam',
//     age: 24,
//     position: 'developer',
//     salary: 400,
//   },
//   {
//     name: 'Arun',
//     age: 24,
//     position: 'sr.developer',
//     salary: 600,
//   },
//   {
//     name: 'Saurabh',
//     age: 25,
//     position: 'Hr',
//     salary: 1000,
//   },
// ];

// const p = peopless.filter((person) => person.age < 25);
// console.log(p);

// //find
// //return object
// //return first match ,if not found return undefined
// //great for getting unique value

// const obj = peopless.find((person) => person.age === 24);
// console.log(obj);
// console.log(peopless[0].name);

// //reduce
// //iterates,callback function
// //reduces to a single value -objcet,array,numbers
// //1 parametre('acc') - total of all calculations
// //2 parametre('curr') - current iteration/value

// const totalSpend = peopless.reduce(
//   (acc, currentItem) => (acc += currentItem.salary),
//   0
// );
// console.log(totalSpend);

// //Array challenges

// console.log(students);

// //let e = ['a\0b'];

// // let newStudents = students.map((data, idx) => {
// //   return {
// //     ...data,
// //     role: 'student',
// //     idxId: idx,
// //   };
// // });

// // newStudents[3].role = 'employee';

// // console.log(newStudents);

// const updatedStudents = students.map((student) => {
//   student.role = 'student';
//   return student;
// });
// console.log(updatedStudents);

// const newStudents = students.filter((element) => {
//   // if (element.score >= 80) {
//   //   return (element.passingYear = 2022);
//   // }
//   return element.score >= 80
//     ? (element.passingYear = 2023)
//     : element.passingYear;
// });
// console.log(newStudents);

// const findStudent = students.find((student) => {
//   return student.score > 80;
// });
// console.log(findStudent);

// const avgScore =
//   students.reduce((totalScore, student) => {
//     return totalScore + student.score;
//   }, 0) / students.length;
// console.log(avgScore);

// //Math objec
// //Standard built in object-always available
// const number = 7.8;
// const num = Math.floor(7.9);
// console.log(num);
// console.log(Math.floor(Math.random(number) * 10));

// // Date

// const months = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   'November',
//   'December',
// ];

// const days = [
//   'Sunday',
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturtday',
// ];

// // const date = new Date();
// const date = new Date('1/12/2004');
// const month = date.getMonth();
// console.log(months[month]);

// const day = date.getDay();
// console.log(days[day]);

// console.log(date.getDate());
// console.log(date.getFullYear());

// const sentence = `${days[day]}, ${date.getDate()} ${
//   months[month]
// } ${date.getFullYear()}`;

// document.body.innerHTML = sentence;

// //object
// //nested object
// //dot notation vs bracket notation

// const man = {
//   name: 'john',
//   age: 25,
//   married: true,
//   sibling: ['anna', 'peter'],
//   greet: function (name) {
//     console.log(`Hello my name is ${name}`);
//   },
//   sayHello(ame) {
//     console.log(`Hello,my name is ${name}`);
//   },
//   job: {
//     title: 'developer',
//     company: {
//       name: 'coding addict',
//       address: '123,main street',
//     },
//   },
//   'random-value': 'random',
// };
// console.log(man.job.title);
// man['random-value'] = 'random_value';
// console.log(man['random-value']);

//this keyword

// function showThis() {
//   console.log(this);
// }

// const john = {
//   name: 'john',
//   showThis: showThis,
// };

// const bob = {
//   name: 'bob',
//   showThis: showThis,
// };

// john.showThis();
// bob.showThis;

// showThis();

// const btn1 = document.querySelector('.btn-1');
// const btn2 = document.querySelector('.btn-2');

// btn1.addEventListener('click', showThis);
// btn2.addEventListener('click', showThis);
// btn2.addEventListener('click', function () {
//   showThis();
// });

const city = ['Hyderabad', 'Allahabad', 'Bengluru'];

if (['Hyderabad', 'Allahabad', 'Bengluru'].indexOf(city)) {
  console.log('hi .........!');
  city.push('ludhiyana');
}
console.log(city);


