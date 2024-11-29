function countUniqueValues(arr){
    let frequencyCounter1={}

    for( let val of arr){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

    return Object.keys(frequencyCounter1).length

}



function countUniqueValues2(arr){
 let i = 0
 for (let j in arr){
    if(arr[i] !== arr[j]){
        i++
        arr[i] = arr[j]
    }

 }

return i+1
}


console.log(countUniqueValues2([1,1,2,3]))