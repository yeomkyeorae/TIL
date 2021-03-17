# 명령어
## 1. netstat(network statistics)
`netstat` 명령어로 TCP 통신을 하고 있는 서비스의 상태를 조회할 수 있다.
```bash
nestat -tnlp | grep "LISTEN"
```
위에서 사용한 옵션은 각각 `t: tcp`, `n: 10진수(numeric)`, `l: listening`, `p: 사용중인 프로세스 정보`를 의미한다.
grep을 사용해 "LISTEN" 상태인 포트를 조회할 수도 있다.
