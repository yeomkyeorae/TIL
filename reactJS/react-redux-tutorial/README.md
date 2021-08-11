# Redux

Redux는 상태 관리 라이브러리이다. Redux를 사용해 컴포넌트 상태 관련 로직들을 다른 파일들로 분리해 효율적으로 관리할 수 있고, 글로벌 상태 관리를 할 수 있다.

## 1. Redux 키워드

### 1. Action(액션)

액션은 상태 변화가 필요할 때 발생시키는 것으로서, 객체로 표현된다. 객체 안에는 `type` 키워드가 필수이고, 그 외의 값은 작성자가 원하는 값을 넣어줄 수 있다.

```javascript
{
    type: "ADD_TODO",
    data: {
        id: 1,
        text: "맛집 탐방"
    }
}
```



### 2. Action Creator(액션 생성함수)

액션 생성함수는 `액션을 만드는 함수`이다. 단순하게 파라미터를 받아와 객체 형태로 만들어 준다. 단순 형태의 액션 생성함수를 만드는 이유는 컴포넌트에서 쉽게 액션을 발생시키기 위해서이다. 필수적이지는 않다.

```javascript
export const addTodo = data => ({	// Action(액션)
    type: "ADD_TODO",	// 액션 타입을 따로 변수로 정의하는 것이 일반적
    data
});
```



### 3. Reducer(리듀서)

리듀서는 `변화를 일으키는 함수`이다. `state`, `action` 두 가지의 파라미터를 받는다. 리듀서는 이전 상태와 전달 받은 액션을 가지고 상태를 변환한다. 리덕스를 사용할 때 여러 개의 리듀서`(서브 리듀서)`를 만들고 이것들을 합쳐 `Root Reducer(루트 리듀서)`를 만들 수 있다.

```javascript
function counter(state = 0, action) {
    switch(action.type) {
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        default:
            return state;
    }
}
```



### 4. Store(스토어)

리덕스에서는 하나의 어플리케이션에 `하나의 스토어`를 만든다. 현재의 어플리케이션 상태, 리듀서, 내장 함수들을 갖고 있다.



### 5. Dispatch(디스패치)

디스패치는 스토어의 내장함수로서 `액션을 발생시키는 역할`을 한다. 디스패치 인자에 발생시킬 액션을 전달한다.  그러면 스토어는 리듀서 함수를 실행시켜 해당 액션에 따라(case) 새로운 상태를 반환토록 한다. 



### 6. Subscribe(구독)

구독은 스토어의 내장함수로서, 함수를 파라미터로 받는다. 구독 함수에 함수를 전달하면 액션이 디스패치 될 때 마다 전달해준 함수가 호출된다. 크게 사용되는 일이 없다. 



## 2. Redux 사용 시 주의 사항

1. `1개의 어플리케이션에는 1개의 스토어`가 존재토록 한다. 여러 개의 스토어를 만들면 특정 업데이트가 빈번하게 발생하거나 개발 도구를 활용하지 못할 수 있다.

2. 리덕스의 `불변성`을 유지해야 한다. 기존 상태를 건드리지 않고 새로운 상태를 생성해 업데이트 해주는 방식으로 활용해야 한다. 왜냐하면 내부적으로 데이터 변경 감지를 위해 얕은 검사를 진행하기 때문이다(state에서 setState를 통해 상태 변화를 일으키거나, 배열 state를 변경코자 할 때 새로운 배열을 만드는 것과 같은 맥락). 불변성 유지를 위해서 `Immutable.js` 또는 `Immer.js`를 사용하기도 한다.

3. 리듀서 함수는 `순수한 함수`여야 한다. 여기서 순수한 함수는 3가지 사항을 일컫는다.

   1. 리듀서 함수는 이전 상태, 액션 객체를 인자로 받는다.
   2. 이전 상태는 건드리지 않고, 액션 객체를 참고해 새로운 상태를 만들어 반환해야한다.
   3. 같은 파라미터로 호출된 리듀서 함수는 항상 똑같은 결과를 반환해야 한다.

   위 3가지 사항을 벗어날 때에는 `리덕스 미들웨어`를 사용해 처리할 수 있다.

   

출처: https://react.vlpt.us
