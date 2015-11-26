function toOrdinalNumber(a){
  if(a == 1){
    return "1st" ;
  }else if(a == 2){
    return "2nd" ;
  }else if(a == 3){
    return "3rd" ;
  }else if(3 < a && a < 21){
    return a + "th" ;
  }else if(a > 20 && (a % 10 == 1)){
    return a + "st" ;
  }else if(a > 20 && (a-2) % 10 == 0){
    return a + "nd" ;
  }else if(a > 20 && (a-3) % 10 == 0){
    return a + "rd" ;
  }else{
    return a + "th" ;
  }
}
