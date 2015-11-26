function xor(a,b){
  if(a && b){
    return false
  }else if(a && !b){
    return true
  }else if(b && !a){
    return true
  }else{
    return false
  }
}
