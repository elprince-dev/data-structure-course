function validAnagram(str1, str2){
    
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    
    if (str1.length !== str2.length){
        return false
    }
    
    for (let val of str1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    console.log(frequencyCounter1)
    
    for (let val of str2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    
    console.log(frequencyCounter2)
    
    for(let key in frequencyCounter1){
        if ( frequencyCounter1[key] !== frequencyCounter2[key]){
            return false
        }
    }
    
    
    return true
}

console.log(validAnagram('Mohamde', "Mohamed"))