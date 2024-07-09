function fact(n){
    if (n <0) return -1;
    result=1;
    for(var i =1; i<=n ; i++){
        result*=i;
    }
    return result;
}
fact(5)


