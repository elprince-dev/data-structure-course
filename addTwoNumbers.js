var addTwoNumbers = function(l1, l2) {
    let sum1 = 0
    let sum2 = 0
    for (let i =0 ; i <l1.length ; i++) {
        sum1 = sum1 + l1[i]*10**(l1.length - i -1)
    }
    for (let j =0 ; j <l2.length ; j++) {
        sum2 = sum2 + l2[j]*10**(l2.length - j -1)
    }

    total = sum1 + sum2
    totalStr = total.toString()
    const output = []

    for (let i = 0 ; i <totalStr.length ; i++){
        output.push(Number(totalStr[i]))
    }

    return output

    
};

console.log(addTwoNumbers([1,1,1], [2,2,2]))