// function isPalindrome(str) {
//   integrity_check = converts(str).split("").reverse().join("");
//   if (processed_string === integrity_check) return true;
//   else return false;

//   function converts(assignStr) {
//     const preprocessing_regex = /[^a-zA-Z0-9]/g;
//     processed_string = assignStr.toLowerCase().replace(preprocessing_regex, "");
//     return processed_string;
//   }
// }

// console.log(isPalindrome("A man, a plan, anal: Panama"));


//anthor solve 

// function isPalindrome(str) {
  
     


  
//        let strOne  =   converts(str).split("").reverse().join("");
//        let  strTwo = converts(str)
//          return strOne === strTwo
    



//     function converts(assignStr) {
//       const preprocessing_regex = /[^a-zA-Z0-9]/g;
//       processed_string = assignStr.toLowerCase().replace(preprocessing_regex, "");
//       return processed_string;
//     }
//   }
  
//   console.log(isPalindrome("mam , ma "));
const regex = /[\W_]/g
var isPalindrome = function (s) {
  const filtered = s.replace(regex, '').toLowerCase()
  let start = 0
  let end = filtered.length - 1
  while (start < end) {
    if (filtered[start] !== filtered[end]) return false
    start++
    end--
  }
  return true
};