// pyramid
function star(row) {
    for(var i=1 ; i<=row;i++){
        pattern="";
        
        for(var j=row; j>=i ; j--){
            pattern +=" ";
              }
            for(var k=1; k<= i; k++){
                pattern +=" *";
          }
         console.log(pattern);
    }
   
    
}
    star(10);