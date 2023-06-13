function Calculator(num1 , num2 , operand){
    switch(operand){
        case '+' : {
            var add = num1+ num2;
            console.log("Addition of "+num1+" & "+num2+" is "+add);
            break
        }
        case '-' : {
            var subtract = num1-num2;
            console.log("Subtraction of "+num1+" & "+num2+" is "+subtract);
            break
        }
        case '/' : {
            var divide = num1/num2;
            console.log("Division of "+num1+" & "+num2+" is "+divide);
            break
        }
        case '*' : {
            var multiply = num1 * num2;
            console.log("Multiplication of "+num1+" & "+num2+" is "+multiply);
            break
        }
    }
}
console.log(Calculator(2,3,'+'));