# Vue.js

## Intro

### 1. 기초 로직

```html
<!DOCTYPE html>
<html>
    <head>
       	<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    </head>
    <body>
        <div id="app">
            {{ message }}
        </div>
        <script>
        	const app = new Vue({
                el: '#app',
                data: {
                    message: '안녕하세요'
                },
                methods: {
                    
                }
            })
        </script>
    </body>
</html>
```

- `CDN`으로 `vue`를 불러들일 때는 `head`나 `body` 상단부에 위치시킨다.
- 태그 내에서 `vue`의 `data`값을 출력하려면 Django template 문법처럼`{{ }}`를 사용한다.



## 2. Directive(디렉티브)

HTML 속성(attributes)에는 인터폴레이션으로 값을 직접 넣지 못하기 때문에 디렉티브 문법(?)을 사용해야 한다.

> `v-for` & `v-if`, `v-else`

 반복문 & 조건문.

```html
<p v-for="member in members" v-if="member.gender === 'M'" :key="member.id">
    {{ member.name }}
</p>
<p v-else>
    {{ member.name }}
</p>
```

- `v-for`는 `v-if`보다 우선 순위를 갖는다. 매 반복마다 `v-if`로 검증한다.
- 일반 `if-else` 처럼 `v-else`로 `else` 문을 사용할 수 있다.
- 반복문을 시행할 때 마다 항상 `key`를 유니크하게 설정하는 것을 강력하게 권장한다. 
- 디렉티브의 `:key`는 축약형이다.
- `<h1>{{ data }}</h1>`와 `<h1 v-text="data"></h1>`는 같은 문법이다. 



> `v-model`

 `2-way binding(양방향 바인딩)`에 사용하는 디렉티브. 즉, `view`와 `데이터`를 바인딩하여 값을 공유(?)하는 것. `view`의 값이 변하면 `data`의 값도 동시에 변화시키고 반대로 `data`의 값이 변하면 `view`의 값도 동시에 변화된다.

```html
<input type="text" v-model="userText">
{{ userText }}
<!-- -->
<script>
	const app = new Vue({
        el: '#app',
        data: {
            userText: ''
        }
    })
</script>
```

-  `v-model`을 `userText`로 등록했기 때문에 `input`에 값을 입력하면 `userText`의 `value`가 `input`의 `value`로 바뀐다.



> `v-bind`

 태그 내 속성 값에 인자를 넘겨주려면 `v-bind`를 사용한다. 

```html
<img v-bind:src="url" alt="" class="src">
<!-- 축약형 -->
<img :src="url" alt="">
```



> `v-on`

 `javascript`의 `eventListener`같은 친구. 이벤트 발생시 정해진 함수를 실행토록 한다.

```html
<button v-on:click="countDown()">-----</button>
<!-- 축약형 -->
<button @click="countDown()">-----</button>
{{ counter }}
<script>
    const app = new Vue({
        el: '#app',
        data: {
            counter = 0
        }
      	methods: {
			countDown: function() {
				this.counter--
			}
		}  
    })
</script>
```



> `v-html`

 문자열을 태그처럼 사용할 때 사용한다.

```html
<!-- myTag data가 '<h1>안녕하세요</h1>' 문자열이라면 <span>내부에 태그로 적용된다.-->
<span v-html="myTag"></span>
```



> `v-show`

 `v-show`가 사용된 태그가 보이지 않도록 할 수 있다.

```html
<p v-show="false">이 것은 보이나요.</p>
<p v-if="false">태우 바보</p>
```

- `v-if` 의 조건이 false일 경우 `v-show="false"`와 같은 효과를 보일 수 있지만, `v-if`는 렌더링 자체를 하지 않는다.

- `v-show`의 경우에는 렌더링을 하지만 css`display:none`을 적용해 보이지 않는 것이다.

   



## 3. Computed vs Watch

> Computed

 `Computed`는 `반응형 getter`로서 함수의 실행 결과를 계산된(computed) 변수의 값으로 저장한다.  캐싱해서 저장돼 있는 변수값으로서 값을 `return`하도록 작성되어야 한다.

```html
computed: {
    dateComputed(){
        return new Date()
    }
},
```



