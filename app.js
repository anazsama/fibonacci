'use strict';

const memo = new Map;
memo.set(0,0);
console.log('連想配列' + 0 +'の中身：' + memo.get(0));
memo.set(1,1);
console.log('連想配列' + 1 +'の中身：' + memo.get(1));

const length = 40;
for(let i=0; i<=length; i++){
    console.log('フィボナッチ数列でn=' + i +'の場合の結果：' + fib(i));
}

function fib(n){
    if(n === 0 || n === 1){
        return n;
    }else if(n >= 2){
        let result = memo.get(n-1) + memo.get(n-2);
        memo.set(n,result);
        console.log('連想配列' + n +'の中身：' + memo.get(n));
        return result;
    }else{
        return null;
    }
}