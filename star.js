// pattern 1
function star(row){
    for(var i=1;i<=row;i++){
        pattern="";
        for(j=1;j<=i;j++){
            pattern+="*";
        }
        console.log(pattern);
    }
    
}
    star(5)