function digPow(n, p){
    k = n.toString().split("").map(Number).reduce((accumulation, number, index) => accumulation + number**(index+p),0)/n
    
    return Number.isInteger(k) ? k : -1
}

console.log(digPow(89,1))