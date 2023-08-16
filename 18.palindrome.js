const isPalindrome = function(str){

    if(str.length == 1){
        return true
    }

    if (str.length < 1){
        return false;
    }

    if(str.length !== str.trim().length || str !== str.toLowerCase()){
        return false;
    }

    if(str === str.split("").reverse().join("")){
        return true;
    } else {
        return false;
    }

}

let result = isPalindrome("abacv")
console.log(result)