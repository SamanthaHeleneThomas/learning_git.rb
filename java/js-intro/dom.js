var person = {
  name: 'Dave',
  age: 37
}

var btn = document.getElementById('clicky')
var input = document.getElementById('myInput')
var preview = document.getElementById('preview')
var clear = document.getElementById('clear')
var list = document.getElementById('messages')
var selectors = document.getElementsByClassName('selector')

// class Person
//   def initialize(name, age)
//     @name = name
//     @age = age
//   end
// end
//
// p = Person.new('Dave', 37)


var Animal = function(name, age) {
  this.name = name
  this.age = age
}

Animal.prototype.info = function() {
  console.log(this.name + ' is ' + this.age + ' years old')
}

var a = new Animal('Bill', 7)
var b = new Animal('Sarah', 2)
a.info()
b.info()



function livePreview() {
  preview.innerHTML = input.value
}

function addMessage() {
  var value = input.value
  var item = document.createElement('li')
  item.innerHTML = value
  list.append(item)
  clearInput()
  input.focus()
}

function clearInput() {
  input.value = ''
  preview.innerHTML = ''
}

function clearAll() {
  clearInput()
  list.innerHTML = null
}

function showInfo(e) {
  var info = document.getElementById('info')
  // person.age
  // person.name
  // person['name']
  // person['age']
  var text = person[e.target.id]
  info.innerHTML = text
}

input.addEventListener('keyup', livePreview)
btn.addEventListener('click', addMessage) 
clear.addEventListener('click', clearAll)
for (var i = 0; i < selectors.length; i++) {
  var btn = selectors[i]
  btn.addEventListener('click', showInfo)
}


//JSON
//JavaScript
//Object
//Notation
//{
//  "name: "dave",
//  "age": 37
//}
//JSON.parse(obj)
//JSON.stringify(obj)
