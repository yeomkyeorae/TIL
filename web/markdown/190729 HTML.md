# 190729 HTML 학습 내용 정리

## 00. tags

```html
<body>
  <h1>문서의 제목 - 여는태그/닫는태그</h1>
  <!-- 닫는 태그가 없는 self-closing 태그도 있습니다. -->
  <input type="text">
  <br> <!-- 엔터 (다음 라인으로)-->
  <img src="URL or Path" alt="대안 이미지">
  <hr> <!-- 수평선을 그려주는 태그-->
  <div> <!-- 의미가 없지만, 레이아웃을 나누는 태그(display: block)-->
    <p>div태그의 자식(child)</p>
    <p>위의 p태그와 형제(sibling)</p>
  </div>
</body>
```

> 주요 태그

```
- <h1><h1>
- <input type="text">
- <br>
- <img src="" alt="">
- <hr>
- <div></div>
- <p>
```





## 01. semantic★

```html
<body>
  <h1>HTML5에 정의된 시맨틱 태그들</h1>
  <header>&lt;header&gt;</header> <!-- &lt : 좌괄호, &gt : 우괄호 -->
  <nav>Navigation</nav>
  <section>
    Section
    <article>
      article
    </article>
  </section>
  <aside>
    aside
  </aside>
  <footer>
    Footer
  </footer>
</body>
```

> 주요 태그

```
- <header></header>
- <nav></nav>
- <section></section>
- <article><article>
- <aside></aside>
- <footer></footer>
```





### 02. tags

```html
<body>
  <!-- 1. Heading(제목) -->
  <h1>H1, 문서의 제목</h1>
  <h2>H2, 문서의 제목</h2>
  <h3>H3, 문서의 제목</h3>
  <h4>H4, 문서의 제목</h4>
  <h5>H5, 문서의 제목</h5>
  <h6>H6, 문서의 제목</h6>
  <h7>H7은 없습니다.</h7>

  <!-- 2. 문서의 단락(paragraph)-->
  <p>문서의 단락을 나눕니다.</p>
  p태그를 적용하지 않았습니다.
  
  <!-- 3. br -->
  HTML에서는 태그가 작성되지 않은 상태에서 enter나 공백이 적용되지 않습니다.
  <br> br 태그를 작성하면 나눠집니다.
  <p>안녕하세요. <br> 김대전입니다. </p>
  
  <!-- 4. 텍스트 꾸미기 (bold) -->
  <p>안녕하세요! <b> b는 볼드체입니다. <strong>strong은 강조하는 시맥틱 태그입니다. </strong></b></p>
  
  <!-- 5. 텍스트 꾸미기 (italic) -->
  <p>
    <i>i는 기울임체(이탤릭체)입니다.</i>
    <em>em도 이탤릭체지만, 시맨틱 태그입니다. </em> <!-- emphasized -->
  </p>
  
  <!-- 6. 텍스트 꾸미기 하이라이팅 -->
  <span>이건 <mark>주목</mark>해주세요.</span>
  
  <!-- 7. 기타 텍스트 -->
  <p>이건 <del>취소</del>해주세요.</p>
  <p>이건 <ins>추가</ins>해주세요.</p>
  <p>하이!<sub>안녕하세요.</sub></p>
  <p>하이!<sup>안녕하세요.</sup></p>

  <!-- 8. pre ``` ```-->
  <pre>
    공백이 적용돼요
    import requests
    for i in range(10):
      print(i)
  </pre>

  <!-- 9. block quote 인용문 -->
  <p>
    지수가 말했다. <q>쉬는 시간 언제 인가요?</q>
  </p>

  <!-- 10. 수평선 -->
  <hr>

  <!-- 11. 리스트 -->
  <ol> <!-- ol>li*3 ordered list -->
    <li>이것은</li>
    <li>순서가 있는</li>
    <li>리스트</li>
  </ol>
  <ul> <!-- ul>li*3 unordered list -->
    <li>이것은</li>
    <li>순서가 없는</li>
    <li>리스트</li>
  </ul>
  <li>그냥 리스트</li>
  <li>태그 사용</li>
  <li>대신 들여쓰기가 안돼 있음</li>

  <!-- 12. 이미지/비디오 등 -->
  <!-- img태그
    src: (파일의 경로 - 로컬/웹) 
    alt: 대체 텍스트(이미지가 없는 경우 혹은 스크린리더 등에서 활용)
    width/hiehgt : 너비/높이
  -->
  <img src="messi.jpg" alt="메갓" width="300px" height="300px">
  <br>
  <img src="messia.jpg" alt="메갓" width="300px" height="300px">
  <br>
  <iframe width="50%" height="400" src="https://www.youtube.com/embed/nM0xDI5R50E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  <!-- 13. 링크 태그 -->
  <br>
  <a href="https://google.com">구글로 가기</a>
</body>
```

