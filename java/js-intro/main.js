//var i
//this a comment

/*
   This is
   a
   multi line
  comment
*/

//puts
//console.log()

// Data Types
// - Primatives
//   - Boolean: true / false
//   - String: 'hello' "hello"
//   Number: 
//     - Integer: 4, -23
//     - Floats: 4.0, -23.923
//   Null: null
//   undefined: undefined
//
// Object:
//   { firstName: 'Dave', age: 37 }
//   new Date()
//   Array: []
//   "hash": {}
//

//var person = {
//  name: 'Dave',
//  age: 37,
//  sayHi: function() {
//    console.log('hello')
//  }
//}

// 2 ** 4
// Math.pow(2,4)
// Math.PI
// Math.E

//4 > 2
//3 < 6
//4 >= 4
//5 <= 5
//
//5 == 5 // Does not do type checking
//5 != 4
//
//5 === 5 // Does type checking
//5 !== 4

//x > 5 && x < 10
//
//x < 10 || x > 5

var firstName = 'Dave'
firstName = 'Jake'
var $my_Var2 = 'hello'

var _2legit2quit = 'MC Hammer'

var balance = 1000
//console.log(balance)

//balance = balance + 1
//balance += 1
//console.log(balance++)
//console.log(++balance)

balance--
--balance

var planet = 'Earth'
var greeting = 'Hello'

// "#{greeting} #{planet}!"

var str = greeting + ' ' + planet + '!'

var tabbed = 'Name:\tDave'
var newLine = 'This is\non\nmany lines'
var unableToCan = 'I can\'t do this'
var song = 'You can do it put your \\ into it'
//console.log(song)


var num = 54.2134
//console.log( num.toFixed(2) )
//console.log( num.toPrecision(2) )

// Loops
//  for
//  for..in
//  forEach
//  do..while
//  while
//  map
//  reduce 
//  filter

for( var i = 0; i < 10; i++ ) {
  //console.log(i)
}

var colors = ['red', 'blue', 'green']

for ( var i = 0; i < colors.length; i++ ) {
  //console.log(colors[i])
}

for (var i in colors) {
  //console.log(colors[i])
}

function logColor(color, i) {
  //console.log(color)
}

function fakeNetworkRequest(color, cb) {
  setTimeout(cb, 1000) 
  /*
   * setTimeout( function() { cb() }, 1000)
  */
}

//           0       1       2
//colors = ['red', 'blue', 'green']
for (i in colors) {
  fakeNetworkRequest(colors[i], function() {
    //console.log(colors[i])
  })
}

colors.forEach( function(color, i) {
  fakeNetworkRequest(color, function() {
    //console.log(color)
  })
})

var i = 6;
do {
  console.log(i++)
} while (i < 5 )

var j = 6;
while (j < 5) {
  console.log(j++)
}

// map
// filter
// reduce

var newColors = colors.map( function(color, i) {
  return '<li>' + color + '</li>'
})

var numbers = [3, 2, 10, 4, 63]

//[2, 10, 4]
var even = numbers.filter( function(num) {
  return num % 2 === 0
})

//[3, 63]
var odd = numbers.filter( function(num) {
  return num % 2 !== 0
})

//var numbers = ['3', 2, 10, 4, 63]

// '3210463'
var sum = numbers.reduce( function(total, num) {
  return total += num
}, 0)


// Conditionals
// if
// else if
// else
// ternary
// switch (case)

var x = true

if (x) {
  console.log('It is true')
} else {
  console.log('YOLO')
  console.log('It is a lie')
}

var num = 6
if (num < 0) 
  console.log('Too Low')
else if (num > 7)
  console.log('Too High')
else
  console.log('Just Right')

// case something
// when 1
//   do this
// when 2
//   do this
// else
//   this catches everything else

var op = '+'
var num1 = 4
var num2 = 6
var result


switch(op) {
  case '+':
  case 'add':
    console.log('beep boop')
  case 'plusify':
    result = num1 + num2
    break
  case '-':
    result = num1 - num2
    break
  case '*':
    result = num1 * num2
    break
  case '/':
    result = num1 / num2
  default:
    result = 'Invalid Operator'
}

// result = condition ? if case : else case
//let num = 2
//let result
//if (num % 2 === 0)
// result = 'Even' 
//else
//  result = 'Odd'


//var result = num % 2 === 0 ? 'Even' : 'Odd'

// def name
//   # code
// end

function sayHello() {
  console.log('Hello Dave')
}

function helloWorld(greeting, planet) {
  console.log(greeting + ' ' + planet)
}

sayHello()
helloWorld('Hello', 'Earth')

//function add(num1, num2) {
//  return num1 + num2
//  console.log('I added the number')
//}
//
//result = add(1,2)



















































