function bleepVowels(str) {
    // str.replace() is used to replace substrings in the str variable.
    // The regular expression /[aeiou]/gi matches all occurrences of vowels (a, e, i, o, u) in a case-insensitive manner (i flag), and the g flag makes it global, meaning it will replace all occurrences, not just the first one.
    // It replaces all occurrences of vowels with *, effectively "bleeping" them.
    return str.replace(/[aeiou]/gi, '*');
}

// Example usage:
console.log(bleepVowels("skateboard")); // 'sk*t*b**rd'
console.log(bleepVowels("slipper")); // 'sl*pp*r'
console.log(bleepVowels("range")); // 'r*ng*'
console.log(bleepVowels("brisk morning")); // 'br*sk m*rn*ng'
