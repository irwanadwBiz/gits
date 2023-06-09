function isPalindrome(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

function findHighestPalindrome(str, k) {
  if (isPalindrome(str)) {
    return str;
  }

  if (k === 0 || str.length === 0) {
    return -1;
  }

  const firstChar = str[0];
  const lastChar = str[str.length - 1];

  if (firstChar === lastChar) {
    const innerPalindrome = findHighestPalindrome(
      str.slice(1, str.length - 1),
      k
    );
    return innerPalindrome !== -1
      ? firstChar + innerPalindrome + lastChar
      : -1;
  } else {
    const palindrome1 = findHighestPalindrome(
      str.slice(0, str.length - 1),
      k - 1
    );
    const palindrome2 = findHighestPalindrome(str.slice(1), k - 1);

    if (palindrome1 !== -1 && palindrome2 !== -1) {
      return firstChar + palindrome1 + firstChar > lastChar + palindrome2 + lastChar
        ? firstChar + palindrome1 + firstChar
        : lastChar + palindrome2 + lastChar;
    } else if (palindrome1 !== -1) {
      return firstChar + palindrome1 + firstChar;
    } else if (palindrome2 !== -1) {
      return lastChar + palindrome2 + lastChar;
    } else {
      return -1;
    }
  }
}


console.log(findHighestPalindrome('3313', 1))
console.log(findHighestPalindrome('4781',1))
console.log(findHighestPalindrome('3873',1))




