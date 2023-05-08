// Union type: 한 가지 이상의 type을 쓰고 싶을 때
let speed: string | number | boolean;

function logMessage(value: string | number) {
    if(typeof value === 'string') { // type guard
        value.toString();   // 자동으로 type을 추론해 메소드를 추천받을 수 있다
    } else if(typeof value === 'number') {
        value.toLocaleString();
    } else {
        throw new TypeError('value must be string or number');
    }
}
logMessage('hello');
logMessage(100);

interface Zoo {
    name: string;
    location: string;
    price: number;
}

interface Animal {
    name: string;
    count: number;
}

function askZookeeper(question: Zoo | Animal) {
    // question. 하면 Zoo와 Animal의 공통 속성인 name만 제공한다
}

// Intersection type
let capt: string & number & boolean;    // never
function askZookeeper2(question: Zoo & Animal) {
    // question. 하면 Zoo와 Animal의 모든 속성들을 제공한다
}

// Union: Zoo나 Animal에 해당하는 인자를 줘야한다
askZookeeper({ name: '어린이대공원', location: '서울시 광진구', price: 10000 });
askZookeeper({ name: 'tiger', count: 3});

// Intersection: Zoo나 Animal에 해당하는 인자를 줘야한다(합집합 같은 개념)
askZookeeper2({ name: '어린이대공원', location: '서울시 광진구', price: 10000, count: 10000 });