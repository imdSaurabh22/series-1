function star(row){
    for (var i=1;i<=row;i++){
        pattern="";
        for(var j =1; j<=i; j++){
            pattern+="*";
        }
        console.log(pattern);
    }
        for (var k=1;k<=row;k++){
            pattern="";
            for(var l=row; l>=k; l--){
                pattern+="*";
        }
            console.log(pattern);
    }
}
    star(5)