# docker

## 도커 명령어

도커 실행(`run`)

> docker run [OPTIONS] IMAGE[:TAG|@DIGEST] [COMMAND] [ARG...]
>
> 이미지가 없으면 자동으로 다운로드

자주 사용하는 옵션들

| 옵션  | 설명                                                   |
| :---- | :----------------------------------------------------- |
| -d    | detached mode 흔히 말하는 백그라운드 모드              |
| -p    | 호스트와 컨테이너의 포트를 연결 (포워딩)               |
| -v    | 호스트와 컨테이너의 디렉토리를 연결 (마운트)           |
| -e    | 컨테이너 내에서 사용할 환경변수 설정                   |
| –name | 컨테이너 이름 설정                                     |
| –rm   | 프로세스 종료시 컨테이너 자동 제거                     |
| -it   | -i와 -t를 동시에 사용한 것으로 터미널 입력을 위한 옵션 |
| –link | 컨테이너 연결 [컨테이너명:별칭]                        |

### 이미지

설치된 이미지 확인(`images`)

> docker images [OPTIONS] [REPOSITORY[:TAG]]

이미지 다운로드(`pull`)

> docker pull [OPTIONS] NAME[:TAG|@DIGEST]

이미지 삭제하기(`rmi`)



### 컨테이너

컨테이너 목록 확인(`ps`)

> docker ps (실행중인 컨테이너)

- a: 종료된 컨테이너 목록까지

컨테이너 중지(`stop`)

> docker stop [OPTIONS] CONTAINER [CONTAINER...]

컨테이너 제거(`rm`)

> docker rm [OPTIONS] CONTAINER [CONTAINER...]

컨테이너 로그 보기(logs)

> docker logs [OPTIONS] CONTAINER

- --tail 10: 마지막 10줄만 

- -f: 실시간 생성 로그 확인

컨테이너 명령어 실행하기(exec)

실행중인 컨테이너에 들어가 보거나 파일을 실행하고 싶을 때

> docker exec [OPTIONS] CONTAINER COMMAND [ARG...]

```bash
$ docker exec -it mysql /bin/bash
$ mysql -uroot

mysql > show databases;
```





## 예제

### ubuntu container

컨테이너 생성

> docker run -i -t --rm --name HelloDocker ubuntu:16.04 /bin/bash

- `-i -t(-it)`: interactive, Pseudo--ty, 실행된 Bash에 입출력을 한다.
- `--rm`: 프로세스가 종료되면 컨테이너가 자동으로 삭제되도록 한다.
- `--name HelloDocker`: 컨테이너의 이름을 HelloDocker로 설정한다.
- `ubuntu /bin/bash`: 우분투 이미지 안의 bin/bash 실행한다.



### redis container

> docker run -d -p 1234:6379 redis

- 호스트(localhost)의 1234포트를 컨테이너의 6379 포트에 연결 



### MySQL 5.7 container

> docker run -d -p 3306:3306
>
> ​	-e MYSQL_ALLOW_EMPTY_PASSWORD=true
>
> ​	--name mysql
>
> ​	mysql:5.7



## 호스트와 컨테이너의 디렉토리를 연결(mount)

> `-v` 옵션 사용

```bash
# before
docker run -d -p 3306:3306
	-e MYSQL_ALLOW_EMPTY_PASSWORD=true
	--name mysql
	mysql:5.7
	
# after
docker run -d -p 3306:3306
	-e MYSQL_ALLOW_EMPTY_PASSWORD=true
	--name mysql
	-v /my/own/datadir:/var/lib/mysql	# <- volume mount
	mysql:5.7
```



## Docker Compose

YAML 형식의 설정 파일을 사용하는 방식. 여러 가지 설정을 간편하게 설정해 실행할 수 있다.

> 예시

```yaml
version: '2'

services:
   db:
     image: mysql:5.7
     volumes:
       - db_data:/var/lib/mysql
     restart: always
     environment:
       MYSQL_ROOT_PASSWORD: wordpress
       MYSQL_DATABASE: wordpress
       MYSQL_USER: wordpress
       MYSQL_PASSWORD: wordpress

   wordpress:
     depends_on:
       - db
     image: wordpress:latest
     volumes:
       - wp_data:/var/www/html
     ports:
       - "8000:80"
     restart: always
     environment:
       WORDPRESS_DB_HOST: db:3306
       WORDPRESS_DB_PASSWORD: wordpress
volumes:
    db_data:
    wp_data:
```

```bash
docker-compose up
```



## client Test

클라이언트 build 후에 `dist` 폴더 생성 

> .dockerignore

```dockerfile
node_modules
```

> Dockerfile

```dockerfile
# nginx 이미지를 사용합니다. 뒤에 tag가 없으면 latest 를 사용합니다.
FROM nginx

# root 에 app 폴더를 생성
RUN mkdir /app

# work dir 고정
WORKDIR /app

# work dir 에 build 폴더 생성 /app/build
RUN mkdir ./build

# host pc의 현재경로의 build 폴더를 workdir 의 build 폴더로 복사
ADD ./dist ./build

# nginx 의 default.conf 를 삭제
RUN rm /etc/nginx/conf.d/default.conf

# host pc 의 nginx.conf 를 아래 경로에 복사
COPY ./nginx.conf /etc/nginx/conf.d

# 80 포트 오픈
EXPOSE 80

# container 실행 시 자동으로 실행할 command. nginx 시작함
CMD ["nginx", "-g", "daemon off;"]
```

