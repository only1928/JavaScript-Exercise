// -> 주석
/**
 *  -> 멀티라인 주석 
 */

// 단축키 ctrl + /

// let, const
// let  : 값이 변할 수 있는 변수 지정
// const : 한번 지정하면 변할 수 없는 상수 지정

// print = 파이썬, console.log = 자스

// 출력
console.log('출력');

// let
let a = 10;
a = 20;
console.log(a);

// const 
const b = 20;
// b = 20;
// console.log(b);

a = 30;
console.log(a);

console.log(b);

globalThis.b = 10;
console.log(globalThis.b);


{
    console.log(a);
}


// 큰집 (속 넓음)
const d = 10;
{
    // 작은집 (속 쌉좁음)
console.log(d);    

    {
        // 더 작은집
        console.log(d);
    }
}

