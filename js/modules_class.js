import {text as txt,addi as addition} from './module.js';
console.log(txt);

let r=addition(5,5);
console.log(r);

class Car{
    constructor (name,year){
        this.name = name;;
        this.year = year;
    }
    set CarName(name){
        this.name = name;
    }
    get CarInfo(){
        return this.name + " "+ this.year;
    }
    age(x){
        return x -this.year
    }
    carage() {
        // date = new Date();  // This will not work
        let date = new Date(); // This will work
        return date.getFullYear() - this.year;
      }
}

let mycar= new Car("ford",2018);

mycar.CarName='bugati';
// const {name,year}=mycar;

// console.log(mycar.name);
// console.log(name,year);

// console.log(mycar.age(2021));

console.log(mycar.CarInfo);
console.log(mycar.carage());