//3.removing duplicate from array
const duplicate = [1,2,3,4,4,5,6,6,6,7,5,8,9,10]
//const dup = Array.from(new Set(duplicate))
const dup = new Set(duplicate)
console.log(dup);

//revearse of a string
let team = ["chelsea", "man u","man c","arsenal","real madrid"]
team.reverse()
console.log(team)


//6.factorial of a given number(5)
function factorial(num){
    let result = 1;

    for(d = 2; d <= num; d++){
        result *= d
    }
    return result
}
let output = factorial(5)
console.log(output);


console.log("max number in an array");

//11.max number in an array
let maxNumber = [1,20,3,23,4,2,1,99,33,124,200]
let bigaNo = Math.max(...maxNumber)
console.log(bigaNo);



//17.sorting array in ascending order
let arr1 = [8,9,4,7,3,1,2,5,6]
console.log(arr1.sort(function (a, b) {
    return a - b;
}))


//18.sorting array in descending order
let arr2 = [8,9,4,7,3,1,2,5,6]
console.log(arr2.sort(function (a, b) {
    return b - a;
}))


console.log("evennumbers");

//12.function that return even numbers
function evenNumbers(even) {
    for (let b = 0; b <= even ; b++) {
        if (b % 2 === 0) {
            console.log(b);
            
        }
        
    }
}

evenNumbers(20)


console.log("even no in array");

function numb(eveNo) {
    let aarr = [];
    for (let i = 0; i < eveNo1.length; i++) {
       
        if (eveNo[i]  % 2 === 0) {
           aarr.push(eveNo[i])
        };
        
    }
    return aarr
}
let eveNo1 = [1,2,3,4,2,3,8,32,21,28]
let Num = numb(eveNo1)
console.log(Num);






//13.prime numbers
function primeNumber(){
  for(let pn = 0; pn <= 20; pn++){
    if (pn / pn === pn && pn / pn === 1) {
      console.log(pn)
    }
  }
}
primeNumber()



//8.comparing two array
let array1 = [1,2,3,4,5];
let array2 = [1,4,9,16,25];
function compe(array1,array2) {
    if (array1 === (array2 * array2)) {
        //console.log(true);
        
    }
    return true
}
console.log(compe([1,2,3,4,5],[1,4,9,16,25]))




//14.largest element in an array
let nestArray = [20,30,29,11,21,43,50]

let nest = Math.max(nestArray)
console.log(nest);




//************************************array that return only evenNumbers i an array

console.log('array that return only evenNumbers i an array');

let array = [1,2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
function evenNumbers(Arr) {
   let arr4 = []
    for (let e = 0; e < Arr.length; e++) {
        
       if (Arr[e]  % 2 === 0 ) {
            arr4.push(Arr)
       }
    }
    return Arr
}
console.log(evenNumbers(array));




//20 array that flatten nested array
let fla = [1,2,[3[4,2,3]]];
console.log(fla.flat())
