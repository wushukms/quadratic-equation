module.exports = function solveEquation(equation) {
    let a=0, b=0, c=0 ;
    let array = equation.split(' ');
    a = array[0];
    if (array[3] == "-"){
        b = (-1) * array[4];
    }
    else {
        b = array[4];
    }
    if (array[7] == "-"){
        c = (-1) * array[8];
    }
    else{
        c = array[8];
    }
    let d, x1, x2;
    let arr = [];
    x1 = Math.round((-1*b + Math.sqrt(Math.pow(b,2)- (4*a*c)))/(2*a));
    x2 = Math.round((-1*b - Math.sqrt(Math.pow(b,2)- (4*a*c)))/(2*a));
    if (x1 > x2){
        arr.push(x2);
        arr.push(x1);
    }
    else{
        arr.push(x1);
        arr.push(x2);
    }
    return arr.valueOf();
}
