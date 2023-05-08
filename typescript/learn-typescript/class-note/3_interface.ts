// 1. interface 변수 활용
interface User {
    age: number;
    name: string;
}

const yeom: User = {
    age: 30, 
    name: 'kyeorae'
};


// 2. interface 함수 인자 활용
function getUser(user: User) {
    console.log(user);
}
getUser({age: 10, name: 'hayoon'});

const cat = { name: 'nabi', age: 7 };
getUser(cat);


// 3. interface 함수 구조 활용
interface SumFunc {
    (a: number, b: number): number;
}

let sum: SumFunc;
sum = function(a: number, b: number): number {
    return a + b;
}


// 4. interface indexing
interface StringArray {
    [index: number]: string;
}

let arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 10; // 오류 발생


// 5. interface dictionary
interface StringRegexDictionary {
    [key: string]: RegExp
}

const obj: StringRegexDictionary = {
    cssFile: /\.css$/,
    jsFile: /\.js$/
};

// obj['soundFile'] = 'a'; // 오류 발생

Object.keys(obj).forEach(value => {
    console.log(value); // value를 hover하면 type을 알 수 있다
})


// 6. interface 확장(extends 키워드 사용)
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    skill: string;
}

const junior: Developer = {
    name: 'yeom',
    age: 29,
    skill: 'wow'
}