// Check for factor
function checkForFactor (base, factor) {
    return base % factor === 0;
  }

  //Convert a string to an array
  function stringToArray(string){
    return string.split(" ")
  
  }

  // remove string spaces
  function noSpace(x){
    return x.split(" ").reduce((a, c) => a + c)
  }

  //I love you, a little , a lot, passionately ... not at all
  function howMuchILoveYou(nbPetals) {
    const results = ['I love you','a little','a lot','passionately','madly','not at all']
     for (let i = 0; i <= nbPetals-1; i += 1){
       if ( i === nbPetals-1) {
         return results[i%6]
         }
       }
}

//can we diviide it?
function isDivideBy(number, a, b) {
    return number % a === 0 && number % b === 0// good luck
  }