> nginx.conf

```
server {
    listen 80;
    location / {
        root    /app/build;
        index   index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

> build 및 실행

```bash
$ docker build -t nginx-react:0.1 .
$ docker run -d --name client-app -p 3000:80 nginx-react:0.1
```



## 전체 구성 예시

> root

- docker-compose.yml

  ```yaml
  version: "3"
  services:
    api-server:                          
      build:
        dockerfile: Dockerfile
        context: ./build    
      # volumes:
      #   - ./server/:/app      
      #   - /app/node_modules      
      environment:
        - NODE_PATH=src
        - DB_HOST=mariadb
        - DB=test
        - REDIS_HOST=redis
        - REDIS_PORT=6379
      networks:
        - backend
      links:
        - mariadb
        - redis
      depends_on:
        - mariadb
        - redis 
      ports:
        - "10010:10010"
    
    mariadb:
      container_name: mariadb
      image: mariadb:10.5
      environment:
        - MYSQL_ROOT_PASSWORD=""
      ports:
        - "3307:3306"
      networks:
        - backend 
      # volumes:
      #   - /Users/aaaa/con_volumes/mariadb/data:/var/lib/mysql
      #   - /Users/aaaa/con_volumes/mariadb/conf.d:/etc/mysql/conf.d
      restart: always
  
    redis:
      container_name: redis
      image: redis
      environment:
        # - ALLOW_EMPTY_PASSWORD=yes
        - REQUIREPASS=0000
      networks:
        - backend 
      # volumes:
      #   - data:/data/redis
      command: redis-server --requirepass 0000
      ports:
        - "6380:6379"
      restart: always   
    
    nginx:
      restart: always
      build:
        dockerfile: Dockerfile
        context: ./
      ports:
        - '3000:80'
      networks:
        - backend
      
  networks: 
    backend:
      driver: bridge
  
  # volumes:
  #   data:
  #     driver: local  
  ```

- Dockerfile

  ```dockerfile
  FROM nginx
  
  # root 에 app 폴더를 생성
  RUN mkdir /app
  
  # work dir 고정
  WORKDIR /app
  
  # work dir 에 build 폴더 생성 /app/build
  RUN mkdir ./build
  
  # host pc의 현재경로의 build 폴더를 workdir 의 build 폴더로 복사
  ADD ./dist ./build
  
  # nginx 의 default.conf 를 삭제
  RUN rm /etc/nginx/conf.d/default.conf
  
  # host pc 의 nginx.conf 를 아래 경로에 복사
  COPY ./nginx.conf /etc/nginx/conf.d
  
  # 80 포트 오픈
  EXPOSE 80
  
  # container 실행 시 자동으로 실행할 command. nginx 시작함
  CMD ["nginx", "-g", "daemon off;"]
  
  ```

- nginx.conf

  ```
  upstream api {
    server localhost:10010;
  }
  
  server {
    listen 80;
    server_name localhost;
  
    location / {
      root    /app/build;
      index   index.html;
      try_files $uri $uri/ /index.html;
    }
  
    location /api {
      rewrite /api/(.*) /$1 break;
      proxy_pass http://api;
    }
  }
  ```

- build

  - src

  - Dockerfile

    ```dockerfile
    FROM node:12.18.3-alpine
    WORKDIR '/app'
    COPY ./package.json ./
    RUN npm install
    COPY . .
    EXPOSE 10010
    CMD ["npm", "run", "start-local"]
    ```

- dist



## 참고

https://subicura.com/categories/ (초보를 위한 도커 안내서)

https://niceman.tistory.com/36 (Centos7 Docker 설치 및 실행 방법)

https://medium.com/withj-kr/tagged/docker (도커부터 쿠버네티스까지)

https://hello-bryan.tistory.com/169 (Docker Nginx에 React 띄어서 배포*)

https://codechacha.com/ko/dockerizing-react-with-nginx/ (React와 Nginx를 Dockerinzing하는 방법)

https://mia-dahae.tistory.com/31 (Multiple Service를 dockerizing 해보자01)

https://programmingsummaries.tistory.com/392 (node.js를 위한 Dockerfile 작성하기)

https://javaexpert.tistory.com/m/1013 (React, MongoDB, Express, Nginx 도커 개발 환경 구성하기)

https://dev-in-gym.tistory.com/m/16?category=937318 (node, redis 연동 오류 해결 팁)

https://snowdeer.github.io/docker/2018/02/14/docker-push-image-to-docker-hub/ (Docker Hub에 이미지 업로드)

https://phoenixnap.com/kb/install-docker-compose-centos-7 (Installing Docker Compose on Centos7)

https://eyeballs.tistory.com/49 (docker exec)

https://www.44bits.io/ko/post/almost-perfect-development-environment-with-docker-and-docker-compose#version (도커 컴포즈를 활용하여 완벽한 개발 환경 구성하기)

https://stackoverflow.com/questions/37459031/connecting-to-a-docker-compose-mysql-container-denies-access-but-docker-running ("mypassword" -> mypassword)

