
//O(log(N))
function bubbleSort(arr){
    let noSwaps = true;
    for (let i = arr.length; i > 0; i--){
        noSwaps = true
        for (let n=0; n < i-1; n++){
            console.log(arr[n], arr[n+1])
            if (arr[n] > arr[n+1]){
                [arr[n], arr[n+1]]=[arr[n+1],arr[n]]
                noSwaps = false
            }

        }
        if (noSwaps) break;
        
    }

    return arr
}

console.log(bubbleSort([54, 243, 1, 76, 0]))