function isFromBellville(regNumber){
  if(regNumber.startsWith('CY')){
    return true;
  }
  else {
    return false
  }
};
isFromBellville('CY');
isFromBellville('CA');
