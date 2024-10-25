//3.removing duplicate from array
const duplicate = [1,2,3,4,4,5,6,6,6,7,5,8,9,10]
//const dup = Array.from(new Set(duplicate))
const dup = new Set(duplicate)
console.log(dup);

//revearse of a string
let team = ["chelsea", "man u","man c","arsenal","real madrid"]
team.reverse()
console.log(team)


//6.factorial of a given number
function factorial(num){
    let result = 1;

    for(d = 2; d <= num; d++){
        result *= d
    }
    return result
}
let output = factorial(5)
console.log(output);


