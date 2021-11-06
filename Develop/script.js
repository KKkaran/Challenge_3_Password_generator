
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var lowerCaseCharacters = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z'
]
var upperCaseCharacters = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M',
  'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
]
var numeric = [1,2,3,4,5,6,7,8,9,0]
var specialCharacters = ['!','"','#','$','%','&','\'','(',')','*','+',',', '-','.'
        ,'/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~']



// Write password to the #password input into the box
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password)
}
//this function will generate password depending on the criteria
//and the return value shall be passed to function writePassword
//which will then display it in the password textArea.
function generatePassword(){
  
  //we will provide a couple of prompts and the password shall be created acordingly.
  
  //first we will call a method to get password length
  var lengthOfPassword = getPasswordLength();
  //second we will ask if to include lowercase or not
  var lowercase;
  //third we wil ask if to include uppercase or not
  var uppercase;
  //fourth we will ask if to include numeric or not
  var numeric;  
  //fifth we will ask if to include special chars or nor
  var special;
  
  //before we make object we gotta make sure atleast one of the critera is met
  //if user says no to all of them, we keep asking until they atleast pick one!!
  var counter = 0;
  while( !(lowercase === true) && !(uppercase === true) && !(numeric === true) && !(special === true)){
    //this loop will keep running until user picks atleast one of the criterias
    if(counter == 0){
      counter = 1;
    }else{
      alert("You have to pick atleast one of the criterias. Let's do it again!")
    }
    lowercase = BooleanValue("lowercase");
    uppercase = BooleanValue("uppercase");
    numeric = BooleanValue("numeric");
    special = BooleanValue("special");
  }

  //here once we get all the required criteria we will create an object and pass 
  // to a method to process further creation of password
  var passwordObject = {
    count : lengthOfPassword,
    includeLowerCase : lowercase,
    includeUpperCase : uppercase,
    includeNumeric : numeric,
    includeSpecial : special
  }

  var password = passwordGeneration(passwordObject);
  
  return password;
}

//keeps asking until user types in a value [8,128] for password Length
function getPasswordLength(){

  var length;
  while(!(parseInt(length) >= 8) || !(parseInt(length) <= 128)){

    length = prompt("How long of a password do you wish to create? (8 - 128)");
    if(parseInt(length) < 8 || parseInt(length) > 128){
      if(parseInt(length) < 8){
        alert("The value you entered is too small for password generation. Invalid Input")
      }else{
        alert("The value you entered is too big for password generation. Invalid Input")
      }
  
    }else if(parseInt(length) >=8 && parseInt(length) <=128){
      //alert("Good Input DOG!!")
    }else{
      alert("Invalid input!!")
    }
  }
  return length;

}
//asks user if to include certain criteria in password
//we use same method for uppercase/lowercase/special/numeric values
function BooleanValue(criteria){

  var input = confirm("Do you want the password to include " + criteria +" characters?")
  if(input){
    return true;
  }else{
    return false;
  }

}

//passwordObject including all the password criterias and length will be passed to function to further process it
function passwordGeneration(passwordObject){

  //console.log(passwordObject);
  //we have the object which contains the reqd info we need for password generation
  var criteria = [];
  //we will findout to which criterai user said true and will add to the list
  //and then we will randomly pick a criteria and again randomly pick a char from that criteria
  if(passwordObject.includeLowerCase){
    criteria.push("lower")
  }if(passwordObject.includeUpperCase){
    criteria.push("upper")
  }if(passwordObject.includeNumeric){
    criteria.push("numeric")
  }if(passwordObject.includeSpecial){
    criteria.push("special")
  }

  randomNumber(criteria.length)

  var passwordString = "";
  for(var v=0;v<passwordObject.count;v++){
    //passwordObject.count is length of password and 
    //thats the number of times the loop will run
    //console.log(v+1)
    var t = randomNumber(criteria.length)

    switch(criteria[t]){
      case("lower"):
        passwordString += lowerCaseCharacters[randomNumber(lowerCaseCharacters.length)]
        break;
      case("upper"):
        passwordString += upperCaseCharacters[randomNumber(upperCaseCharacters.length)]
        break;
      case("numeric"):
        passwordString += numeric[randomNumber(numeric.length)]
        break;
      case("special"):
        passwordString += specialCharacters[randomNumber(specialCharacters.length)]
        break;
    }    
  }
  
  return passwordString;


  // var passwordText = document.querySelector("#password");
  // passwordText.value = passportString


}

function randomNumber(high){
  
  var r = Math.floor(Math.random() * high)
  return r;

}

generateBtn.addEventListener("click", writePassword);
