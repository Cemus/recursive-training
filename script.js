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
    if (n == 0) return [0];
    if (n == 1) return [0, 1];
    const array = fibsRec(n - 1);
    return [...array, array[n-1] + array[n-2]];
}

function SumOfMultiplesOfThreeOrFive(n){
    let number;
    ((n % 3 == 0) || (n % 5 == 0)) ? number = n : number = 0;
    if (n == 0){
        return 0;
    }
    else{
        return number + SumOfMultiplesOfThreeOrFive(n-1);
    }

}

function mergeSort2(array){
    console.log("splitting", array);
    if (array.length > 1){
        const middle = Math.ceil(array.length/2);
        const firstHalf = array.splice(0, middle);
        const secondHalf = array.splice(-middle);  

        mergeSort2(firstHalf)
        mergeSort2(secondHalf)

        console.log(firstHalf);
        let i, j, k = 0;
        while (i < firstHalf.length && j < secondHalf.length){
            if (firstHalf[i] <= secondHalf[j]) {
                array[k] = firstHalf[i]
                i++;
            }
            else{
                array[k] = secondHalf[j]
                j++;               
            }
            k++;
        }
        while (i < firstHalf.length){
            array[k] = firstHalf[i];
            console.log(array);
            i++;
            k++;
        }
        while (j < secondHalf.length){
            array[k] = secondHalf[j];
            console.log(array);
            j++;         
            k++;   
        }
        console.log("merging", array);

    }

}



/* function mergeSort(array){
        if (array.length > 1){
        const middle = Math.ceil(array.length/2);
        const firstHalf = array.splice(0, middle);
        const secondHalf = array.splice(-middle);  
        console.log(firstHalf, secondHalf)

        if (firstHalf.length > 1){
            mergeSort(firstHalf);
        }
        else{
            const a = firstHalf[0];
            const b = secondHalf[0];
            if (a > b){
                firstHalf[0] = b;
                secondHalf[0] = a;
            }
            array.push(firstHalf,secondHalf)
            console.log(array.flat())
        }

        if (secondHalf.length > 1){
            mergeSort(secondHalf);
        }
    }
} */

function mergeSort(array){
    if (array.length <= 1){
        return array;
    }
    let middle = Math.floor(array.length / 2);

    let firstHalf = mergeSort(array.slice(0, middle));
    let secondHalf = mergeSort(array.slice(middle));
    return merge(firstHalf, secondHalf);
}

function merge(firstHalf, secondHalf) {
  let result = [];
  while (firstHalf.length && secondHalf.length) {

    if (firstHalf[0] < secondHalf[0]) {
        result.push(firstHalf.shift());
    } 
    else {
        result.push(secondHalf.shift());
    }
  }
  
  return [...result, ...firstHalf, ...secondHalf];
}    

console.log(mergeSort([9,4,6,5,7,6,2]));