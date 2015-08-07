function getNumberOfDiagonal(angles) {
    if(typeof(angles) == "number") {
        if(angles >= 3) {
        return (angles*(angles-3) )/2;
        }
        else {
        return "Can not get the number of the diagonal.";
        }
    }
    else {
    return "NaN";
    }
}
