// pattern 2
function star(row) {
    for (var i=1;i<=row;i++){
        pattern="";
        for (var j=row;j>=i;j--){
            pattern+="*";
        }
        console.log(pattern);
    }
    
}
    star(4);