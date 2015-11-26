function isPrimeNumber(a){
  var m = 2;
  if(a==2){
    return true;
  }else if(a < 2){
    return false;
  }
  while(m < a){
    if(a % m == 0){
      return false;
    }

    m = m + 1;
  }return true;
}
