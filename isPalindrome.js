function isPalindrome(x){

    xString = x.toString()

    let left = 0
    let right = xString.length - 1

    if (x < 0){return false}

    while (left <= right){
        if (xString[left] !== xString[right]){
            console.log(xString[left])
            
            return false
        }

        left += 1
        right -= 1
    }
    return true
}

console.log(isPalindrome(1122))

