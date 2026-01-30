const log = console.log;

// 함수 형태 2가지
// 파이썬 : def, lambda
// 자스 : function, arrow function(lambda)

// 1. function
function addFunc(x, y){
    return x + y;
}

log(addFunc(1, 2));

// 2. arrow
const addFunc2 = (x, y) => {
    return x + y;
}

const addFunc3 = (x, y) => x + y;

const arr1 = [1, 2, 3, 4, 5];
// arr1.forEach((x, y) => {

// });

arr1.forEach(function(x, y){
    arr1[y] = x * 2;
});

arr1.forEach(function(x, y){
    x = x * 2;
});

arr1.forEach(x => {
    log(x);
});

log(arr1);

log(arr1.map(x => x* 2));