> 주요 태그

```
- <i></i>
- <em></em>
- <span></span>
- <mark></mark>
- <del></del>
- <ins></ins>
- <sub></sub>
- <sup></sup>
- <pre></pre>
- <ol></ol>
- <ul></ul>
- <li></li>
- <iframe src=""></iframe>
- <a href=""></a>
```





## 03. markup

```html
<body>
  <h1>프로그래밍 교육</h1>
  <a href="#python"><img src="./images/python.png" alt="파이썬" width="100" height="100"></a>
  <a href="#web"><img src="./images/html.png" alt="HTML" width="100" height="100"></a>
  <a href="mailto:edutak.ssafy@gmail.com">메일 보내기</a>
  <a href="02_tags.html" target="_blank">태그 학습하기</a>
  <!-- (section>h2)*2 -->
  <section id="python" class="python">
    <hr>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/-e_5sOsKqrU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <header>
      <h2><a href="https://docs.python.org/ko/3/tutorial/index.html" target="_blank">파이썬</a></h2>
    </header>
    <h3>Number type</h3>
    <p>파이썬에서 숫자형은 아래와 같이 있다.</p>
    <ol>
      <li style="list-style-type: circle">int</li>
      <li style="list-style-type: none">float</li>
      <li style="list-style-type: lower-alpha">complex</li>
      <li style="list-style-type: upper-alpha"><del>str</del></li>
    </ol>
    <h3>Sequence</h3> 
    <p>파이썬에서 시퀀스는 아래와 같이 있다.</p>
    <p><strong>시퀀스는 for문을 돌릴 수 있다!!</strong></p>
    <ol>
      <li>str</li>
      <li>list</li>
      <li>tuple</li>
      <li>range</li>
    </ol>
  </section>
  <hr>
  <section id="web" class="web">
    <header><h2><a href="https://developer.mozilla.org/ko/docs/Web">웹</a></h2></header>
    <h3>기초</h3>
    <ul>
      <li style="list-style-type: upper-roman">HTML</li>
      <li style="list-style-type: lower-roman">CSS</li>
    </ul>
  </section>
</body>
```

> 주요 태그

```html
<a href="#python"><img src="./images/python.png" alt="파이썬" width="100" height="100"></a>
<a href="02_tags.html" target="_blank">태그 학습하기</a>

<ol>
  <li style="list-style-type: circle">int</li>
  <li style="list-style-type: none">float</li>
  <li style="list-style-type: lower-alpha">complex</li>
  <li style="list-style-type: upper-alpha"><del>str</del></li>
</ol>
```





## 04. table

```html
<body>
  <table>
    <caption class="abc"><strong>2019 타임테이블</strong></caption> <!-- 표의 제목 -->
    <thead> <!-- table head !!!! -->
      <tr id="heads"> <!-- table row(행)-->
        <th>TIME</th> <!-- table header -->
        <th>INDOOR</th>
        <th colspan="2">OUTDOOR</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td>소극장</td> <!-- table data -->
        <td>잔디마당</td>
        <td>대공연장</td>
      </tr>
      <tr>
        <td>10:00</td>
        <td rowspan="2">안녕하신가영</td>
        <td></td>
        <td>10CM</td>
      </tr>
      <tr>
        <td>13:00</td>
        <td rowspan="2">선우정아</td>
        <td rowspan="2">참깨와 솜사탕</td>
      </tr>
      <tr>
        <td>15:00</td>
        <td></td>
      </tr>
      <tr>
        <td>17:00</td>
        <td>크러쉬</td>
        <td></td>
        <td>폴킴</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>석식</td>
        <td colspan="3">뷔페</td>
      </tr>
    </tfoot>
  </table>
</body>
```

