type Heroes = 'Hulk' | 'Capt' | 'Thor'
type HeroAges = { [K in Heroes]: number }
const ages: HeroAges = {
    Hulk: 500,
    Capt: 250,
    Thor: 1000
}

// 참고 - for in 반복문
// const arr = ['a', 'b', 'c'];
// for(var key in arr) {
//     console.log(key);
//     console.log(arr[key]);
// }