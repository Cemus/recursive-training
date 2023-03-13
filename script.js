// (f0 = 0, F1 = 1) et (Fn = Fn-1 + Fn-2 pour n >= 2)

function fibs(n){
    array = [];
    function fibo(o){
        return o < 2 ? o : fibo(o-1) + fibo(o-2);
    }
    for (i = 0; i < n+1; i++){
        if (i <= 0){
            array.push(0);
        }
        else
        i < 2 ? array.push(1) : array.push(fibo(i-1) + fibo(i-2));
    }
    return array;
}

function fibsRec(n) {
    if (n == 0) return [0]
    if (n == 1) return [0, 1]
    const array = fibsRec(n - 1)
    return [...array, array[n-1] + array[n-2]]
  }
  
  console.log(fibsRec(15))