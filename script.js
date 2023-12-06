// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
 passwordText.value = password;
}
function generatePassword (){
    
 var lowercase = 'abcdefghijklmnopqrstuvwxyz';
 var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 var numbers = '0123456789';
 var symbols = '!@#$%^&*()_+';
 var multiSelector = [];
 
 var keyLegth = prompt("Please select between 8 to 128 characters! Click Ok to confirm");
 var lowercase = confirm("Your password should have a lowercase letter! Click Ok to continue");
 var uppercase = confirm("Your password should have a uppercase letter! Click Ok to continue");
 var numbers = confirm("Your password should have a numbers! Click Ok to continue");
 var symbols = confirm("Your password should have a symbols! Click Ok to continue");
 
    if (keyLegth<8 || keyLegth>128){
        alert("Your password deos not meet the criteria");
        var keyLegth = prompt("Password must be between 8 to 28 characters in length.");
    }
    if ( uppercase === false && lowercase === false && symbols === false && numbers === false){
        return " Your password deos not meet the password criteria";
    };
    
    if (lowercase) {multiSelector += lowercase}
    if (uppercase) {multiSelector += uppercase}
    if(numbers) {multiSelector +=numbers}
    if (symbols) {multiSelector += symbols}
    let finalPassword = ""
    for (let i =0; i<keyLegth; i ++){
        let rng = [Math.floor(Math.random()* multiSelector.length)];

        finalPassword = finalPassword + multiSelector[rng];
    }
    return finalPassword;
}    
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
