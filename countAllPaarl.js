function countAllPaarl(regPlate){
  var plateNum = regPlate.split(',');
  var result = 0;
  for(var n = 0; n < plateNum.length; n++){
    var allPaarRegNum = plateNum[n].trim();
    if(allPaarRegNum.startsWith('CJ')){
      result++;
    }
  }
return result;
}
(countAllPaarl('CJ 347 374, CJ 393 029, CJ 938 734, CJ 738 934'));
