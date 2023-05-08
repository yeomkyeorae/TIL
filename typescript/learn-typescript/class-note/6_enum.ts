// 숫자형 enum, 0에서 1씩 증가
enum Shoes {
    Nike,   // 0
    Adidas, // 1
    Puma    // 2
}

const myShoes = Shoes.Nike; // 0

// 문자형 enum
enum Player {
    Koke = '코케',
    Sual = '사울'
}

const player = Player.Koke;
console.log(player);    // 코케

// enum 예제
enum Answer {
    Yes = 'Y',
    No = 'N'
}

function askQuestion(answer: Answer) {
    if(answer === Answer.Yes) {
        console.log('정답');
    } else if(answer === Answer.No) {
        console.log('오답');
    }
}

// enum에서 제공하는 값으로 타입을 제한할 수 있다
askQuestion(Answer.Yes);
// askQuestion('Yes');     // 오류 발생
