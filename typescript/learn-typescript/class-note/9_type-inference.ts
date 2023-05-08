// 타입 추론 기본 1
// 기본 변수
let a = 'abc';

function getB(b = 10) {
    let c = 'hi';
    return b + c;
}

// 타입 추론 기본 2
// interface 1개
interface Dropdown<T> {
    value: T;
    title: string;
}
const shoppingItem: Dropdown<number> = {
    value: 10000,
    title: 'shoe'
}

// 타입 추론 기본 3
// interface 2개
interface Dropdown2<T> {
    value: T;
    title: string;
}
interface DetailedDropdown<K> extends Dropdown2<K> {
    tag: K;
    desc: string;    
}
const detailed: DetailedDropdown<string> = {
    value: '10000',
    title: 'shoe',
    tag: '10000',
    desc: 'description'
}

// Best Common Type: 가장 근접한 타입을 추론
// string | number | boolean
const array = [1, 2, true, 'str'];