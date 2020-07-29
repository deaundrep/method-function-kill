/******************
 * YOUR CODE HERE *
 ******************/
const newPerson = function(firstName, lastName, age, married = false){
  if (firstName === undefined) {
    firstName = 'Anonymous';
  }
  if (lastName === undefined) {
    lastName = 'Person';
  }
  
const person = {
firstName: firstName,
lastName: lastName,
age: age,
married: married,


goingOn: function(){
  return this.age + 1
},

ageUp: function(){
  return this.age ++
},

getFullName: function(){
  return this.firstName + ' ' + this.lastName
},

marry: function(person2){
  this.married = true
  person2.married = true
  this.spouseName = person2.getFullName()
  person2.spouseName = this.getFullName()
},

divorce: function(person2){
  this.married = false
  person2.married = false
  delete this.spouseName
  delete person2.spouseName
},


}
return person;


}




  



/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof newPerson === 'undefined') {
  newPerson = undefined;
}


module.exports = newPerson;
