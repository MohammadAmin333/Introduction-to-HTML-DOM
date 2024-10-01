function myfunction() {
    var a = 10;
    document.getElementById("max2").innerHTML = a * a;
}
function validate(e){
    e.preventaDefault();
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var age = document.getElementById("age").value;
    var msgBox = document.getElementById("massage");

    let massage="";
    if(email === ""){
        massage ="Please enter an email."
        msgBox.style.color ="red"
    }
   else if (pass === "") {
        massage = "Password must be at lealt 8 character."
        msgBox.style.color = "red"
    }
    else if (age === "") {
        massage = "Age must be between 12 and 50."
        msgBox.style.color = "red"
    }
    else {
        massage = "LogIn Successful."
        msgBox.style.color = "green"
    }
    msgBox.innerText = massage
}



