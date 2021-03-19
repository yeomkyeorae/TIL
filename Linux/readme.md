# 리눅스 명령어
**CentOS와 Ubuntu 사이에 차이가 있을 수 있음을 인지하자.**

### 1. netstat(network statistics)
`netstat` 명령어로 TCP 통신을 하고 있는 서비스의 상태를 조회할 수 있다.
```bash
$ nestat -tnlp | grep "LISTEN"
```
위에서 사용한 옵션은 각각 `t: tcp`, `n: 10진수(numeric)`, `l: listening`, `p: 사용중인 프로세스 정보`를 의미한다.
grep을 사용해 "LISTEN" 상태인 포트를 조회할 수도 있다.

### 2. passwd (패스워드 변경)
root 계정으로 로그인 또는 변경(su) 후
```bash
$ passwd
```

### 3. timedatectl (linux timezone)
`timedatectl` 명령어를 사용하면 현재 리눅스에서 사용하고 있는 timezone 정보를 확인할 수 있다. <br />
`timedatectl list-timezones` 명령어를 사용하면 사용 가능한 timezone 리스트를 보여준다. <br />
`timedatectl set-timezone Asia/Seoul` 명령어를 사용하면 해당 timezone 지역으로 리눅스 시간을 변경할 수 있다.
```bash
$ timedatectl
               Local time: Wed 2021-03-17 13:16:36 KST
           Universal time: Wed 2021-03-17 04:16:36 UTC
                 RTC time: Wed 2021-03-17 04:16:36
                Time zone: Asia/Seoul (KST, +0900)
System clock synchronized: yes
              NTP service: n/a
          RTC in local TZ: no
$ timedatectl list-timezones
$ sudo timedatectl set-timezone Asia/Seoul
```
# vi/vim 명령어
### 1. 검색
- 문자열 단순 검색: `/` 입력 후 원하는 문자열 검색한다.
- 맨 첫 줄로 이동: 소문자 `gg`를 입력한다.
- 맨 마지막 줄로 이동: 대문자 `G`를 입력한다.
- 다음 문자열, 이전 문자열: 각각 소문자 `n`과 대문자 `N`을 입력한다.
- 커서 위치의 문자열로 검색: `*`을 누르면 정규표현식으로 검색한다.
- 복사 및 현재 줄 복사: 각각 소문자 `y` 및 소문자 `yy`를 입력한다.
- 붙여넣기: 소문자 `p`를 입력한다
- 커서 이동: h, j, k, l(좌, 하, 상, 우)
- 특정 라인 이동: 예) 1000번 라인으로 이동 `:1000`
