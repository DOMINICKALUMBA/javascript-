let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function leg() {
    let head = Math.floor( Math.random() * 3)
    return hands[head]
}

console.log( leg() )