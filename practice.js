
for (let i = 1; i <= 100; i++) {
    console.log(i);
}


//for(let evenNo = 2; evenNo <= 50; evenNo++) {console.log(evenNo);}
//if(evenNo % 2 === 0){console.log(evenNo);}


for(let me = 0; me < 100; me++){if (me  % 2 === 0 ) {
    
}
    console.log(me)
}

//in a function way

function num() {
  
  for (let ie = 0; ie <= 100; ie++) {
    if (ie % 2 === 0) {
      console.log(ie)
    }
    
  }
}
num()



//anothe way
function num(limit) {
  for (let ie = 0; ie <= limit; ie++) {
    if (ie % 2 === 0) {
      console.log(ie); // Log even numbers
    }
  }
}

// Call the function with an argument
num(50); // This will print even numbers up to 50

//prime numbers
function primeNumber(){
  for(let pn = 0; pn <= 20; pn++){
    if (pn / pn === pn && pn / pn === 1) {
      console.log(pn)
    }
  }
}
primeNumber()


//reccusion
function digits(num){
  let output = 1;
  for (t = 2; t <= num; t++) {
    output *= t;
  }
  return output
}
let ham = digits;
console.log(ham(5));



//function that add sumof two numbers
function summation() {
  let s1 = 3;
  let s2 = 4;
  return s1 + s2
}
let sums1s2 = summation()
console.log(sums1s2);


//sum of two numbers that add up to the target

function twoSum(nums, target) {
  for(let i = 0;i < nums.length; i++){
      for(let j = i + 1; j < nums.length;j++){
          if(nums[i] + nums[j] === target){
              return [i , j]
          }
      }
  }
  return "No solution found!"; 
};

const nums = [2, 7, 11, 15,8];
const target = 10;
let results = twoSum(nums, target); 
console.log(results)
