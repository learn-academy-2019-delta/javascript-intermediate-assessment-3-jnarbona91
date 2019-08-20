// ASSESSMENT 3: INTERMEDIATE JAVASCRIPT
// Coding practical questions

// Be sure to use all given test cases

// 1. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
let getFib = (num) =>{
  let arr = [0, 1]
  for(let i=2; i<num; i++){
    arr.push(arr[i-1] + arr[i-2])
  } return arr
}
console.log(getFib(11))
// 2. Write a function called oddChecker that takes in an array and returns a new array of only odd numbers.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [9, 7, 199, -9]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [7, 23, -823]
var num = [0, 1, 2, 3, 4]
let oddChecker = (arr) =>{
  return arr.filter(value=> value%2 === 1 && typeof value === "number")
}

console.log(oddChecker(fullArr1))

// 3. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type)

// Log the bell:
console.log(bicycle.gear[2])

// Log the PSI:
console.log(bicycle.wheels.specs[2])


// 4. Write a function that takes one argument of type array and returns the contents of that array in reverse order.

var originalArray1 = [1, 2, 3, 4, 5, 6, 7]
// Expected output: [7, 6, 5, 4, 3, 2, 1],
var originalArray2 = ["a", "t", "l", "e", "d"]
// Expected output: ["d", "e", "l", "t", "a"]

let reverse = (arr) =>{
  return arr.reverse('')
}

console.log(reverse(originalArray1))
// 5. Write the code that would make this test pass.

// describe("multTwo", () => {
//     test ("returns an array with all the numbers multiplied by two", () => {
//         expect(multTwo([3, 4, 5])).toEqual([6, 8, 10])
//         expect(multTwo([23, -9, 0])).toEqual([46, -18, 0])
//         expect(multTwo([4.5, -4.5, 12])).toEqual([9, -9, 24])
//     })
// })

let multTwo = (arr) =>{
  let newArr = arr.map(value => value * 2)
return newArr
}

// console.log(multTwo(arr))

// 6. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"
// Expected output: 3

let letterCounter = (str) =>{
  let arr = str.toLowerCase().split('')
  letterCount = 0
  let letter = "l"
  for(let i=0; i<arr.length; i++){
    if(arr[i].includes(letter))
    letterCount += 1
    }return letterCount
  }

console.log(letterCounter(ourString))

// 7. Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "llamas"
// Expected output: “am”

let middleLetter = (str) =>{ 
  if(str.length%2 ==0){
    return str.slice(str.length/2 -1, str.length/2 +1)
  }else if (str.length%2 !== 0){
    return str.charAt(str.length/2)
  }
}

console.log(middleLetter(middleLetters2))

// 8. Write a program to get the area of a sphere using object classes. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

class Sphere{
  constructor(radius){
    this.radius = radius
  }
  get area(){
    return this.calcArea()
  }
  calcArea(){
    return 4*Math.PI*Math.pow(this.radius, 2)
  }
}

let small = new Sphere(2)
let medium = new Sphere (4)
let large = new Sphere (6)
console.log(small.area)
console.log(medium.area)
console.log(large.area)

// 9. Use object destructuring to return the nested values of specs. Expected output: 4, "manual"
// Don't overthink this one, it's just destrcturing practice.

var myCar = {
  make: "VW",
  model: "Jetta",
  specs: {
    doors: 4,
    transmission: "manual",
  }
}

const { doors, transmission } = myCar.specs

console.log(doors, transmission)

// 10. Stretch: Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// var numbersToAdd1 = [2, 4, 45, 9]
// // Excpected output: [2, 6, 51, 60]
// var numbersToAdd2 = [0, 7, -8, 12]
// // Expected output: [0, 7, -1, 11]
// var numbersToAdd3 = []
// // Expected output: []

// let accumulating = (num) =>{
//   let i=0
//   new arr4 = []
//   let newArr = num[i]
//   let newArr1 = newArr + num[i+1]
//   let newArr2 = newArr1 + num[i+2]
//   let newArr3 = newArr2 + num[i+3]
//   return 
// }
// console.log(accumulating(numbersToAdd2))