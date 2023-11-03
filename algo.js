if (result == 0){
    return 'Did not write.';
}else if (result >= excemption && result< distriction){
        return 'Excemption';
}else if (result >= Distintion) { 
    return 'Distintion';
}else if (result > passMark) {
    return 'Achieved';
}else{
    return 'Not Achived';
};
console.log(checkPassMark(result));

