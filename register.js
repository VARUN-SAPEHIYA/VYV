function matchpass(){
    var first=document.f1.pass1.value;
    var second=document.f1.pass2.value;
    var number=document.f1.num.value;
if(first==second && first.length>6 && number.toString().length==10){
    window.location.href="http://127.0.0.1:5500/login.html?";
    return true;
}
else if(number.toString().length<10 || number.toString().length>10){
    alert("Please Enter correct number" + "\n" + "Check the password");
    return false;
}
else if(first.length<=6){
    alert("Password should be greater than 6 letters");
    return false;
}
else{
    alert("Password must be same!");
    return false;
}    
}