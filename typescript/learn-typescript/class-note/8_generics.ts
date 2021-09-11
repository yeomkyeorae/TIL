// 1.
// <T>: 인자를 넘길 때 호출하는 시점에서야 타입을 정한다 
function logText<T>(text: T): T {
    console.log(text);
    return text;
}
logText<string>('10');

// 2.
// generic을 사용하면 타입별로 아래와 같이 동일한 함수를 일일이 만들 필요가 없다
function logString(text: string) {
    console.log(text);
    return text;
}
function logNumber(num: number) {
    console.log(num);
    return num;
}

// 3.
// Union type을 사용하는 것에도 한계가 있을 수 있다
// string, number의 교집합에 해당하는 타입. 그 타입에 해당하는 메소드만 힌트로 제공
function logStr(text: string | number) {
    console.log(text);
    return text;
}

// 4. 
// generic은 타입 추론에 있어서 강점을 가진다
function printText<T>(text: T): T {
    console.log(text);
    return text;
}

const str = printText<string>('hahaha');
str.split('');
const bool = printText<boolean>(true);

// 5.
// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown<T> {
    value: T;
    selected: boolean;
}
const obj: Dropdown<string> = { value: 'haha', selected: false };

// 6.
// 제네릭 타입 제한 1: 배열 힌트
function logTextLength<T>(text: T[]): T[] {
    console.log(text.length);
    text.forEach(text => {
        console.log(text);
    });
    return text;
}
logTextLength<string>(['hi', 'hello']);

// 제네릭 타입 제한 2: 정의된 타입 이용 extends
interface LengthType {
    length: number;
}
function logTextLen<T extends LengthType>(text: T): T {
    console.log(text.length);
    return text;
}
logTextLen('abc');
// logTextLen(100); // 숫자에 length property가 없으므로 에러
logTextLen({ length: 100 });

// 제네릭 타입 제한 3: keyof - interface에서 정의된 key에 대한 값만 가능?
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>('abc');
getShoppingItemOption('price');