//The string s contains dashes that split it into groups of characters.  You are given an integer k that represents the number of characters in groups that your output should have.  Your goal is to return a new string that breaks s into groups with a length of k by placing dashes at the correct intervals.  If necessary, the first group of characters can be shorter than k.  It is guaranteed that there are no consecutive dashes in s.

// stringReformatting('2-4a0r7-4k', 4) //24a0-r74k
// stringReformatting('2-4a0r7-4k', 3) //24-a0r-74k

function stringReformatting(str, val) {
  let newStr = str.replace(/[-]/g,'');
  //remove all dashes from str
  for (let i=newStr.length-val; i>0; i-=val) {
    newStr = newStr.slice(0, i) + '-' + newStr.slice(i)
  }
  return newStr;
}
