function iAmFunction(input, callback){
    console.log("Hi "+input);
    callback();
}
function callback(){
    console.log("I am a call back function");
}

iAmFunction("Gaurav", callback)