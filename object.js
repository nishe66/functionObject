// 1.Write a function that loops through an array of numbers and returns the sum of the numbers.

function sumArrayNumbers(array){
    let sum = 0;
  for(let i = 0; i < array.length; i++){
        sum += array[i];
  }
  return sum;
}

const arrayNumber = [10, 14, 24, 56];
console.log("sum of the numbers:" + sumArrayNumbers(arrayNumber));

// output answer: sum of the numbers:104

// -----------------------------------------------------------------------------------------


// 2.Create an object with properties name and age. Write a function to add a new property city to the object.

let person = {
    fullName: "John Doe",
    age: 30,
  };

 
function addNewProperty(objName, cityName){
      objName.city = cityName;
}

addNewProperty(person, "Toronto");
console.log(person);

// output answer: 
// { fullName: 'John Doe', age: 30, city: 'Toronto' }
// -----------------------------------------------------------------------------------------

// 3.Write a function that takes a number and returns whether it is even or odd.

function checkEvenOrOdd(number){
     if(number % 2 === 0){
       return "Even";
     }
     else{
       return "Odd";
     }
     
     
}

console.log(checkEvenOrOdd(8));
console.log(checkEvenOrOdd(5));

// output:
// Even
// Odd
// -----------------------------------------------------------------------------------------

// 4.Create an object that represents a car with properties brand and model.Write a function to update the model of the car.

let car = {
    brand: "BMW",
    model: "X5",
   
};
function updateCarModel(carObj, newModel){
    carObj.model = newModel;
}

updateCarModel(car, "X7"); 
console.log(car);

// output answer: 
// { brand: 'BMW', model: 'X7' }

//------------------------------------------------------------------------------------------



// 5. Write a function that loops through an object and prints each property and its value. 

function forEachProperty(obj){
     for(let key in obj){
        console.log(key + ": " + obj[key]); 
         
        }
}
let student = {
  firstName: "Alice",
  lastName: "Sen",
  country: "America",
  idNO: 23,

};

forEachProperty(student);


// output answer:
// firstName: Alice
// lastName: Sen
// country: America
// idNO: 23



    