> Watch

 `handler`를 통해서 해당 변수의 값이 변할 때 마다 함수를 실행한다. `반응형 callback`

```html
watch: {
      message: {
       		handler: function(){
                console.log('메시지 값이 변경되면 함수를 실행합니다!')
            },
            deep: true
      }
},
```

- `deep`에 `true`값을 설정함으로써 message 객체의 내부 객체 값이 변화도 추적할 수 있게 한다.



## 4. Mounted

> Mounted

 `el`이 새로 생성된 `vm.$el`로 대체된 인스턴스가 마운트 된 직후 1회 호출된다.

```html
mounted: function(){
    console.log('처음 실행시 함수를 실행합니다!')
},
```



 

## Component

 vue를 활용한 코드 상에서, 중복되는 로직으로 인해 동일한 코드(변수명만 다르고 로직은 같은)가 범람하는 것을 막기 위해 Component로 관리하여 쉽게 이용토록 하자!

> 기본 선언

```html
<div id="app">
    <todo-list category="todo"></todo-list>
</div>
<script>
	Vue.component('todo-list', {
        template:
        `
		html 코드가 들어간다
		`,
        // props: 하위 컴포넌트(todo-list)로 데이터 전송 + 검증
        props: {
            category: {
                type: String,
                required: true
            }
        },
        // 기존 vue와 달리 object가 아닌 object를 return하는 형식
        data(){
            return {
                todos: []
            }
        },
        methods: {
            addTodo(){
			
            }
        }
    })
</script>
<script>
   // 루트
   const app = new Vue({
     el: '#app',
   })
</script>
```



## Props vs emit by YOUTUBE

- props은 `상위 컴포넌트`에서 `하위 컴포넌트`로 데이터를 전달. (하위 컴포넌트에 props를 선언해 사용)
- emit은 `하위 컴포넌트`에서 `트리거`를 통해 `상위 컴포넌트`로 이벤트를 전달하는 형식.

> 결과 예시

![예시](./youtube/images/1.PNG)



> 구조

```
			APP
↑			↓↑			↓
SearchBar	VideoList	VideoDetail
			↓↑
			VideoListItem
```

- `SearchBar`: 검색어를 입력할 수 있는 Component 제공
- `VideoList`: 개별 Video들을 담아놓는 VideoList Component 제공. VideoListItem에서의 이벤트를 전달받아 App으로 함수를 전달.
- `VideoListItem`: 개별 Video에 대한 component 제공, 클릭시 트리거를 발생시켜 VideoList로 함수를 전달.
- `VideoDetail`: App으로부터 클릭된 이벤트 target을 전달받아 iframe으로 동영상 출력.



> 동영상 클릭 시나리오로 알아보는 props & emit

1. 동영상 클릭, `VideoList`로 전달

```html
<!-- VideoListItem -->
<div @click="selectedVideo">
    
</div>

<script>
// ...
    methods: {
        selectedVideo(){
            this.$emit('video-select-event', this.video)
        }
    }
</script>
```

- `selectedVideo`함수를 통해서 상위 컴포넌트로 `emit`



2. `App`으로 전달

```html
<!-- VideoList -->
<div>
    <VideoListItem @video-select-event="selectedVideo" v-for="video in videos" 				:key="video.id.videoId" :video="video"/>
</div>

<script>
// ...
    methods: {
        selectedVideo(video){
            this.$emit('video-select-event', video)
        }
    }
</script>
```

- `selectedVideo`함수(이름 같아도 OK)를 통해서 또 상위 컴포넌트로 `emit`



3. `VideoDetail`로 전달

```html
<!-- App -->
<div>
    <video-detail :selectedVideo="selectedVideo"/>
    <video-list @video-select-event="openDetail" :videos="videos"/>
</div>

<script>
	data() {
        return{
            videos: [],
        	selectedVideo: null   
        }
    },
    methods: {
        // ...
        openDetail(video){
      		this.selectedVideo = video
    	}
    }
</script>
```

- `VideoDetail`에서 `props`를 통해 `selectedVideo` 객체 사용!

- data 사용할 때 함수 형식으로 `return`해야 된다는 것 잊지 마시고.

  