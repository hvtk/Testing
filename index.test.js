// Importeren van index.js
const add = require("./index").add;
const findByName = require("./index").findByName;
// const { add, findByName } = require("./index");  is een andere manier van exporteren

test("add() function should return the sum of 2 numbers",()=> {
 
  console.log("Hallo dit is een test., waarom werkt het niet!");
//arrange
  const number1 = 4;
  const number2 = 5;

//act
  const sum = add(number1, number2);

//assert
  expect(sum).toBe(9); //expect en toBe komen uit Jest(zie documentatie)

});

test("findByName() returns an object from an array with a specified name", ()=> {
    //arrange
 const users = [
     { id: 1, name: "Rein"},
     { id: 2, name: "Nova"},
     { id: 3, name: "Michel"}
 ];
 const userNameToFind = "Nova";

   //act
const user = findByName(users, userNameToFind);

   //assert
 expect(user).toEqual({id: 2, name: "Nova"});

});

test("findByName  should return null, if the element is not found", () => {
   //arange
 const users = [
  { id: 1, name: "Rein"},
  { id: 2, name: "Nova"},
  { id: 3, name: "Michel"}
 ];
 const userNameToFind = "Kees";

  //act
 const user = findByName(users, userNameToFind);

  //assert
 expect(user).toBeNull();
});

