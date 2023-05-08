# React

[kr.reactjs.org](https://ko.reactjs.org/)와 <리액트를 다루는 기술>에 나오는 내용들.

## 5. State 

> setState()

1. 직접 State를 수정하지 말 것.

```react
// Wrong
this.state.comment = 'Hello';

// Correct
this.setState({comment: 'Hello'});
```

2. State 업데이트는 비동기적일 수 있다.

`this.props`와 `this.state`가 비동기적으로 업데이트될 수 있기 때문에 다음 state를 계산할 때 해당 값에 의존해서는 안된다.

```react
// Wrong
this.setState({
    counter: this.state.counter + this.props.increment,
})

// Correct (일반적인 function 함수에서도 정상적으로 작동)
this.setState((state, props) => ({
	counter: state.counter + props.increment
}))
```



## 6. Event Handling

>  JSX 콜백 안에서 함수 적용하기

1. bind 호출하기

```react
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true}
        
        // 콜백에서 'this'가 작동하려면 아래와 같이 바인딩 해주어야 한다.
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }))
    }
    render() {
        return (
        	<button onClick={this.handleClick}>
            	{this.state.isToggleOn ? 'ON': 'OFF'}
            </button>
        );
    }
}
```

2. 클래스 필드 문법(create-react-app에 이 문법이 기본적으로 설정되어 있다)

```react
class LogginButton extends React.Component {
    // 이 문법은 'this'가 handleClick 내에서 바인딩되도록 한다.
    handle = () => {
        console.log('this is: ', this);
    }
    
    render() +{
        return (
        	<button onClick={this.handleClick}>
            	Click me
            </button>
        )
    }
}
```

## 7. 조건부 렌더링

> 엘리먼트 변수 사용

```react
render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
       button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
       button = <LoginButton onClick={this.handleLoginClick} />;
    }  
    return (
    	<div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
        </div>
    );
}
```

> 논리 `&&` 연산자로 if를 인라인으로 표현하기

자바스크립트에서

- `true && expression`은  `expression`
- `false && expression`은 `false`로 평가된다. `false`라면 React는 무시한다.

```react
return (
	<div>
    	<h1>Hello!</h1>
        {unreadMessages.length > 0 &&
        	<h2>
            	You have {unreadMessages.length} unread messages.
            </h2>
        }
    </div>
)
```

> if-else구문 인라인으로 표현하기

`condition ? true : false` 사용

```react
render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
    	<div>
        	The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
        </div>
    )
}
```

> 컴포넌트에서 return null을 하면 렌더링하지 않는다.



## LifeCycle 메서드(class형 컴포넌트)

> 카테고리

- mount: DOM이 생성되고 웹 브라우저상에 나타나는 것

  - 호출 메서드 순서
    1. constructor
    2. getDerivedStateFromProps
    3. render
    4. componentDidMount

- update: 아래와 같은 4가지 경우에 업데이트

  1. props가 바뀔 때
  2. state가 바뀔 때
  3. 부모 컴포넌트가 리렌더링될 때
  4. this.forceUpdate가 강제로 렌더링을 트리거할 때

  - 호출 메서드 순서
    1. getDerivedStateFromProps
    2. shouldComponentUpdate
    3. render
    4. getSnapshotBeforeUpdate
    5. componentDidUpdate

- unmount: 컴포넌트를 DOM에서 제거하는 과정

  - 호출 메서드 순서
    1. componentWillUnmount

> 용어

- Will: 어떤 작업을 작동하기 전에 실행되는 메서드
- Did: 어떤 작업을 작동한 후에 실행되느 메서드

> 종류

1. render()
2. constructor()
3. getDerivedStateFromProps(), v16.3
4. componentDidMount()
5. shouldComponentUpdate()
6. getSnapshotBeforeUpdate(), v16.3
7. componentDidUpdate()
8. componentWillUnmount()
9. componentDidCatch()

## Hooks(함수형 컴포넌트)
