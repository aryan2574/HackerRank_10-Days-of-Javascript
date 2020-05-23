/*
 * Create the function factorial here
 */
    function factorial(n){
       if(n<=0){
           return n
       }
       else{
           var a = 1;
           while(n>0){
               a = a*n;
               n--;
           }
       }
       return a;
    }
