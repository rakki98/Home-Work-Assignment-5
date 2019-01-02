/*
*Libraray for various function task
*
*/

//Container for all the library functions
var lib={}
//Function for counting the number of perfect square numbers with in a given range
lib.countSquares=function(a,b){
    if(a>0 && b>0)
    return Math.abs(Math.sqrt(b))-Math.abs(Math.sqrt(a)) + 1;
    else
    return false
}

//Function for verifying whether the password meets the following criteria
//1.Upper Case Letter
//2.Lower Case letter
//3.Special Character
//To check whether password contains a upper case letter
lib.uppercase=function(password){
    var regex = /^(?=.*[A-Z]).+$/;

    if( regex.test(password) ) {
        return true;
    }
    else
    {return false;}
   
};
//To check whether password contains a lower case letter

lib.lowercase=function(password){
    var regex = /^(?=.*[a-z]).+$/;

    if( regex.test(password) ) {
        return true;
    }
    else
    {return false;}
   
   
};
//To check whether password contains a special character

lib.specialCharacters=function(password){
    var regex = /^(?=.*[0-9_\W]).+$/;

    if( regex.test(password) ) {
        return true;
    }
    else
    {return false;}
   
};
//To validate the password
lib.validatePassword=function(password){
  var upperCase= lib.uppercase(password);
  var lowerCase=lib.lowercase(password);
  var specialCharacters=lib.specialCharacters(password);
  
  if(upperCase && lowerCase  && specialCharacters)
  {
      return true;
  }
  else
  {return false;
    }

}; 


//Export the library
module.exports=lib;