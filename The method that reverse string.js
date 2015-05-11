function  reverseString(string) {
    var letters = string.split('');
    letters.reverse();
    var sentence ="";
    for(var i = 0;i<letters.length;i++) {
        sentence += letters[i]
    }
    return sentence;
}
