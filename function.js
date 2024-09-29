//A function that return average of two numbers
function average(av1,av2) {
    let av = av1 + av2;

    return av / 2
}
const data = average(130,110);
console.log(data)


//function that log out even number between 0 to 100
function numbers(){
    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
        
    }
}
numbers()