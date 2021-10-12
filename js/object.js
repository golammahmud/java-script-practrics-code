// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue",
//     fullName : function() {
//         return this.firstName + " " + this.lastName;
//       }
//   };




function Person(firstName,lastName,age,eyeColor){

    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    this.eyeColor=eyeColor;
    this.displayPerson = function () {
        console.log(this.firstName);
        console.log(this.lastName);
      }

}
let person= new Person("jhon","doe",50,'blue')

person.displayPerson();

console.log(person)


