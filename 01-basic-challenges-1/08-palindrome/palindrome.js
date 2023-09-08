function isPalindrome(str) {
  const fixedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reverseStr = fixedStr.split("").reverse().join("");

  return fixedStr === reverseStr;
}

// function isPalindrome(str) {}

// function removeAlphaNumeric(str) {}

// function isAlphaNumeric(char) {}

// function reverseStr(str) {}

module.exports = isPalindrome;
