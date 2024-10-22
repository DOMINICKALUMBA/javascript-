
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
let ham = function digits(num)

