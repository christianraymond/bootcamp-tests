function fromWhere(carRegNum){
  if (carRegNum.startsWith('CY')){
    return 'Bellville';
  }

  if(carRegNum.startsWith('CJ')){
    return 'Paarl';
    }

  if(carRegNum.startsWith('CA')){
    return 'from Cape Town';
    }

else {
  return 'Some other place!';
  }

}
fromWhere('CA 8274', 'CY 09340');
