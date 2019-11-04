// 데이터를 외부로부터 받아와서 변수에 저장하고 출력하는 함수
// 1. 비동기 x
function getData() {
    const data = {'data': 'some data'}
    return data
}

let response = getData()
console.log(response)

// 2. setTimeout
function getData() {
    let data
    setTimeout(function() {
        console.log('요청을 보냈습니다')
        data = {'data': 'some data'}
    }, 1000)
    return data
}

let response1 = getData()
console.log(response1)  // undefined

// 3. callback function 정의(과거)
function getDataCallback(callback) {
    setTimeout(function() {
        const data = {'data': 'some data'}  // 데이터 도착
        callback(data)  // 내가 원하는 작업을 시작
    }, 1000)
}

// 함수 호출, 인자로 함수를 넘겨주는데 그게 출력하는 작업
getDataCallback(function(data){
    let response2 = data
    console.log(response2)
})


// 4. promise(약속)) 등장
function getDataPromise() {
    return new Promise(resolve => {
        setTimeout(function() {
            console.log('요청을 보냈습니다')
            const data = {'data': 'some data'}  // 데이터 도착
            resolve(data)  // 내가 원하는 작업을 시작
        }, 1000)
    })
}

let response3 = getDataPromise()
console.log(response3) // 1. 출력 pending (요청 중)
// 위에 붙여놓고 아래에 확인
console.log(response3) // 2. 출력 resolved (요청 완료)
response3.then(response => console.log(response))   // 3. data 출력

// 위에 코드 함축
getDataPromise()
    .then(response => console.log(response))


// 4-1. Promise
function myPromise(url) {
    return new Promise((resolve, reject) => {
        if (url === 'http') {
            resolve('성공')
        } else {
            reject('url이 잘못되었습니다.')
        }
    })
}

const promise_1 = myPromise('http')
console.log(promise_1)
promise_1.then(response => console.log(response))

const promise_2 = myPromise('www')
console.log(promise_2)  // reject 함수를 호출 하기 때문에
promise_2.then(response => {
    console.log('성공')
    console.log(response)
})
.catch(error => {      // rejected
    console.log('error')   // catch만 실행됨.
    console.log(error)
})


// chaining
function getDataPromise(){
    return new Promise(resolve => {
        setTimeout(function(){
            console.log('요청을 보냈습니다.')
            const data = {'data': 'some data'}
            resolve(data)
        }, 1000)
    })
}

getDataPromise()
    .then(response => { // reponse = data
        console.log(response)   // {'data': 'some data'}
        return response.data    // 'some data'
    })
    .then(data => { // data = 'some data'
        console.log(data)   // 'some data'
    })
    .catch(error => {
        console.log(error)
    })



axios.get('https://jsonplaceholder.typicode.com/posts/1')
.then(response => {
    console.log(response)
    return response.data.userId
})
.then(userId => {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
})
.then(response => {
    console.log(response)
    console.log(response.data.name)
})


// 5. async / await -> 동기 작업인척 하기 + promise
function getDataPromise(){
    return new Promise(resolve => {
        setTimeout(function(){
            console.log('요청을 보냈습니다.')
            const data = {'data': 'some data'}
            resolve(data)
        }, 1000)
    })
}

async function printData() {
    const response = await getDataPromise()
    console.log(response)
}

async function printUser() {
    try {   // resolve 호출되면
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
        const userId = response.data.userId
        console.log(userId)
    } catch(error) {
        console.log(error)  // reject 호출되면
    }
}