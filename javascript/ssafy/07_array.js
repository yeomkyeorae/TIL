let numbers = [10, 1, 3, 5]
numbers[0]  // 10
numbers[-1]  // undefined
numbers.length // 4
numbers.reverse() // return + 원본 변경
numbers.push(5) // 맨 뒤에 5 삽입 + return(길이 리턴)
numbers.unshift(3) // 맨 앞에 3 삽입 + return(길이 리턴)
numbers.pop()   // 맨 뒤에 값 pop + return(pop한 값)
numbers.shift() // 맨 앞에 값 pop + return(pop한 값)
numbers.includes(1) // true, 포함 여부 확인
numbers.indexOf(10) // 가장 먼저 만나는 값의 index
numbers.join('-') // 기본이 comma, "10-1-3-5"