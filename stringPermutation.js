// console.log("hello world");


// Solution #1
function isPerm(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  } else {
    let arr1 = s1.split("");
    let arr2 = s2.split("");

    arr1.sort();
    arr2.sort();
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
  }
  return true;
}

console.log(isPerm("CATA", "TCA")); // False
console.log(isPerm("CAT", "TCA")); // True
console.log(isPerm("CAaT", "aTCA")); //
console.log(isPerm("CAT", "TCAC")); //