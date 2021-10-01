// 타입 단언(type assertion)
// 개발자가 typescript보다 타입을 더 잘 알 수 있다!
// as 키워드
var tmp
tmp = 100;
tmp = 'abc';
var tmp2 = tmp as string;

// 타입 단언은 DOM API 조작할 때 많이 사용
// div가 있는지 장담할 수 없음, HTMLDivElement | null
// 따라써 typescript에게 타입 단언해 타입을 알려 줄 수 있다.
const div = document.querySelector('div') as HTMLDivElement;
div.innerText = 'test';

