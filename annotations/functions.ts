const add=(a:number, b:number): number=>{
    return a + b;
}

function divide(a:number,b:number):number {
    return a / b
}

const multiply =  function (a:number, b:number):number{
    return a * b
}

const logger = (message: string):void =>{
    console.log(message);
}

const throwErr = (message:string): never=>{
    throw new Error(message)
}

const logWeather = (forecast: {date: Date, weather: string}) =>{
console.log(forecast.date);
console.log(forecast.weather);
}

//destructuring annotations
const logWeather2 = ({date,weather}: {date: Date, weather: string}) =>{
    console.log(date);
    console.log(weather);
    }
    
    