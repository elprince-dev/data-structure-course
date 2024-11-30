function duplicateEncode(word){
    let result = ""
    const newWord = word.toLowerCase()
    for (let letter of newWord){
        newWord.indexOf(letter) === newWord.lastIndexOf(letter) ? result +="(" : result +=")"
    }
    return result;
}

console.log(duplicateEncode("mohamed"))