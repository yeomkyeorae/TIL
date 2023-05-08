# Hook

hook은 react 함수형 컴포넌트에서 상태 관리를 할 수 있게 도와주는 기능이다. React 버전 16.8부터 새롭게 추가되었다.



## 1. useState

`useState`를 사용하면 상태 값을 저장하고, 변경할 수 있다. react 패키지에서 `useState` 함수를 불러와 사용할 수 있다. 

`useState`는 함수 인자에 초기 값을 넣어 호출해야 한다. 비구조화 문법으로 변수를 할당하면 각각 첫 번째 인자에 상태 값이, 두 번째 인자에 그 상태 값을 바꾸는 setter 함수가 할당된다.

> useState 활용 예시

```react
import React, { useState } from 'react';

function Counter() {
 	const [number, setNumber]= useState(0);
    
    // ...
}
```



## 2. useRef

react를 사용하다 보면 특정 DOM에 접근해야 할 때가 생긴다. 예를 들면 특정 element의 크기가 필요하다거나, 스크롤바의 위치를 새로 설정해야 한다거나, input의 포커스를 설정해야 한다거나,  또는 외부 라이브러리(D3.js chart.js 등)를 사용할 때 특정 DOM에 접근해야 한다. 이때 `ref`라는 것을 사용하는데 함수형 컴포넌트에서는 `useRef`를 사용한다.



먼저, `useRef` 함수를 사용해 ref 객체를 만들고, 이 객체를 선택하고자 하는 DOM에 `ref` 값으로 넣어준다. 그러면 생성한 ref 객체를 통해 해당 DOM에 접근할 수 있다. ref 객체에 `current`를 호출하면 현재 DOM을 가리킬 수 있다.

> useRef 변수 활용 예시1

```react
import React, { useRef } from 'react';

function InputSample() {
    // ...
    const nameInput = useRef();
    
    const onReset = () => {
        // ...
        nameInput.current.focus();
    }
    
    return (
    	<div>
        	<input 
                name="name"
                placeholder="이름"
                ref={nameInput}
            />
            <button onClick={onReset}>초기화</button>
        </div>
    )
}
```

그 외의 다른 용도로 컴포넌트 안에서 조회, 수정할 수 있는 변수를 관리하는 것이다. 왜냐하면 `state` 와 달리 `useRef`로 관리하는 변수는 값이 바뀌어도 컴포넌트가 리렌더링 되지 않는다. react에서 `state`를 바꾸는 함수를 호출하면, 다음 렌더링 이후에 업데이트된 상태를 조회할 수 있다. 하지만 `useRef`로 관리하는 변수는 설정하고 바로 조회할 수 있다. `useRef`를 사용해 다음과 같은 값을 관리할 수 있다.

- setTimeout, setInterval을 통해 만들어진 id
- 외부 라이브러리를 사용하여 생성된 인스턴스
- scroll의 위치

> useRef 변수 활용 예시2

```react
import React, { useRef } from 'react';

function App() {
    // ...
    const nextId = useRef(3);
    const onCreate = () => {
        nextId.current += 1;
    };
    // ...
}
```



## 3. useEffect

`useEffect` hook을 사용하면 컴포넌트가 마운트/언마운트, 업데이트(props가 바뀔 때) 될 때의 특정 작업을 처리할 수 있다.



`useEffect`를 사용할 때 첫 번째 인자에는 함수가 오고, 두 번째 인자에는 의존값이 들어 있는 배열(`deps`)을 넣는다. `deps`가 비어있는 상태이면, 컴포넌트가 처음 마운트될 때만 첫 번째 인자의 함수를 호출한다.  `deps`를 생략하면 컴포넌트가 리렌더링 될 때 마다 함수를 호출한다. 그리고 `deps` 안에 특정 값을 넣는다면, 처음 마운트될 때, 특정 값이 바뀔 때, 언마운트시, 값이 바뀌기 전에 함수를 호출한다.



첫 번째 인자의 함수에서 `return`을 사용해 `cleanup` 함수를 호출할 수 있다. 

> useEffect 사용 예시

```react
import React, { useEffect } from 'react';

function User({user, onRemove, onToggle}) {
    useEffect(() => {
		console.log('user 값 설정');
        console.log(user);
        
        return () => {
            console.log('user 바뀌기 전');
            console.log(user);
        };
    }, [user]);
}
```

`useEffect`의 규칙은 첫 번째 인자 함수 안에서 사용하는 `state`나 `props`가 있다면, 모두 `deps` 배열에 넣어 주어야 한다. 그렇게 해야 함수에서 최신 `state`와 `props`를 가리키게 된다.



## 4. useMemo

`useMemo`를 사용하면 불필요한 함수 호출을 줄이고, 성능 최적화를 할 수 있다. 여기서의 memo는 `memoized`로서 연산한 값을 재사용한다는 의미를 갖는다. 



예를 들어, input 태그에 값을 입력하는 순간 마다 `state`가 변해서 함수 컴포넌트 내부에서 함수를 호출하는 횟수가 불필요하게 많을 수 있다. 이때 `useMemo`를 사용하면 이 함수 호출을 줄여, 성능을 개선할 수 있다.



`useMemo`는 위 `useEffect` 처럼 첫 번째 인자에 실행할 함수를 넣어주고, 두 번째 인자에  `deps`을 넣어준다. `deps` 안에 넣어준 것의 상태가 바뀌면 첫 번째 인자의 함수를 실행하는 구조이다. 

> useMemo 활용 예시

```react
import React, { useMemo } from 'react';

function countActiveUsers(users) {
    console.log('Counting active users...');
    return users.filter(user => user.active).length;
}

function App() {
    // ...
    const count = useMemo(() => countActiveUsers(users), [users]);
    return (
    	<>
        	<div>active users: {count}</div>
        </>
    )
}
```





출처 : https://react.vlpt.us

