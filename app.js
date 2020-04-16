'use strict';

const length = 42;
for(let i=0; i<=length; i++){
    console.log('フィボナッチ数列でn=' + i +'の場合の結果：' + fib(i));
}

function fib(n){
    if(n === 0 || n === 1){
        return n;
    }else if(n >= 2){
        return fib(n-1) + fib(n-2);
    }else{
        return null;
    }

}