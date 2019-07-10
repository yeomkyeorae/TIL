# Startcamp Day3

## 1. 파이썬 문제 풀이

### 문제1

```python
print('문제 1. 문자열을 입력받아 문자열의 첫 글자와 마지막 글자를 출력하는 프로그램을 작성하시오.')
string = input('문자를 입력하세요: ')

print('첫 글자 : ', string[0])
print('마지막 글자 : ', string[-1]) # -1 인덱스 접근 가장 마지막이다.
```

- `String` 객체의 경우 `리스트`처럼 인덱스 접근을 할 수 있다.
- 하지만 `리스트`처럼 특정 위치의 `String`값을 변경할 수 없다. 예) `string[0] = 'a'`(x)



### 문제2

```python
print('문제 2. 자연수 N이 주어졌을 때, 1부터 N까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.')
numbers = int(input('숫자를 입력하세요: '))

for i in range(1, numbers+1): print(i)
```



### 문제3

```python
print('문제3. 숫자를 입력 받아 짝수/홀수를 구분하는 코드를 작성하시오.')
number = int(input('숫자를 입력하세요: '))

if number % 2:
    print('홀수')
else:
    print('짝수')
```

- 굳이 `number % 2 == 0`로 작성하지 않아도 된다. Pythonic하게 작성하자!



### 문제4

```python
print('문제 4. 표준 입력으로 국어, 영어, 수학, 과학 점수가 입력됩니다.')
print('국어는 90점 이상, 영어는 80점 초과, 수학은 85점 초과, 과학은 80점 이상일 때 합격이라고 정했습니다.(한 과목이라도 조건에 만족하지 않으면 불합격)')
print('다음 코드를 완성하여 합격이면 True, 불합격이면 False가 출력되도록 작성하시오.')

a = int(input('국어: '))
b = int(input('영어: '))
c = int(input('수학: '))
d = int(input('과학: '))

if (a >= 90) and (b > 80) and (c > 85) and (d >= 80):
    print(True)
else:
    print(False)
```

- `and`와 `or`를 동시에 한 조건문 안에서 사용하는 경우, 의도하지 않은 경우가 발생할 수 있다.
- 필요한 경우 괄호를 적절히 사용하자.



### 문제5

```python
print('문제5. 표준 입력으로 물품 가격 여러 개가 문자열 한 줄로 입력되고, 각 가격은 ;(세미콜론)으로 구분되어 있습니다. 입력된 가격을 높은 가격순으로 출력하는 프로그램을 만드세요.')
print('# 입력 예시: 300000;20000;10000')

prices = input('물품 가격을 입력하세요: ')

# 1. map을 활용하는 경우 : 첫번째 인자의 함수를 두번째 인자를 반복하며 적용
# 반복 가능한 객체에 함수를 각각 적용.
price_list = list(map(int, prices.split(';')))

# 2. list comprehension을 사용하는 경우
int_prices = [int(price) for price in prices]
print(int_prices)

# price_list = sorted(price_list, reverse=True) # 정렬된 새로운 list를 반환
price_list.sort(reverse=True) # 원본 자체를 정렬시켜주기 때문에 할당 x
print(price_list)
```

- `split()`은 문자열을 특정 기준으로 구분해 준다.
- `map함수`는 `map(int, prices.split(';'))`와 같이 사용되어 `prices 문자열`을 `;`를 기준으로 구분해 하나의 요소마다 int로 형변환한 것으로 해석할 수 있다.
- `list comprehension`을 활용하면 `range`함수를 사용해 반복문을 돌리지 않고도 리스트를 사용할 수 있다.



## 2. HTML & CSS 기본 활용

### HTML

`HTML`은 HyperText Markup Language의 약자로 웹 문서를 구조화하는데 사용되는 언어이다.

1. HTML 기본 구조

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Document</title>
   </head>
   <body>
       <h1>짱구야 안녕?</h1>
   </body>
   </html>
   ```

   - `<head> </head>`는 문서의 정보를 담고 있다.
   - `<body> </body>`는 문서의 본문을 담고 있다.

2. 태그의 종류

   1. 기본적으로 태그는 `여는 태그`와 `닫는 태그`로 구성된다.

      ```html
      <h1>제목1</h1>
      ```

   2. `닫는 태그`가 없는 경우도 있다. (self-closing tag)

      ```html
      <img src="__">
      ```

3. 태그의 구성

   ```html
   <img src="__" width="300" height="300" class="img-blue">
   <a href="https://google.com" class="blue">구글</a>
   ```

   - 태그별로 공통적으로 가질 수 있는 속성 : `id`, `class`, `style`
   - 각 태그별로 가질 수 있는 속성이 추가적으로 있다.
     - img- `src`, `width`, `height`
     - a - `href`

### CSS

CSS는 Cascading Style Sheets의 약자로, HTML을 꾸며주는 역할을 한다.

HTML을 꾸며주기 위하여, `선택자(selector)`를 통해 특정한 element를 지정하여야 한다.

1. 선택자

   - 태그 선택자

     ```css
     p {
         color: red;
     }
     ```

   - class 선택자

     ```css
     .blue {
     	color: blue;
     }
     ```

   - id 선택자

     ```css
     #pink {
         color: pink;
     }
     ```

      선택자 우선순위는 id선택자 > class선택자 > 태그선택자 순서로 적용된다.



## Flask

`flask`는 파이썬 기반의 micro framework이다.

### 기본 활용법

1. 설치

   ```bash
   $ pip install flask
   ```

2. 기본 코드

   ```python
   # app.py
   from flask import Flask
   
   app = Flask(__name__)
   
   @app.route('/')
   def hello():
       return 'Hello!'
   
   if __name__ == '__main__':
       app.run(debug=True)
   ```

3. 서버 실행

   ```bash
   $ flask run
   ```

   - 기본적으로 `flask run`명령어는 `app.py`파일을 실행시킨다. 만약 다른 파일명으로 만들었다면, 옵션을 추가해야 한다.
   - 마지막 두 줄을 작성해 놓았다면, 아래와 같이 실행도 가능하다.

   ```bash
   $ python app.py
   ```



## Variable routing

요청 오는 url을 변수화하여 값을 사용할 수 있다.

```python
@app.route('/hi/<string:name>')
def hi(name):
    return f'{name}아 안녕?'
```

## Rendering Template

`HTML`파일을 만들어 활용할 수 있다. 기본적으로 `templates`폴더에 파일을 만들어야 한다.

```
app.py
templates/      <-중요!
	hi.html
	lunch.html
	index.html
```

```python
from flask import Flask, render_template
# ...
@app.route('/hi')
def hi():
    return render_template('hi.html')
```

`HTML`파일에서 변수의 값을 출력하고자 한다면, 키워드 인자로 그 값을 넘겨줘야한다.

```python
return render_template('hi.html', name=name)
```

그리고 출력을 위해서는 `{{ }}`를 사용한다.

```
<h1>{{name}} 안녕? </h1>
```



