// class와 생성자 함수는 문법상 구조 외에 기능은 동일하다
function Human(name, age) {
    this.name = name;
    this.age = age;
}
const h = new Person('사울', 26);

// ES2015 (ES6)
class Person {
    constructor(name, age) {
        console.log('생성!');
        this.name = name;
        this.age = age;
    }
}

const p = new Person('코케', 29); // 생성!
console.log(p);

// prototype
const user = { name: 'capt', age: '82' };
const admin = {};
admin.__proto__ = user;
admin.role = 'admin';

// capt 82 admin { name: 'capt', age: '82' }
console.log(admin.name, admin.age, admin.role, admin.__proto__);
