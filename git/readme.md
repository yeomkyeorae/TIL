# Git

`git`은 `분산형 버전관리시스템(DVCS)`이다.

- window에서 `git`을 사용하기 위해서는 `git bash`를 반드시 설치해야 함.

- 참고자료
  - [Git Scm](https://git-scm.com/book/ko/v2)
  - [누구나 쉽게 이해할 수 있는 Git입문](https://backlog.com/git-tutorial/kr/)



## Git 기본 명령어(로컬)

- 로컬에서 처음 Git을 활용하는 경우 아래의 설정을 해줘야 한다.

  ```bash
  $ git config --global user.name '<Github username>'
  $ git config --global user.email '<Github email>'
  ```

  커밋하는 사람(author)이 누구인지 설정! Github email이랑 다르면,  Github에서 다른 사람이 커밋한 것으로 인식됨!

  *컴퓨터에서 한번만 설정해주면 된다.*

1. **Git 저장소 설정**

   ```bash
   $ git init
   Initialized empty Git repository in C:/Users/student/Desktop/새 폴더/.git/
   
   student@DESKTOP MINGW64 ~/Desktop/새 폴더 (master)
   ```

   - `git init`명령어를 입력하면, 해당 디렉토리에 `.git/`폴더가 생성된다.
   - 모든 git과 관련된 내용은 해당 폴더에 담겨있다.
   - 저장소로 설정되었다면, `git bash`에서 `(master)`가 나타난다.

2. **Staging area(커밋 대상 목록)에 담기**

   ```bash
   $ git add .
   $ git add a.txt
   $ git add startcamp/
   ```

   - `git add`명령어를 통해 특정 파일 혹은 폴더를 `commit`할 목록(`Staging area, INDEX`)에 담아 놓는다.

   - 반드시 `git status` 명령어를 통해 내가 원하는 파일이 반영되었는지 확인한다.

     ```bash
     $ git status
     ...
     Changes to be committed:
       (use "git reset HEAD <file>..." to unstage)
     
             new file:   l.txt
     
     ```

     

3. **이력 남기기(`commit`)**

   ```bash
   $ git commit -m 'commit message'
   ```

   - `commit`은 현재 소스코드의 상태를 **스냅샷** 찍는 것과 동일하다.
   - `Staging Area`에 담겨 있는 내용을 이력으로 남긴다.
   - commit message는 반드시 해당 이력의 내용을 나타내야 한다.(보통 오픈소스프로젝트, 회사 내에서 관련된 약속이 존재한다.)

4. **커밋이력 확인하기**

   ```bash
   $ git log
   commit eafe926f7a24a72e3060cdc41eb1a63b0878d9b1
   Author: yeomkyeorae <duarufp06@gmail.com>
   Date:   Tue Jul 9 09:41:57 2019 +0900
   
       d.txt 생성
   
   ```

   - `git log -n`옵션을 주면, 최근 n개의 커밋을 보여준다.
   - 커밋 이력을 남긴 이후에 커밋 메시지 변경, 삭제 등을 할 수 있는데 이 경우는 매우 조심해야 한다.

5. **git 상태 확인**

   **항상 모든 명령어를 입력하기 전에 아래의 명렁어를 입력하는 습관을 들이자!**

   ```bash
   $ git status
   ```

   

## Git 원격 저장소 활용하기

원격 저장소(`remote repository`)는 `github`, `gitlab`, `bitbucket`등 다양한 서비스를 활용할 수 있다.

1. **원격 저장소**(`remote repository`) 설정

   ```bash
   $ git remote add origin https://github.com/~
   ```

   - 로컬 저장소에 최초에 한번만 등록하면 된다.
   - 원격 저장소(remote)를 `origin`이라는 이름으로 정해진 url을 `등록(add)`하는 것이다.

2. **원격 저장소로 `push`**

   ```bash
   $ git push origin master
   ```

   - `origin`으로 설정된 원격 저장소에 `push`한다.
   
3. **원격 저장소에서 `pull`**

   ```bash
   $ git pull origin master
   ```

   - 원격 저장소에 새로운 변경 사항이 있는 경우 `pull`을 통해 받아온다.

4. **`clone`**

   ```bash
   $ git clone __url__
   ```

   - `clone`은 원격 저장소에서 최초에 받아올 때 활용한다.

## gitignore

> ​	git init을 하면 해당 파일을 작성하는 습관을 들이자!

`.gitignore`파일에 작성된 파일 혹은 폴더 등은 git으로 관리되지 않는다. 예시는 다음과 같다.

```
__pycache__/   # __pycache__ 폴더 안에 있는 내용 모두
*.zip		   # 확장자가 zip인 파일 모두
profile.jpg	   # profile.jpg 파일
```

처음에는 직접 만들기보다 [gitignore](https://gitignore.io)에서 내 개발환경에 맞춰 만들어주는 파일을 적용하자.

예를 들면, pycharm을 쓰고 있을 때 `.idea/`를 올리지 않는다거나, python에서는 `__pycache__/`를 올릴 필요는 없다.



# Tip

1. 특정 파일을 커밋 이력에서 삭제하고 싶다. 다만, 파일은 유지하고 싶을 때

   예) db.sqlite3가 이미 커밋이 되어 버림

   ```bash
   $ git rm --cached db.sqlite3
   ```

   위의 명령어를 작성하고, `.gitignore`에 `db.sqlite3`등록

2. unstage

   ```bash
   $ git reset HEAD <file>
   ```

3. 커밋 메시지 수정(push하기 전에) & 빠뜨린 파일 commit할 때

   ```bash
   $ git commit --amend
   ```
   
# [learn git](https://learngitbranching.js.org/?locale=ko) 학습 내용 정리
## branch

git branch [브랜치명] - 새 브랜치 만들기

git checkout [브랜치명] - 해당 브랜치로 이동



## merge

1. bugFix 브랜치 만들고 이동 후 커밋
2. 다시 main으로 돌아와서 커밋
3. bugFix branch merge 수행

```bash
$ git branch bugFix
$ git checkout bugFix
$ git commit
$ git checkout main
$ git commit
$ git merge bugFix
```



## rebase

리베이스는 기본적으로 커밋들을 모아 복사한 뒤 다른 곳에 떨궈 놓는 것(?)이다. 리베이스를 하면 커밋 흐름을 보기 좋게 한 줄로 만들 수 있어 로그 이력이 깔끔해 진다는 장점이 있다.

```bash
$ git branch bugFix; git checkout bugFix
$ git commit
$ git checkout main
$ git commit
$ git checkout bugFix
$ git rebase main
```



## HEAD

HEAD는 현재 체크아웃된 커밋을 가리키며(현재 작업중인 커밋), 작업트리의 가장 최근 커밋을 가리킨다. 



## 상대 참조

git commit의 해시 값으로 HEAD 값을 이동할 수 있다. 해시 값을 보려면 `git log` 명령어를 입력하면 된다. git의 상대 참조(Relative Ref)는 다음과 같은 방식으로 간편하게 원하는 지점으로 이동할 수 있다.

1. 한번에 한 커밋 위로 움직이는 `^`
2. 한번에 여러 커밋 위로 올라가는 `~<num>`

`main^`는 main의 부모, `main^^`는 main의 부모의 부모를 일컫는다. 

```bash
$ git checkout HEAD^1
```

`HEAD` 또한 상대 참조를 위해 사용할 수 있다.



### 브랜치 강제 옮기기

강제로 main 브랜치를 HEAD에서 3번 뒤로 옮김.

```bash
$ git branch -f main HEAD~3
```



## 작업 되돌리기

`git reset` vs `git revert`

### git reset

git reset은 브랜치로 하여금 예전의 커밋을 가리키도록 이동시키는 방식이다. git reset은 마치 애초에 커밋하지 않은 것처럼 예전 커밋으로 브랜치를 옮기는 것이다. 히스토리를 고쳐 쓴다는 점에서 로컬 브랜치의 경우에 적합하고, 다른 사람이 작업하는 리모트 브랜치에는 사용할 수 없다.

```bash
$ git reset main
```

### git revert

변경분을 되돌리고, 되돌린 내용을 다른 사람들과 공유하기 위해서는 git revert를 써야한다. 되돌리려고 한 커밋 아래에 새로운 커밋이 생성된다. 이 커밋은 되돌리려고 한 커밋과 정확히 반대되는 내용이다. revert를 하면 다른 사람들에게도 변경 내역을 밀어 보낼 수 있다.

```bash
$ git revert pushed
```



## cherry-pick(작업을 여기저기로 옮기기)

현재 위치(HEAD) 아래에 있는 일련의 커밋들(Commit1, Commit2)에 대한 복사본을 만들 때 활용한다.

다음과 같은 형태로 사용한다.

```bash
$ git cherry-pick <Commit1> <Commit2> <...>
$ git cherry-pick C3 C4 C7
```



## 인터랙티브 리베이스(interactive rebase)

rebase 명령어에 `-i` 옵션을 추가하면 된다. 이 옵션을 추가하면 git은 리베이스의 목적지가 되는 곳 아래에 복사될 커밋들을 보여주는 UI를 보여준다. UI에서는

1. 커밋들의 순서를 바꿀 수 있다.
2. 원하지 않은 커밋을 뺄 수 있다.
3. 커밋을 스쿼시(squash)할 수 있다(커밋을 합칠 수 있다).

```bash
$ git rebase -i HEAD~4
```



## 한참 이전 커밋의 내용을 바꿔야 되는 경우(rebase 활용)

1. `git rebase -i` 명령으로 우리가 바꿀 커밋을 가장 최근 순서로 만들기
2. `git commit --amend` 명령으로 커밋 내용 정정
3. `git rebase -i` 명령으로 본래 커밋 순서로 되돌리기



## 한참 이전 커밋의 내용을 바꿔야 되는 경우(cherry-pick 활용)

```bash
$ git checkout main
$ git cherry-pick C2
$ git branch -f main C1
$ git cherry-pick C2 C3
```



## 태그

```bash
$ git tag v1 C1
```

commit 미지정시 HEAD가 있는 지점에 태그를 붙인다.

```bash
$ git tag v1 c2
$ git checkout v1
```

태그를 체크아웃 한 후에는 해당 태그에서 어떤 작업을 완료할 수는 없다.



## describe

현재 커밋 트리에서 어디에 위치해 있는지 알 수 있는 명령어. 

```bash
$ git describe <ref>
```

다음과 같은 출력 형태를 보인다.

```
<tag>_<numCommits>_g<hash>
```

- tag: 는 가장 가까운 부모 태그

- numCommits: 해당 태그가 몇 커밋이나 멀리 떨어져있는지
- hash: 묘사하고 있는 커밋의 해시를 나타낸다.
   
