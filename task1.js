function isPalindrome(s) {
    const cleanedString = s.toLowerCase();
    let left = 0;
    let right = cleanedString.length - 1;

    while (left < right) {
        if (cleanedString[left] !== cleanedString[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome("level"));
console.log(isPalindrome("hello"));
