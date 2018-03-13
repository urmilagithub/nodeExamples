function palindrome(str) {
	console.log("here");
	str = str.toLowerCase();
    var len = str.length;
    for ( var i = 0; i < Math.floor(len/2); i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

var result = palindrome("nitin");
if(result == true){	
	console.log("Yes, Given string is Palindrom");
}else
	console.log("No, Given string is not Palindrom");


console.log("Out here");