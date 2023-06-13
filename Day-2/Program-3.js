function error(input1, input2){
    try{
        if(Number.isInteger(input1) && Number.isInteger(input2)){
            if(input2!==0){
                console.log(input1/input2)
            }
            else {
                throw "denominator should not be zero"
            }
        }
        
        else {
            throw "please enter numbers only"
        }
        
    }
    catch(err){
        console.log(err)
        
    }
}
error(2,2)
error(2,"Hi")
error(2,0)