# 도커(docker)
## 1. 이미지(image)
> 이미지 REPOSITORY, TAG명 변경 방법
이미지에 접근하는 기존 REPOSITORY alias가 남아 있으므로 기호에 따라 삭제한다 
```bash
$ docker image tag REPOSITORY_NAME:TAG_NAME NEW_REPOSITORY_NAME:NEW_TAG_NAME 
$ docker rmi REPOSITORY_NAME
```
## 2. 컨테이너(container)
> 컨테이너 NAMES 변경 방법
```bash
$ docker rename CONTAINER_NAME NEW_CONTAINER_NAME
```

> 컨테이너를 이미지로 저장(commit)
```bash
$ docker commit [options] container_name [image_name[:tag_name]]
```
option
- -a, --author="" (생성자 정보)
- -m, --message="" (이미지 메세지)
- -p, --pause=true/false (이미지 생성시 컨테이너 중지 뒤 commit 할건지 여부)
