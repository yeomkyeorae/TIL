// TS 문자열 선언
let str: string = "hello";

// TS 숫자 선언
let num: number = 100;

// TS 문자열<숫자> 선언
let arr: Array<number> = [10, 20, 30];

// TS 문자열<문자> 선언
let strArr: Array<string> = ["lion", "tiger"];

// TS 문자열<숫자> - 다른 방식
let items: number[] = [10, 20, 30];

// TS 튜블(배열의 index 별로 타입을 지정)
let address: [string, number] = ["sejong", 165];

// TS 객체
let obj: object = {};
let person: object = {
  name: "yeom",
  age: 21
};
// TS 객체 내부 property 타입 지정
let man: { name: string; age: number } = {
  name: "han",
  age: 31
};

// TS boolean
let isAvailable: boolean = true;
