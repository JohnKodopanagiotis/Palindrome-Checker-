function palindrome(str) {
    var reg = /[\W_]/g;
    var strng = str.toLowerCase().replace(reg, "");
    var gnrts = strng.split("").reverse().join("");
    if (strng===gnrts){
    return true;
  } else {
    return false;
  }
  }
  palindrome("eye");