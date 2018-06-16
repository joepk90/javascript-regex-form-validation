// Regex Examples

let regex;

// Literal Characters
regex = /hello/;
regex = /hello/i; // the "i" means case insensitive

// Metacharacter Symbols
regex = /^h/i; // Must start with
regex = /d$/i; // Must end with
regex = /^hello$/i; // Must start and end with - h/o
regex = /h.llo/i; // Matches any ONE character
regex = /h*llo/i; // Matches any character 0 or more times
regex = /gre?a?y/i ;// Optional characters
regex = /gre?a?y\?/i; // Escape characters (stops the question mark from defining the regex and includes it as a literal - as part of the string)


// Brackets [] - Character Sets
regex = /gr[ae]y/i; // Must be an 'a' or an 'e'
regex = /[GF]ray/; // Must be a 'G' or an 'F'
regex = /[^GF]ray/; // Match anything except a 'G' or 'F' (This does not force it to start with a 'G' or 'F'. [^] means !==)
regex = /[A-Z]ray/; // Match any uppercase letter
regex = /[a-z]ray/; // Match any lowercase letter
regex = /[A-Za-z]ray/; // Match any alphabetic letter
regex = /[0-9]ray/; // Match any number
// const string = '1ray'; // String to match

// Braces {} - Quantifiers
regex = /Hel{2}o/i; // Must occur exacelt {x} amount of time (must match 2 l's - l{2})
regex = /Hel{2,4}o/i; //Must occur between range {x, x} (must match 2 to 4 l's - l{2, 4})
regex = /Hel{2,}o/i; //Must occur atleast {x} amount of times(must match 2+ l's - l{2,})
// const string = 'Helllo'; // String to match


// Parantheses () - Grouping
regex = /([0-9]x){3}/; // Must match 3 times (0 to 9 and x, three times)
regex = /^([0-9]x){3}$/; // Must match 3 times (0 to 9 and x, three times), without anything before or after
// const string = '3x3x3x'; // String to match

// Shorthand Character Classes
regex = /\w/; // Matches one Word Character - aphanumerix (any letter or any number) or _
regex = /\w+/; // Matches one or more Word Character (+ equals 1 or more)
regex = /\W/; // Matched one Non-Word Character
regex = /\W+/; // Matches one or more Non-Word Character (+ equals 1 or more)
regex = /\d/; // Matches one Numeric Character
regex = /\d+/; // Matches one or more Numeric Character (+ equals 1 or more)
regex = /\D/; // Matches one Non-Numeric Character
regex = /\D+/; // Matches one or more Non-Numeric Character (+ equals 1 or more)
regex = /\s/; // Matches whitespace Character (tabs, spaces)
regex = /\S/; // Matches Non-Whitespace Character (tabs, spaces)
regex = /Hell\b/i; // Word boundry (finds the word, not the characters within a word)
// const string = 'Hello, welcome to Hell'; // String to match

// Assertions (conditionals)
regex = /x(?=y)/; // Matches 'x' only if it is followed by 'y'
regex = /x(?!y)/; // Matches 'x' only if it is not followed by 'y'
// const string = 'xy'; // String to match


// String to Match
const string = 'xy';

// Log Results
const result = regex.exec(string);
console.log(result);

function reTest(regex, string) {
  if(regex.test(string)) {
    console.log(`${string} matches ${regex.source}`);
  } else {
    console.log(console.log(`${string} does not match ${regex.source}`));
  }
}


reTest(regex, string);
