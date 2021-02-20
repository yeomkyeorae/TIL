# JMeter

아래 `참고`에 나와 있는 블로그들의 내용을 정리했습니다.

## 1. JMeter란?

> The `Apache JMeter` application is open source software, a 100% pure Java application designed to load test functional behavior and measure performance.

 JMeter는 오픈소스로서 클라이언트-서버 구조로 된 소프트웨어의 성능 테스트를 위해 만들어진 JAVA 프로그램이다. 단위/성능/스트레스 테스트 등 많은 곳에서 활용할 수 있다. 프로토콜도 계속 추가되어 TCP, HTTP(S), FTP, JDBC, LDAP, SMTP, SAP/XML, RPC 등 현재 범용으로 사용되는 프로토콜을 대부분 지원한다.

 JMeter는 통신 프로토콜 단계에서만 동작하고 웹 브라우저에서는 동작하지 않는다. 즉 통신 규약에 맞도록 클라이언트와 서버간 메세지만 송수신할뿐이고 클라이언트 자체에서 행해지는 연산 동작은 하지 않는다.

> 설치

자바 기반의 소프트웨어이므로 JDK를 먼저 설치해야한다. 이후 [https://jmeter.apache.org/download_jmeter.cgi](https://jmeter.apache.org/download_jmeter.cgi)에서 설치(압축 해제)한다. 압축 해제로 생성되는 폴더에서 `bin/ApachJMeter.jar`파일로 실행한다. 

> 플러그인 설치

[https://jmeter-plugins.org/wiki/ResponseTimesOverTime/](https://jmeter-plugins.org/wiki/ResponseTimesOverTime/)에서 다운로드. 압축 해제해서 위에서 설치한 폴더(lib/ext)에 맞게 복사 붙여 넣기.



## 2. 성능 테스트 기본 지식

> 성능 테스트 정의

 서비스 및 시스템의 성능을 확인하기 위해서 실제 사용환경과 비슷한 환경에서 테스트를 진행하는 것을 말한다. 이를 통해 응답시간(Response Time)과 처리량(Throughput), 병목구간 등을 확인할 수 있고, 이를 통해 얻은 정보를 바탕으로 개선할 수 있음.

> 테스트 구분

- Load 테스트: `부하(Load)를 순차적으로 증가`시키면서 응답시간이 급격히 증가하거나, 더는 처리량이 증가하지 않거나 시스템의 CPU와 Memory 등이 기준값 이상으로 증가하는 등 `비정상 상태가 발생하는 임계점`을 찾아내는 테스트.

- Stress 테스트: `임계값 이상의 요청이나 비정상적인 요청을 보내` 비정상적인 상황의 처리 상태를 확인하고 시스템의 최고 성능 한계를 측정하기 위한 테스트. 

- Spike 테스트: `갑자기 사용자가 몰렸을 때` 요청이 정상적으로 처리되는지 그리고 그 업무 부하(Workload)가 줄어들 때 정상적으로 반응하는지를 확인하기 위한 테스트.

- Stability / Soak 테스트: `긴 시간 동안 테스트`를 진행해서 테스트 시간에 따른 시스템의 메모리 증가, 성능 정보의 변화 등을 확인하는 테스트.

> 테스트 과정

요구사항 분석 - 테스트 계획 - 테스트 환경 구축 - 테스트 설계 - 테스트 수행 및 결과 수집 - 테스트 분석 - 문제점 수정 및 재테스트 - 결과 보고서 작성

> 주요 용어

- Active User: 실제 서버에 연결된 상태로 요청을 처리 중인 사용자
- InActive User: 서버와의 세션 정보를 갖고 있지만 요청을 주고 받는 상태가 아닌 사용자
- Concurrent User(Active + InActive User): '동시 접속 사용자 수'로 표현됨. 일반적으로 사용자 수의 많고 적음을 표현하는 값. Active User와 InActive User 비율이 1:10 정도이다.
- Virtual User: 가상 사용자 수. JMeter에서는 Thread 수로 표현하기도 한다.
- Ramp-Up Period: Thread(Virtual User) 생성에 걸리는 시간을 의미. Ramp-Up Period가 50초이고 Thread 개수가 10개라면 이는 50초 동안 10개의 Thread를 생성하라는 의미이다. 즉, 5초 마다 Thread를 1개씩 생성하는 것과 같은 의미.

![](https://t1.daumcdn.net/cfile/tistory/99029C335A1AD9DD30)

- Throughput: 단위 시간당 대상 서버(웹서버, WAS, DB 등)에서 처리되는 요청의 수. JMeter에서는 시간 단위를 TPS(Transaction Per Second, TPS = 스레드 개수 / 평균 응답시간)로 표시한다.

- Response Time / Load Time: 응답시간 또는 처리시간. 요청을 보낸 후 응답이 완료되어 사용자 화면에 출력될 때까지의 시간.

- Latency: 요청을 보낸 후 데이터를 받기 시작할 때 까지의 시간.

- Think Time: 하나의 요청에 응답을 수신하고 다음 요청을 보낼 때 까지의 시간.

- Request Interval Time: 요청을 보낸 후 다음 요청을 보낼 때 까지의 시간.

  ![](https://t1.daumcdn.net/cfile/tistory/99D20B335A1ADB6927)
  
  

## 3. JMeter 구성 요소

1. Thread Group

   Thread Group이란 JMeter에서 다양한 하위 Element 항목들을 제어하기 위한 시작점이다.

   - Number of Threads(users): Single Thread 수로 사용자 수를 의미
   - Ramp-Up Period
   - Loop Count: Thread가 행하는 작업의 반복 횟수

2. Controller

   Controller란 시험수행절차를 제어하는 역할을 수행하며, Sampler와 Logical Controller 두 가지로 구성된다.

   Sampler는 Request를 server에 전달하는 도구이며, Logical Controller란 Request를 조작할 수 있는 로직을 추가하는 것을 허용하는 도구이다. 두 도구 모두 Thread Group 하위에 생성하고 사용한다.

   ![](https://tech.osci.kr/assets/images/86028454/9.png)

3. Listeners

   Listener는 정보 접근을 제공하는 도구이며, Request 요청들에 대한 Response Time 추이 그래프라던지 실시간 Request/Response 응답을 확인할 수 있는 다양한 플러그인들을 지원한다.



## 4. 실습

### 1. Thread Group 생성

`Test Plan` 아래(오른쪽 클릭 후) Add  - Thread(Users) - Thread Group 생성

Thread Properties 설정

- Number of Threads (users)
- Ramp-up period (seconds)
- Loop Count

### 2. HTTP Header Manager 생성

`application/json` 형식의 Content-Type을 이용할 것이므로 다음 사항을 추가해준다.

- Name: Content-Type, Value: application/json
- Name: accept, Value: application/json (swagger API에서 요청할 때 Header에 들어가므로 추가해줬음)
- HTTP Header Manager 없이도 200 응답이 오는 것으로 봐서는 경우에 따라 다른 것 같다.

### 3. HTTP Cookie Manager

로그인 세션 정보 등을 저장할 필요성이 있는 요청시에 사용.

기입 내용은 크롬 개발자도구 application에서 그대로 입력하자.

### 4. HTTP Request 생성

`Thread Group` 아래(오른쪽 클릭 후) Add - Sampler - HTTP Request 생성

Web Server 설정(예시)

- Server Name or IP: 127.0.0.1
- Port Number: 10010
- HTTP Request: GET/POST/PUT ...
- Path: api/v1/user
- Parameters에 url query로 넣을 항목 넣기
  - path는 어디에 넣어야 할 지 모르겠음. Path에 직접 넣어야 하나.
- Body Data
  - POST

### 5. Listener 추가(여러 가지 그래프들)

주요 사용 Listener

- View Results Tree
- View Results in Table
- Summary Report
- jp@gc - Response Times Over Time(plugin)
- jp@gc - Transactions per Second(plugin)
- Response Time Graph



## 5. 무언가 Advanced

### 1. HTTP Request 요청 결과(Response)를 변수로 저장하기 - JSON Extractor

Thread Group에서 Add - Post Processors - JSON Extractor

설정 예시

- Names of created variables: cacheKey(JSON 형식 response의 key)
- JSON Path expressions: $..cacheKey (전달할 변수명)
- Match No. (0 for Random): 1(정확히 무엇을 의미하는지 모르겠음, -1로 표시해 설명해 놓은 자료가 있는데 변수가 전달되지 않았고, 1로 설정하자 전달되었음.)

설정된 변수를 ${key}와 같이 다른 HTTP Request에서 사용할 수 있음(같은 Thread 그룹 내에서).

참고) 같은 Thread Group에서 기본적으로 HTTP Request가 여러 개 일때 배치 순서대로 작동한다. 여러 Thread Group이 순차적으로 실행되게 하려면 `Test Plan`에서 `Run Thread Groups consecutively`를 체크한다.

### 2. JSON Extractor로 설정한 변수를 다른 Thread Group에서 사용하기

Thread Group1에서 받은 Response에서 JSON Extractor로 변수를 저장하고, 이를 Thread Group2에서 사용하기. 

1. 먼저, Thread Group1에서 Add - Assertions - BeanShell Assertion을 생성. Script에서 아래와 같이 설정.

```java
${__setProperty(cacheKey, ${cacheKey})};
```

2. Thread Group2에서 Add - Pre Processors - BeanShell PreProcessor을 생성. 아래와 같이 `cacheKey` 변수를 가져온다.

```java
String cacheKey = props.get("cacheKey");
String cacheKey = cacheKey.substring(1, cacheKey.length());
vars.put("cacheKey", cacheKey);
```



### 참고

1. https://12bme.tistory.com/272
2. [https://medium.com/@bluewings/%EB%B6%80%ED%95%98%ED%85%8C%EC%8A%A4%ED%8A%B8-jmeter-%EB%9E%80-6299ecc2f7b1](https://medium.com/@bluewings/부하테스트-jmeter-란-6299ecc2f7b1)
3. https://tech.osci.kr/2019/11/29/86028454/
4. https://miiingo.tistory.com/176
5. https://devqa.io/jmeter-pass-variables-between-thread-groups/

