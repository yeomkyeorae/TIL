const profile = {
    name: 'kim',
    'phone number': '01012345678',
    phone: {
        type: 'iphone XS MAX'
    },
    // 메서드 function 키워드만 작성하자
    greeting: function(){
        console.log(this) // this: profile
        console.log(`Hi! my name is ${this.name}`)
    },
    // do not apply backtick
    greeting2: () => { 
        console.log(this) // this: window
        console.log(`hi ${this.name}`)
    }
}

console.log(profile.name)
console.log(profile['name'])
console.log(profile.phone.type)
console.log(profile.greeting())
console.log(profile.greeting2())

// ES6+ 오브젝트 리터럴
let book = 'javascript'
let albums = {
    IU: ['좋은날', '가을아침'],
    DD: ['Taxi Driver', 'Desperados'],
}

let bag = {
    book,
    albums
}

// JSON (Javascript Object Notation - 자바스크립트 오브젝트 표기법)
// 문자열
// object -> JSON
let jsonData = JSON.stringify(profile)
// JSON -> object
let myObject = JSON.parse(jsonData)
