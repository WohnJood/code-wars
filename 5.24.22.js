// Fill the array
function arr(num){
  let newArr = [];
  for (let i=0; i<num; i++){
    newArr.push(i)
  }
  return newArr;
}

// Removing Elements
function removeEveryOther(arr){
    return arr.filter((_,idx) => idx % 2 === 0);
  }

// You only need one - Beginner
function check(a, x) {
    for (var i = 0; i < a.length; i++) {
          if (a[i] === x) {
              return true;
          }
      }
      return false;
  }