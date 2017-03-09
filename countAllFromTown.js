function isFromCapeTown(fromCaptwn){
  var numbersPlats = fromCaptwn.split(',');
  var countCaptwnRegNum = 0;
  for(var x = 0; x < numbersPlats.length; x++){
    var numPlate = numbersPlats[x].trim();
    if(numPlate.startsWith('CA')){
      countCaptwnRegNum++;
    }
  }
return countCaptwnRegNum;
}
(isFromCapeTown('CA, GP, CP, CA, CA, CY'));
