function distance(a,b,c,d){
  if(a == c && b == d){
    return 0 ;
  }else{
　　var l, m, n;

　　l = c - a;
　　m = d - b;
　　n = Math.sqrt(Math.pow(l,2) + Math.pow(m,2));

　　return n;
  }
}
