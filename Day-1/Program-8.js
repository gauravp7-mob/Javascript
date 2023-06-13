let num=5;
let ans="";
while(num>0){
    let rem=parseInt( num%2);
    num=parseInt( num/2);
    ans=ans+rem;
}
console.log(ans.split("").reverse().join(""));