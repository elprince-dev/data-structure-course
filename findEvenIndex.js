function findEvenIndex(arr){


    //[20,10,-80,10,10,15,35]
    // 0   1   2  3  4  5  6
    let sumLeft = 0;
    let sumRight = arr.slice(1).reduce((num, accum) => num + accum, 0)
    if(sumLeft === sumRight) return 0
  
    for (let i = 1; i < arr.length; i++){
        sumLeft += arr[i-1]
        sumRight-= arr[i]
        if(sumLeft === sumRight) return i
    }
    return -1
  
}
findEvenIndex([20,10,-80,10,10,15,35])
