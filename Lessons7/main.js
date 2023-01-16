'use strict'
let person = {}
person.firstName = 'Ivan'
person.secondName = 'Ivanov'
person.showData = function () {
  console.log(this.firstName, this.secondName)
}

let newPerson = Object.assign({}, person)
newPerson.firstName = 'Petro'
newPerson.secondName = 'Petriv'

person.showData()
newPerson.showData()

let MyMath = {}
MyMath.a = 5
MyMath.b = 2
MyMath.sum = function () {
  console.log(this.a + this.b)
}
MyMath.multiplication = function () {
  console.log(this.a * this.b)
}
MyMath.division = function () {
  console.log(this.a / this.b)
}
MyMath.subtraction = function () {
  console.log(this.a - this.b)
}

MyMath.sum()
MyMath.multiplication()
MyMath.division()
MyMath.subtraction()
