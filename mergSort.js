function mergeSort(arr){

}


//mergeArrays function merges two SORTED arrays
function mergeArrays(arr1, arr2){
    let i = 0;
    let j = 0;
    result = []
    while (i < arr1.length && j < arr2.length){
        if (arr1[i] < arr2[j]){
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }
    }

    while(j < arr2.length){
        result.push(arr2[j])
            j++
    }
    while(i < arr1.length){
        result.push(arr1[i])
            i++
    }

    return result
}

console.log(mergeArrays([1,5,7,10], [2,4,6,11]))