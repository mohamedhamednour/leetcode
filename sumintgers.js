var sumZero = function(n) {
    let result = []
    let  sum = 0
    for(let i = 1 ; i < n  ; i++){
        result.push(i)
        sum=  sum + i
    }
   result.push(-sum)
   return result

    
    };

    console.log(sumZero(1))