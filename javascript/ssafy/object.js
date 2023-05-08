// 1
const me = {
    name: 'tak',
    phone: '010-1234-5678',
    // object 메소드에서도 arrow function 사용 금지
    greeting: function() {
        return 'hi, ' + this.name 
    }
}

// 2
const Person = function(name, phone) {
    this.name = name
    this.phone = phone
    this.greeting = function() {
        return 'hi, ' + this.name
    }
}

const lee = new Person(name='경호', phone='017-532-1003')

// 생성자 함수에서는 arrow function 사용 금지
const Animal = name => {
    this.name = name
}
const dog = new Animal('dog') // Error

// object literal: 단순 축약 표현형?
const name = '겨레'
const name = '010-3333-4444'
const greeting = function() {
    return 'hi, ' + this.name
}
const you = {
    name,
    phone,
    greeting,
}