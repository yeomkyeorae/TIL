interface Developer {
    name: string;
    skill: string;
}

interface Humanoid {
    name: string;
    age: number;
}

function introduce(): Developer | Humanoid {
    return {
        name: 'Tom', age: 31, skill: 'Iron Consuming'
    }
}
const tom = introduce();
console.log(tom.name);

// 공통된 속성만 접근이 되므로 skill 접근 안됨
// console.log(tom.skill);

// 타입 단언으로 접근할 수는 있지만 코드가 지저분해 지므로 추천하지는 않음 -> 타입 가드!
if ((tom as Developer).skill) {
    const skill = (tom as Developer).skill;
    console.log(skill);
} else if((tom as Humanoid).age) {
    const age = (tom as Humanoid).age;
    console.log(age);
}

// 타입 가드 함수 선언, 자주 사용하는 패턴
function isDeveloper(target: Developer | Humanoid): target is Developer {
    return (target as Developer).skill !== undefined;
}

if(isDeveloper(tom)) {
    console.log(tom.name);
    console.log(tom.skill);
} else {
    console.log(tom.name);
    console.log(tom.age)
}