let apples = 5;
let speed = 'fast'
let hasName = true
let nothingMuch = null
let nothing = undefined

//built in objects
let now: Date = new Date();

//array
let colors: string[] = ['red', 'green', 'blue']
let numbers: number[] = [1,2,3]
let truths: boolean[] = [true, false, true]

//classes
class Car {

}
let car:Car = new Car()

//object literal
let point:{x:number; y:number} ={
    x:10,
    y:20
}

//function
const logNumber:(i:number) => void = (i:number) =>{
    console.log(i);
}

logNumber(5);

//when to use annotations;
//function that returns type any

const json = '{"x":10, "y":20}'
const cord:{x:number; y:number} = JSON.parse(json)

//
let words = ['red', 'green', 'blue']
let found: boolean;

for(let i = 0; i < words.length; i++){
    if(words[i] === 'green'){
        found = true
    }
}

//3
let nums = [-1, -10, 12]
let numAboveZero: boolean | number = false

for(let i = 0; i < nums.length; i++){
    if(nums[i] > 0){
        numAboveZero = nums[i]
    }
}

