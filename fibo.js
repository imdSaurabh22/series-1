function genfibo(n){
    if (n<=0) return [0];
    if (n==1) return [0,1];
     var fibo=[0,1];
    for (var i=2; i<=n; i++){
        var fibonext = fibo[i-1]+fibo[i-2];
            fibo.push(fibonext);
    }
    return fibo;
}
    genfibo(5);

