function validate(){
    
    //checking empty name
    var name = document.forms.form.name.value;
    if(name === ""){
        alert("Name cannot be empty")
        return false;
    }
    //checking empty email
    var email = document.forms.form.email.value;
    console.log(email)
    if(email === ""){
        alert("Email cannot be empty")
        return false;
    }
    //checking valid email
    const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(!emailReg.test(form.email.value)){
        alert("Enter valid email")
        return false;
    }
    //checking empty mob number
    var mobNumber = document.forms.form.mobNumber.value;
    if(mobNumber == ""){
        alert("Mobile Number cannot be empty")
        return false;
    }
    //checking valid mob number
    const mobileReg = /^[6-9]\d{9}$/;
    if(!mobileReg.test(form.mobNumber.value)){
        alert("Enter valid Mobile Number")
        return false;
    }
    //checking empty gender
    var gender = document.forms.form.gender;
    if(gender == ""){
        alert("Gender cannot be empty")
        
        return false;
    }
    //checking empty checkbox if gender is female
    if(gender[1].checked == true){
    var cbox = document.forms.form.hobby
    if(cbox[0].checked == false &&
        cbox[1].checked == false &&
        cbox[2].checked == false){
        alert("Please select atleast 1 hobby")
        return false;
    }
}


}