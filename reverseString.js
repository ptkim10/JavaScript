function  reverseString(string) {
    var letters = string.split('');
    letters.reverse();
    var sentence ="";
    for(var i in letters) {
        sentence += letters[i]
    }
    return sentence;
}
