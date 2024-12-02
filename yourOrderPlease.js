function order(words){
    return words
    .split(" ") // Split the string into words
    .sort((a, b) => a.match(/\d/) - b.match(/\d/)) // Sort by the number in each word
    .join(" "); // Join the sorted words back into a string
}
// order("is2 Thi1s T4est 3a")
console.log(order("is2 Thi1s T4est 3a"))