var arr = [1,2,3,4,5,6]
var arr2 = [1,2,3,4,5,6,7]
function swapByHalf(arrayInput){

    if(arrayInput.length%2!=0){
        console.log("Error")
    
        
    }else{
      half  = arrayInput.splice(0,arrayInput.length/2)
      console.log([...arrayInput,...half]);
        }

}
swapByHalf(arr);
