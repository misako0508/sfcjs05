function isEvenNumber(n){
    return n % 2 == 0;
}

function toEvenNumber(number){
 if(isEvenNumber(number)){
     return number;
 }
 return number + 1
}

function toOddNumber(number){
    if(isEvenNumber(number)){
        return number + 1;
    }
     return number;
}

function sum(number){
    let result = 0;
    let i = 1;
    while(i <= number){
        result = result + i;
        i = i + 1;
    }
    return result;
}

function sumN(number){
    if(number >= 1){
        return sum(number);
    }
    let result = 0;
    let i = number;
    while(i <=1){
        result = result + i
        i = i + 1;
    }
    return result
}