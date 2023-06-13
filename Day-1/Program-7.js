let a1 = [1,2,3,4,5]
let a2 = [5,4,2,1,3]

function checkArray(a1,a2){
if(a1.length == a2.length){
    a1.sort(function(a, b){return a - b});
    a2.sort(function(a, b){return a - b});
    
    let flag = 1;
for(let i = 0;i<a1.length;i++){
    if(a1[i] !== a2[i]){
        flag = 0;
        break;
    }
}
if(flag === 1){
    console.log("same")
}
else{
    console.log("not same")
}
}
else{
    console.log("not same")
}
}
checkArray(a1,a2);
