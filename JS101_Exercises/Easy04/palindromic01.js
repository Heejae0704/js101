function isPalindromicNumber(num) {
  console.log(_isPalindromicNumber(num));
}

function _isPalindromicNumber(num) {
  return _isPalindrome(String(num))
}

function _isRealPalindrome(str) {
  const alphanumerics = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const AlNuStrArr = str.toLowerCase().split("").filter(el => alphanumerics.includes(el));
  return _isPalindrome(AlNuStrArr.join(""));
}

function _isPalindrome(str) {
  if (str.length === 0 || str.length === 1) return true;
  const midPoint = Math.floor(str.length / 2);
  for (let idx = 0; idx < midPoint; idx++) {
    if (str[idx] !== str[str.length - 1 - idx]) {
      return false;
    }
  }
  return true;
}

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);
isPalindromicNumber(00101);