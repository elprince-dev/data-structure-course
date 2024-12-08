function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let currentVal = arr[i]
        let j;
        for( j = i - 1; j >= 0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr
}

console.log(insertionSort([6, 1, 0,24]))

