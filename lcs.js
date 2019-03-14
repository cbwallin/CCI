console.log("hello world");

// Input: two strings, s1 and s2
// Output: longest common sub sequence.
// Can skip characters but order must stay the same
// "ABAZDC", "BACBAD" => "ABAD"
// "aaaa", "aa" => "aa"
// "", "..." => ""

function longestCommonSubsequence(s1, s2) {
  // if (memo == null) {
  //   memo = new Array(s1.length).map(row => new Array(s1.length));
  // } else if ()
  let longest = "";
  if (s1 == "" || s2 == "") {
    return "";
  }
  for (let i = 0; i < s1.length; i++) {
    let testStr = ""
    matchedIndex = s2.indexOf(s1[i]);
    if (matchedIndex != -1) {
      testStr = s1[i] + longestCommonSubsequence(s1.slice(1), s2.slice(matchedIndex + 1));
      longest = testStr.length > longest.length ? testStr : longest;
    }
  }

  return longest;
}

console.log(longestCommonSubsequence("a", "aa"));
console.log(longestCommonSubsequence("aa", "a"));
console.log(longestCommonSubsequence("ABAZDC", "BACBAD"));
console.log(longestCommonSubsequence("AGGTAB", "GXTXAYB"));