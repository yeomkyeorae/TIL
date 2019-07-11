# Day 4

## dict(dictionary)

### 1. 초기화방법

``` python
# 1.
lunch = {'점심': '레드코코넛누들'}
# 2.
lunch = dict(점심='레드코코넛누들')
# 3.
lunch = {}
lunch['점심'] = '레드코코넛누들'
```

- `list`, `dictionary` type은 `key`가 될 수 없다.
- `key`는 유일하다.
- `value`에는 모든 값들이 들어갈 수 있다.



### 2. 반복문

``` python
ssafy = {'apple': '사과', 'banana': '바나나'}

# 1. dict 자체를 넣으면 key를 하나씩 던져줌
for key in ssafy:
    print(key)
    
# 2. dict.items()는 key와 value를 순서대로 던져줌
for key, value in ssafy.items():
    print(key, value)
    
# 3. dict.values()는 value값만 던져줌
for value in ssafy.values():
    print(value)
    
# 4. dict.keys()는 1번과 동일
for key in ssafy.keys():
    print(key)
```

``` python
my_dict = {'apple': '사과', 'banana': '바나나'}
my_dict['apple']
# => 사과
my_dict['cat']
# => 오류 발생(Key Error)
my_dict.get('apple')
# => 사과
my_dict.get('cat')
# => None
my_dict.get('cat', 'Not Found')
# => Not Found
```



### 3. 기타

``` python
# 소수점에 맞게 출력, float type으로 소수 첫번째 자리까지 출력
print('%.1f' % (float_num))
```

```python
# in을 사용해 리스트, 튜플과 같은 변수에 그 값이 포함돼 있는지 확인할 수 있다.
# 예시)
if -2 in [1,2,3,-2]:
    print(True):
```



## HTML

### 1. {%  %} : 로직코드와 {{      }} : 출력 코드 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <!-- jinja2 -->
    {% if name == '용흠' %}     
        <h1>안녕하십니까. {{name}} 반장님. </h1>
    {% else %}
        <h1>{{ name }} 안녕?</h1>
    {% endif %}
</body>
</html>
```

- 위에서 `{% if name == '용흠' %}` 을 통해 조건문을 적용하였다. `{% else %}`를 통해 조건에 맞지 않을 경우의 실행문을 작성함.
- 조건이 끝났을 때에는 `{% endif %}`를 작성한다.
- `{{name}}`를 통해 name 내용을 출력할 수 있도록 하였다.