> 주요 태그

```
- <caption></caption>
- <thead></thead>
- <tbody></tbody>
- <tfoot></tfoot>
- <th></th>
- <tr></tr>
- <td></td>

- <td rowspan="2">참깨와 솜사탕</td>
- <td colspan="3">뷔페</td>
```





## 05. form

```html
<body>
  <h1>FORM</h1>
  <p>주문서를 작성하여 주십시오.</p>
  <form action="#" method="GET"> 
  <!-- 폼 내용을 보낼 곳(action) 
    어떤 방식으로 보낼지(method - GET/POST)
  -->
    <label for="name">이름 :</label> 
    <!-- label을 작성해주면, for에 특정 input의 id를 작성하면,
      해당 input에 포커싱이 된다.  
    -->
    <input id="name" type="text" placeholder="이름을 입력해 주세요."> <br>
    <label for="date">날짜 : </label>
    <input id="date" type="date">
  <section>
    <h2>1. 샌드위치 선택</h2>
    <!-- radio 버튼은 동일한 name 속성값을 가지고 있는 것 중에 하나만 선택 가능-->
    <input type="radio" name="sandwich" value="1"> 에그마요 <br>
    <input type="radio" name="sandwich" value="2"> 이탈리안 비엠티 <br>
    <input type="radio" name="sandwich" value="3"> 터키 베이컨 아보카도 <br>
  </section>
  <hr>
  <section>
    <h2>2. 사이즈 선택</h2>
    <input type="number" name="size" min="15", max="30", step="15">
  </section>
  <hr>
  <section>
    <h2>3. 빵</h2>
    <!-- select + option : drop-down 메뉴 
      select 태그에 name을 지정하고,
      option에 value를 지정한다.
      selected, disabled를 사용할 수 있다.
    -->
    <select name="size_select" id="1234">
        <option value="허니오트">허니오트</option>
        <option value="플렛브래드" selected>플렛브래드</option>
        <option value="하티 이탈리안" disabled>하티 이탈리안</option>
    </select>
  </section>
  <hr>
  <section>
    <h2>4. 야채/소스</h2>
    <!-- checkbox -->
    <input type="checkbox" name="sauce" value="1"> 토마토 <br>
    <input type="checkbox" name="sauce" value="2"> 오이 <br>
    <input type="checkbox" name="sauce" value="3"> 할라피뇨 <br>
    <input type="checkbox" name="sauce" value="4"> 핫 칠리 <br>
    <input type="checkbox" name="sauce" value="5"> 바베큐 <br>
  </section>
  <hr>
  <section>
    <!-- submit 버튼은 누르면 해당 폼 데이터를 action으로 전송 -->
    <input type="submit" value="주문">
  </section>
  <a href="https://www.ssafy.com"><input type="button" value="우와아아"></a>
</form>
</body>
```

> 주요 태그

```html
<form action="#" method="GET"></form>

<label for="name">이름 :</label>

<input type="radio" name="sandwich" value="1"> 에그마요 <br>
<input type="radio" name="sandwich" value="2"> 이탈리안 비엠티 <br>
<input type="radio" name="sandwich" value="3"> 터키 베이컨 아보카도 <br>

<input type="number" name="size" min="15", max="30", step="15">

<select name="size_select" id="1234">
  <option value="허니오트">허니오트</option>
  <option value="플렛브래드" selected>플렛브래드</option>
  <option value="하티 이탈리안" disabled>하티 이탈리안</option>
</select>

<input type="checkbox" name="sauce" value="1"> 토마토 <br>
<input type="checkbox" name="sauce" value="2"> 오이 <br>
<input type="checkbox" name="sauce" value="3"> 할라피뇨 <br>
<input type="checkbox" name="sauce" value="4"> 핫 칠리 <br>
<input type="checkbox" name="sauce" value="5"> 바베큐 <br>
```



