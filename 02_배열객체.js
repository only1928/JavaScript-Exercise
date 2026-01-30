const log = console.log;

const arr1 = [1, 2, 3];
arr1.push(4);

log(arr1);

//arr1 = [];
//log(arr1);


let arr2 = [1, 2, 3];

arr2 = [6, 7];

arr2.push(8, 9);

log(arr2);

let arr3 = [2,3,4,5];
log(arr3);
arr3 = [3,4,5,6];
log(arr3);
arr3.push(12,32,13,41);
log(arr3);

// 객체
const obj = {};

obj.a = 'test_a';
obj['b'] = 'tset_b';
log(obj);

obj[1] = 'test_c';
log(obj)