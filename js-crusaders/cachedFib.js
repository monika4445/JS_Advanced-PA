function fib(index){
    if((!index) || !Number.isInteger(index) || (index < 0)) return 0;
   
    if(index <= 1) {
     fib.cache[index] = index;
    }

    fib.cache = fib.cache || [];

     if(!fib.cache[index]){
        fib.cache[index] = fib(index-1) + fib(index-2);;
        }

        return fib.cache[index];

}


console.log(fib(8));

