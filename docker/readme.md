# 도커(docker)
## 1. image
> image REPOSITORY, TAG명 변경 방법
이미지에 접근하는 기존 REPOSITORY alias가 남아 있으므로 기호에 따라 삭제한다 
```bash
docker image tag REPOSITORY_NAME:TAG_NAME NEW_REPOSITORY_NAME:NEW_TAG_NAME 
docker rmi REPOSITORY_NAME
```
## 2. container
> container NAMES 변경 방법
```bash
docker rename CONTAINER_NAME NEW_CONTAINER_NAME
```
