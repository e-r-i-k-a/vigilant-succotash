//You have two integer arrays, a and b, and an integer target value v.  Determine whether there is a pair of numbers, where one number is taken from a and the other from b, that can be added together to get a sum of v.  Return true if such a pair exists, otherwise return false.

function sumOfTwo (arr1, arr2, val) {
  let obj = {};
  let shorterArr = arr1.length < arr2.length ? arr1 : arr2;
  let longerArr = arr1 === shorterArr ? arr2 : arr1;
  //optimally loop through the shorter array
  for (let i=0; i<shorterArr.length; i++)  {
    obj[val - shorterArr[i]] = true;
    //build an object of needed values from the other longer array
  }
  for (let j=0; j<longerArr.length; j++) {
    if (obj[longerArr[j]]) {
      return true;
    }
  }
  return false;
}

// sumOfTwo([1,2], [3,4,5], 3) //false
// sumOfTwo([1,2,3,4,5], [2,1], 6) //true
