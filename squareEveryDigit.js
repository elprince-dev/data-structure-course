function squareDigits(num){
  const numbers = num.toString().split("").map(Number)
  console.log(numbers)
  
  const squares = numbers.map(n => Math.pow(n,2))
  console.log(squares)

  const numString = squares.join("")
  console.log(numString)
  
  
  return parseInt(numString);
}

squareDigits(123)