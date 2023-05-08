// interface: 
interface Person {
    name: string;
    age: number;
}

// type: 새로운 타입 값을 생성하는 것이 아니라 별칭을 부여하는 것
// extends 안됨
type Human = {
    name: string;
    age: number;
}

let yeom1: Person = {    // Person에 hover하면 "interface Person" 표시
    name: '겨레',
    age: 30
};

let yeom2: Human = {    // Human에 hover하면 type 내부 형식도 표시해준다. interface와의 차이점
    name: '겨레',
    age: 30
};

type MyString = string;
const str: MyString = 'I love you';

type Todo = { id: string, title: string, done: boolean };
function getTodo(todo: Todo) {
    console.log(todo);
}