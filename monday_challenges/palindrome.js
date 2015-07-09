// todays chalange: write a single function named palindrome that accepts one string and  
// and returns true if the string is a Palindrome and false if the string is not a Palindrome.


// my attempt

var stringPal;

for (i=stringPal.length; i>0; i--){
  var n=0;
  var newString =stringPal[i-1];
  n++;
}


//answer
function palindrome(str){
  var reverseString = str.split('').reverse().join('').toLowerCase();

  if (str.toLowerCase()== reverseString) {
    return true;
  }else{
    return false;
  }
}

palindrome('Glenn');
palindrome('aNna');
