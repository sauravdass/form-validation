//variable declaration for form validation

let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let pass = document.getElementById('pass');
let confirmPass = document.getElementById('cPass');
let fnameErr = document.getElementById('fnameErr');
let lnameErr = document.getElementById('lnameErr');
let emailErr = document.getElementById('emailErr');
let passErr = document.getElementById('passErr');
let confirmPassErr = document.getElementById('cPassErr');

function sub(){
//    First Name
    if(firstName.value == ""){
        firstName.style.border = "1px solid red";
        fnameErr.innerHTML = "please enter your first name";
        firstName.focus();
        return false;
    }
//    Last Name
    if(lastName.value == ""){
        lastName.style.border = "1px solid red";
        lnameErr.innerHTML = "please enter your last name";
        lastName.focus();
        return false;
    }
//    email
    if(email.value == ""){
        email.style.border = "1px solid red";
        emailErr.innerHTML = "please enter your email";
        email.focus();
        return false;
    }
//    password
    if(pass.value == ""){
        pass.style.border = "1px solid red";
        passErr.innerHTML = "please enter your password";
        pass.focus();
        return false;
    }
    
    if(pass.value.length < 6){
        pass.style.border = "1px solid red";
        passErr.innerHTML = "(please enter at least 6 digits password)";
        pass.focus();
        return false;
    }
//    confirm password
    if(confirmPass.value == ""){
        confirmPass.style.border = "1px solid red";
        confirmPassErr.innerHTML = "please confirm your password";
        confirmPass.focus();
        return false;
    }
    
    if(confirmPass.value != pass.value){
        confirmPass.style.border = "1px solid red";
        confirmPassErr.innerHTML = "password not matched!!";
        confirmPass.focus();
        return false;
    }
}

function errValid(){
//    First Name
    if(firstName.value != ""){
        firstName.style.border = "1px solid #5f27cd";
        fnameErr.innerHTML = "";
    }
//    Last Name
    if(lastName.value != ""){
        lastName.style.border = "1px solid #5f27cd";
        lnameErr.innerHTML = "";
    }
//    email
    if(email.value != ""){
        email.style.border = "1px solid #5f27cd";
        emailErr.innerHTML = "";
    }
//    password
    if(pass.value != ""){
        pass.style.border = "1px solid #5f27cd";
        passErr.innerHTML = "";
    }
//    confirm password
    if(confirmPass.value != ""){
        confirmPass.style.border = "1px solid #5f27cd";
        confirmPassErr.innerHTML = "";
    }
}

firstName.addEventListener('blur', errValid);
lastName.addEventListener('blur', errValid);
email.addEventListener('blur', errValid);
pass.addEventListener('blur', errValid);
confirmPass.addEventListener('blur', errValid);
//form validation ends here

//variable declaration for date, month and year

let allMonths = ["january","february","march","april","may","june","july","august","september","october","november","december"];
let showDay = document.getElementById('showDay');
let showMonth = document.getElementById('showMonth');
let showYear = document.getElementById('showYear');
let day = `<option value="day">Day</option>`;
let month = `<option value="month">Month</option>`;
let year = `<option value="year">Year</option>`;

for(i = 1; i <= 31; i++){
    day += `<option value="${i}">${i}</option>`;
}
showDay.innerHTML = day;

for(i = 0; i < allMonths.length; i++){
    month += `<option value='${allMonths[i]}'>${allMonths[i]}</option>`;
}
showMonth.innerHTML = month;

for(i = 2021; i >= 1905; i--){
    year += `<option value="${i}">${i}</option>`;
}
showYear.innerHTML = year;
//js for date of birth ends here
