const log = console.log;

// 조건문 if
/**
 * if(조건){
 *    범위 지정
 *    어떤걸 수행할 지 
 * }
 */

let a  = 10;

if(a <= 10){
    log('10보다 작아');
}else{
    log('10보다  커');
}

// 반복문  for, while=
// 형태 1
// for(초기화; 범위 조건; 값 변화){
//      수행 문
// }
for(let i = 0; i <= 10; i++){
    log(`i의 값 : ${i}`);
}

// 형태 2
// forEach
const arr1 = [1, 2, 3, 4, 5];
arr1.forEach((v, i) => {
    log(`value : ${v}, index : ${i}`);
})

// 형태 3 
for(const 값 of arr1){
    log(`형태3 : value : ${값}`);
}

for(const v of arr1){
    log(`형태3 : value : ${v}`);
}


// while
let cnt = 20;
while(cnt <= 10){
    log(`cnt : ${cnt}`);
    cnt++;
}

//  do while
let cnt2 = 20;
do{
    log(`cnt2 : ${cnt2}`);
    cnt2++;
}while(cnt2 <= 10)