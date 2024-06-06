function isPalindrome(str){
    str = str.toLowerCase().replaceAll(' ', ''); 
    let i = 0;
    let j = str.length -1;

    while(i < j) {
        if(str[i] !== str[j]) {
            return false;
        }
        i++;
        j--;
    }

    return true; 
}

function arrayMaxMin(arr){
    let minValor = 0;
    let maxValor = 0;

    for(let i of arr) {
        if(minValor === 0 && maxValor === 0) {
            minValor = i;
            maxValor = i;
        }
        if(i < minValor) {
            minValor = i;
        } else if(i > maxValor) {
            maxValor = i;
        }
    }

   return [minValor, maxValor];
}