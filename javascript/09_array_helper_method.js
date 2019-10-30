/*
    Array helper methods
*/

/*
    Array.forEach
*/

let numbers = [1, 2, 3]
// 1. 반복문
for(let i=0; i<3; i++){
    console.log(numbers[i])
}
// 2. 반복문
for(let num of numbers){
    console.log(num)
}
// 3. forEach
numbers.forEach(function(num){
    console.log(num)
})
// 실습
const images = [
    {height: 30, width: 20},
    {height: 100, width: 100},
    {height: 10, width: 5}
]

let areas = []
images.forEach(function(d, idx){
    console.log('index:', idx)
    areas.push(d.height * d.width)
})
console.log(areas)


/*
    map
*/
let nums = [1, 2, 3]
nums = nums.map(function(number){
    return number * 2
})
console.log(nums)

let doubleNumbers = nums.map(number => number * 2)  // by arrow function
console.log(doubleNumbers)

// 실습 images -> map
let areas2 = images.map(function(image){
    return image.height * image.width    
})
areas2 = images.map(image => image.height * image.width)
console.log('areas2: ', areas2)


/*
    filter
    : 콜백함수의 return 결과가 참인 것을 각각 원소로 하는 배열을 **리턴**!
*/
// images의 높이가 100보다 작은 object만 담은 배열
let lower = images.filter(function(image){
    return image.height < 100
})
console.log(lower)

let products = [
    {name: 'banana', type: 'fruit'},
    {name: 'tomato', type: 'vegetable'},
    {name: 'apple', type: 'fruit'},
    {name: 'cucumber', type: 'vegetable'}
]
let bag = products.filter(product => product.type === 'fruit')
console.log(bag)

/*
    reduce(callbackfn, initialValue)
    : return 결과를 누적해서 return
*/
let mySsafy = [100, 100, 95, 90]
let sum = mySsafy.reduce(function(total, score){
    return total + score
}, 100) // 초기값
console.log(sum)
console.log(mySsafy.reduce( (total, score) => total + score, 100))


/*
    find: 일치하는 첫번째 원소를 리턴
*/
let a = mySsafy.find(function(score) {
    return score === 90
})
console.log(a)

let heroes = [
    {name: 'hulk', age: 40},
    {name: 'iron', age: 50},
    {name: 'spiderman', age: 20},
]
let hero = heroes.find(function(hero){
    return hero.age === 20
})
console.log(hero)


/*
    some, every
*/
let myNumbers = [1, 2, 3, 4]
// 짝수가 있는지 없는지(하나라도 부합하는지)
myNumbers.some(function(number){
    return number % 2 === 0
}) // true
// 모든 원소가 짝수인지
myNumbers.every(function(number){
    return number % 2 === 0
}) // false