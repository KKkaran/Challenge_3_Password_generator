
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


//this function will generate password depending on the criteria
//and the return value shall be passed to function writePassword
//which will then display it in the password textArea.
function generatePassword(){
  
  //we will provide a couple of prompts and the password shall be created acordingly.
  
  //first we will call a method to get password length
  //var lengthOfPassword = getPasswordLength();
  //second we will ask if to include lowercase or not
  var lowerCase = BooleanValue("lowercase");
  //third we wil ask if to include uppercase or not
  var uppercase = BooleanValue("uppercase");
  //fourth we will ask if to include numeric or not
  var numeric = BooleanValue("numeric");  
  //fifth we will ask if to include special chars or nor
  var special = BooleanValue("special");

  //here once we get all the required criteria we will create an object and pass 
  // to a method to process further creation of password


  var passwordText = document.querySelector("#password");
  passwordText.value =  " " + lowerCase + " " + uppercase + " " + numeric + " " + special;

  //return lowerCase;
}

//keeps asking until user types in a value [8,128] for password Length
function getPasswordLength(){

  var length;
  while(!(parseInt(length) >= 8) || !(parseInt(length) <= 128)){

    length = prompt("How long of a password do you wish to create? (8 - 128)");
    if(parseInt(length) < 8 || parseInt(length) > 128){
      if(parseInt(length) < 8){
        alert("The value you entered is too small for password generation. Invalid INput")
      }else{
        alert("The value you entered is too big for password generation. Invalid INput")
      }
  
    }else if(parseInt(length) >=8 && parseInt(length) <=128){
      alert("Good Input DOG!!")
    }else{
      alert("Invalid input!!")
    }
  }
  return length;

}

//asks user if to include certain criteria in password
//we use same method for uppercase/lowercase/special/numeric values
function BooleanValue(criteria){

  var input = confirm("Do you want the passowrd to include " + criteria +" characters?")
  if(input){
    return true;
  }else{
    return false;
  }

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
generatePassword();