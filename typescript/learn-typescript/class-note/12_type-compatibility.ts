// 1. interface 타입 호환
interface Animal {
    name: string;
    skill: string;
}

interface Ant {
    name: string;
}

let animal: Animal;
let ant: Ant;

// 아래처럼 할당하면 에러가 난다 => 오른쪽(ant)이 왼쪽(animal)에 포함되는 관계를 가지므로. 왼쪽(animal)이 더 큰 구조를 가지므로
// animal = ant;

// 아래는 에러가 나지 않는다
ant = animal;

class Ant2 {
    name: string;
    // skill: string;
}

// 2. interface와 class 사이에서도 마찬가지로 동작한다.
// 에러
// animal = new Ant2();
ant = new Ant2();

// 3. 함수
let add = function(a: number) {
    // ...
}
let sum = function(a: number, b: number) {
    // ...
}
// 아래는 에러가 난다
// add = sum;

// 에러가 나지 않는다. sum의 구조가 더 크다고 볼 수 있으므로.
sum = add;

// 4. 제네릭
interface Empty<T> {
    // ...
}

// 내부 interface에 제네릭으로 선언한 타입이 없으므로 구조적인 타입이 달라지지 않는다.
let empty1: Empty<string>;
let empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
    data: T;
}
// 구조적인 타입이 달라지게 된다
let notEmpty1: NotEmpty<string>;
let notEmpty2: NotEmpty<number>;
// 아래에 두 코드 모두 에러가 발생한다.
// notEmpty1 = notEmpty2
// notEmpty2 = notEmpty1