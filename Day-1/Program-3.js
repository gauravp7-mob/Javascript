var input = [1,3,5,9,6,4]
if(input.length<5){
    console.log("Enter atleast 5 elements");
}
else{
max = 0;
for(let i = 1;i<input.length;i++){
    if(Math.abs(input[i]-input[i-1])>max){
        max = Math.abs(input[i]-input[i-1]);
    }
}
console.log(max);
}